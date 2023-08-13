import React from "react";
import Sidebar from "../Components/sidebar/sidebar.jsx";
import Container from "../Components/container/container.jsx";
import { BsFillBellFill } from "react-icons/bs";

const Notifications = () => {
    return (
        <main>
            <Sidebar />
            <Container iconPage={<BsFillBellFill />} namePage="Notifications" />
        </main>
    );
};

export default Notifications;
