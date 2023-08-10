import React from "react";
import Sidebar from "../Components/sidebar/sidebar.jsx";
import Container from "../Components/container/container.jsx";

const Messages = () => {
    return (
        <main>
            <Sidebar />
            <Container namePage="Messages" />
        </main>
    );
};

export default Messages;
