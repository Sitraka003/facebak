import React, { useState } from "react";

function SignUpForm() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        username: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };



    function handleSubmit(){
        fetchData(`http://localhost:8080/api/v1/customers/b3/${search}`)
        .then((data)=>{
           SubmitEvent(data)
           console.log(data);
           Router.push({
               pathname:'/resultset',
               query:{data}
             })
   
        })
        .catch((error)=>{
           console.log(error);
        })
        
    return (
        <div>
            <h2>Inscription</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email :</label>
                <br />
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
                <br />

                <label htmlFor="password">Mot de passe :</label>
                <br />
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                />
                <br />

                <label htmlFor="confirmPassword">
                    Confirmer le mot de passe :
                </label>
                <br />
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                />
                <br />

                <label htmlFor="username">Nom d'utilisateur :</label>
                <br />
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                />
                <br />
                <br />

                <button type="submit" id="submitSignUp">
                    S'inscrire
                </button>
            </form>
        </div>
    );
}

export default SignUpForm;
