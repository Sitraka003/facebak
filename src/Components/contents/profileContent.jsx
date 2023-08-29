import React from "react";
import Profile from "../../assets/imgs/profile.jpg";

import { BiEditAlt } from "react-icons/bi";
import { useState, useEffect } from "react";
import axios from "axios";

const ProfileContent = () => {
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [id, setId] = useState("");
    const [pic, setPic] = useState("");
    const [bio, setBio] = useState("");

    useEffect(() => {
        const userString = localStorage.getItem("user");
        const user = JSON.parse(userString);
        setUserName(user.username);
        setEmail(user.email);
        setId(user.id);
        setPic(user.photo);
        // console.log(user.id);
        //getUserById(user.id)
    }, [])
    const getUserById=async (id)=>{
        try{
            const response= await axios.get(`http://127.0.0.1:8080/users/${id}`)
            const value=response.data
            console.log(response);
            setBio(response)
        }
        catch(error){
            console.log(error);
        }
    }
    /*const sendImage=async(imageData)=>{
        try{
            const formData=new FormData();
            formData.append("image",imageData)
            const response = await axios.post("http://localhost:4000/upload", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            const uploadedImage = response.data.name
            console.log(uploadedImage);

            console.log("Image téléchargée avec succès.");
        } catch (error) {
            console.error("Erreur lors du téléchargement de l'image :", error);
        }
        }
*/
    

    const [newPic, setNewPic] = useState("");
    const handleProfilChange = () => {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "image/*";
        fileInput.style.display = "none";

        fileInput.addEventListener("change", (event) => {
            const selectedFile = event.target.files[0];
            if (selectedFile) {
               // sendImage(selectedFile);
                console.log("image envoyé avec succes", selectedFile.name);
                //setNewPic("http://localhost:4000/uploads" + selectedFile.name);
            }
        });

        fileInput.click();
    };

    const [changes, setChanges]= useState(false);
    const changeProfil = () =>{
        console.log("this work");
        setChanges(true)
    }

    const currentUserString = localStorage.getItem("user");
    const theUser = JSON.parse(currentUserString);
    const theEmail = theUser.email;

    const [userstate, SetUserstate] = useState({
        bio:"",
        email: theEmail,
        username: "",
        password: "",
        confirmPassword: ""
    })
    const changeProfilStatus = async (e)=>{
        e.preventDefault();
        
        try{
            const response = await axios.put('http://localhost:8080/users', userstate)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem('user', JSON.stringify(userstate))

        }catch(error){
            if(error.response){
                console.log(error.response.data);
                console.log(userstate);
            }
        }
    }

    return (
        <section className="container mx-auto mt-8">
            <div className="border-b-2 border-gray-300 pb-5">
                {/* { photo de couverture } */}
                <div className="h-48 bg-gray-900">
                    <div className="flex justify-end items-end h-full">
                        <button className="text-white px-2 py-1">
                            <BiEditAlt className="text-[1.5rem]" />
                        </button>
                    </div>
                </div>
                {/* Profile img and informations */}
                <div className="grid grid-flow-col relative">
                    <div className="absolute top-[-2rem] right-0 left-0">
                        {/* Profile img */}
                        <div className="flex justify-center">
                            <img
                                src="../../assets"
                                alt="profile"
                                className="rounded-full h-32 w-32"
                            />
                        </div>
                    </div>

                    <div className="mt-32">
                        {/* Informations */}
                        <div className="flex justify-center">
                            <h1 className="text-white font-semibold text-[0.8rem]">
                                {username}
                            </h1>
                        </div>
                        <div className="flex justify-center">
                            <h2 className="text-gray-400 text-sm  text-[0.7rem]">
                                {email}
                            </h2>
                        </div>
                        <div className="flex justify-center">
                            <h2 className="text-gray-400 text-sm  text-[0.7rem]"></h2>
                        </div>
                        <div className="flex justify-center items-center mt-1.5"></div>
                    </div>
                </div>
                <button onClick={handleProfilChange}>add profil picture</button>
                <button onClick={changeProfil}>change profil detail</button>
                <div>
                {changes && (
                    <div>
                        <form  >
                            <input type="text" placeholder="your new username"
                            value={userstate.username}
                            onChange={e=>SetUserstate({...userstate, username: e.target.value})}/>
                            <input type="text" placeholder="your new bio"
                            value={userstate.bio}
                            onChange={e=>SetUserstate({...userstate, bio: e.target.value})}
                            />
                            <input type="password" placeholder="your new password"
                            value={userstate.password}
                            onChange={e=>SetUserstate({...userstate, password: e.target.value})}
                            />
                            <input type="password" placeholder="confirm your new password"
                            value={userstate.confirmPassword}
                            onChange={e=>SetUserstate({...userstate, confirmPassword: e.target.value})}/>
                            <input type="button" value="Submit" onClick={changeProfilStatus}/>
                        </form>
                    </div>
                )}
                </div>

                {/* Profile informations */}
                <div className="mt-5">
                    <div className="flex justify-center">
                        <ul className="flex gap-16">
                            <li className="text-white text-[0.8rem]">
                                <span className="font-semibol px-2">01</span>
                                <a href="#">Friends</a>
                            </li>
                            <li className="text-white text-[0.8rem]">
                                <span className="font-semibold px-2">03</span>
                                pages s{" "}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Profile content */}
            <div className="mt-8">
                <div className="flex justify-between">
                    <ul className="flex gap-16">
                        <li className="text-white text-[0.8rem]">
                            <a href="#">About</a>
                        </li>

                        <li className="text-white text-[0.8rem]">
                            <a href="#Post">Post</a>
                        </li>
                        <li className="text-white text-[0.8rem]">
                            <a href="#">Photos</a>
                        </li>
                        <li className="text-white text-[0.8rem]">
                            <a href="#">Videos</a>
                        </li>

                        <li className="text-white text-[0.8rem]">
                            <a href="#">More</a>
                        </li>
                    </ul>
                    <div>
                        <button className="text-white px-3 py-1 rounded-md">
                            ...
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile content */}
        </section>
    );
};

export default ProfileContent;
