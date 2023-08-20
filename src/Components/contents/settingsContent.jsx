import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const SettingsContent = () => {
    const [users, setUsers] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [id, setId] = useState("")

    useEffect(()=>{
        const userString = localStorage.getItem('user');
        const user = JSON.parse(userString)
        setUserName(user.username)
        setEmail(user.email)
        setId(user.id)
    }, [])

    useEffect(()=>{
        getUsers();
    }, []);

    const getUsers = async ()=>{
        try {
            const response = await axios.get('http://localhost:8080/users');
            setUsers(response.data);
        
            const userString = localStorage.getItem('user');
            const user = JSON.parse(userString);
            const userEmail = user.email;
        
            const matchingUser = response.data.find(user => user.email === userEmail);
            setCurrentUser(matchingUser);
        
            if (matchingUser) {
              const currentUserId = matchingUser.id;
              console.log(currentUserId);
            }
          } catch (error) {
            console.error(`Erreur lors de la récupération des utilisateurs: ${error}`);
          }
    }


    return (
       
    <div>
        <div>
        {currentUser && (
                <div>
                    <h2>Utilisateur Actuel</h2>
                    <p>Nom: {currentUser.username}</p>
                    <p>id: {currentUser.id}</p>
                    <p>Email: {currentUser.email}</p>
                    <img src={currentUser.photoUrl} alt={currentUser.name} />
                </div>
            )}
    </div>
    </div>
    
        );
};

export default SettingsContent;
