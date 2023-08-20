import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const MessagesContent = () => {

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



    const [users, setUsers] = useState([]); //1. créer un état pour stocker les utilisateurs

    useEffect(()=>{
        getUsers();  // 2. Appeler cette fonction quand le composant est monté 
    }, []);

    const getUsers = async ()=>{
        try {
            const response = await axios.get('http://localhost:8080/users') //3. faire la requête HTTP grâce à axios
            setUsers(response.data);  // 4. stocker le résultat dans l'état
        } catch (error) {
            console.error(`Erreur lors de la récupération des utilisateurs: ${error}`);
        }
    }



    return (
        <div>
            <h1>Liste des utilisateurs</h1>
            {/* 5. Afficher les utilisateurs */}
            {users.map((user, index) => (
                <div key={index}>
                    <h2>{user.id}</h2>
                    <img src={user.photo} alt={user.name} />
                    <h3>{user.email}</h3>
                    {/* Continue ici avec tous les autres informations de l'utilisateur */}
                </div>
            ))}
        </div>
    );
};

export default MessagesContent;
