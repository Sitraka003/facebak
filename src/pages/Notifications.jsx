import React from "react";
import Sidebar from "../Components/sidebar/sidebar.jsx";
import Container from "../Components/container/container.jsx";

const Notifications = () => {
    return (
        <main>
            <Sidebar />
            <Container namePage="Notifications" />
        </main>
    );
};

export default Notifications;
