import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../Components/sidebar/sidebar.jsx";
import Container from "../Components/container/container.jsx";
import { AiFillHome } from "react-icons/ai";

const Home = () => {
    // const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const navigate = useNavigate();

    // useEffect(() => {
    //     const checkAuthentication = async () => {
    //         try {
    //             // Obtenir le token JWT depuis les cookies (ou le stockage local)
    //             const token = document.cookie.replace(
    //                 /(?:(?:^|.*;\s*)jwt\s*\=\s*([^;]*).*$)|^.*$/,
    //                 "$1"
    //             );

    //             if (!token) {
    //                 navigate("/Login");
    //                 return;
    //             }

    //             // Faire une requête au backend pour vérifier l'authentification
    //             const response = await fetch("/api/check-auth", {
    //                 method: "GET",
    //                 headers: {
    //                     Authorization: `Bearer ${token}`,
    //                 },
    //             });

    //             if (response.ok) {
    //                 setIsAuthenticated(true);
    //             } else {
    //                 navigate("/Login");
    //             }
    //         } catch (error) {
    //             console.error(
    //                 "Erreur lors de la vérification de l'authentification",
    //                 error
    //             );
    //         }
    //     };

    //     checkAuthentication();
    // }, []);

    // if (!isAuthenticated) {
    //     return null; // Empêche le rendu de la page Home si non authentifié
    // }

    return (
        <main>
            <Sidebar />
            <Container iconPage={<AiFillHome />} namePage="Home" />
        </main>
    );
};

export default Home;
