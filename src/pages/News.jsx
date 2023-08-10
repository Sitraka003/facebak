import React from "react";
import Sidebar from "../Components/sidebar/sidebar.jsx";
import Container from "../Components/container/container.jsx";

import { BiSolidNews } from "react-icons/bi";

const News = () => {
    return (
        <main>
            <Sidebar />
            <Container iconPage={<BiSolidNews />} namePage="News" />
        </main>
    );
};

export default News;
