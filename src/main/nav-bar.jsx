import React from 'react';
import "./nav-bar.css";
import HomeIcon from '@mui/icons-material/Home';
import CommentIcon from '@mui/icons-material/Comment';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddBoxIcon from '@mui/icons-material/AddBox';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import { useState } from "react";
import ev from "../utils/eventHandler";
import { useLocation } from "react-router-dom";

function Footer() {
    return (
        <footer>
            © 2023 H1 - GroupXWeb2
        </footer>
    )
}

const iconData = [
    { icon: HomeIcon, path: "/home/", text: "Home", count: "+15" },
    { icon: CommentIcon, path: "/home/chat", text: "Chat", count: "10" },
    { icon: NotificationsIcon, path: "/home/notif", text: "Notifications", count: "+10" },
    { icon: AddBoxIcon, path: "/home/newPost", text: "New Post" },
];

export function NavBar() {
    const color = 'rgb(7, 237, 206)';
    const iconStyle = {
        fontSize: 35,
        color: color,
    };
    const iconHoverStyle = {
        fontSize: 35,
        color: "white",
    };
    const iconStyle2 = {
        fontSize: 30,
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleIconMouseEnter = (index) => {
        const newHoverStates = iconData.map((_, i) => i === index);
        setIconHoverStates(newHoverStates);
    };

    const handleIconMouseLeave = () => {
        setIconHoverStates(new Array(iconData.length).fill(false));
    };

    const [iconHoverStates, setIconHoverStates] = useState(new Array(iconData.length).fill(false));

    return (
        <>
            <nav className={`nav ${isMenuOpen ? 'open' : 'closed'}`}>
                <div className="nav_interaction">
                    {iconData.map((data, index) => (
                        <div
                            key={data.path}
                            onMouseEnter={() => handleIconMouseEnter(index)}
                            onMouseLeave={handleIconMouseLeave}
                            className={location.pathname === data.path ? 'i-am' : ''}
                            onClick={() => { toggleMenu(); ev.goToPage(data.path); }}>
                            <div className="p-r">
                                {React.createElement(data.icon, {
                                    style: iconHoverStates[index] || location.pathname === data.path ? iconHoverStyle : iconStyle
                                })}
                                {data.count && <div id={`${data.text.toLowerCase()}-count`}>{data.count}</div>}
                            </div>
                            <p>{data.text}</p>
                        </div>
                    ))}
                </div>
                <div className="params_space" onClick={toggleMenu}>
                    <SettingsRoundedIcon style={iconStyle} />
                    <p>Settings</p>
                </div>

                <Footer></Footer>
            </nav>
            <div className={`nav-mobile ${!isMenuOpen ? 'open' : 'close'}`} onClick={toggleMenu}>
                <DoubleArrowIcon style={iconStyle2} />
            </div>
        </>
    )
}