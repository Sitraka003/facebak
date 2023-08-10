import React from "react";
import Sidebar from "../Components/sidebar/sidebar.jsx";
import Container from "../Components/container/container.jsx";

const Settings = () => {
    return (
        <main>
            <Sidebar />
            <Container namePage="Settings" />
        </main>
    );
};

export default Settings;
