import React from "react";
import { Link } from "react-router-dom";
import { BsFillBellFill } from "react-icons/bs";
import { IoChatbubbles, IoSettings } from "react-icons/io5";

import HomeContent from "../contents/homeContent.jsx";
import CommunityContent from "../contents/communityContent.jsx";
import MarketplaceContent from "../contents/marketplaceContent.jsx";
import NewsContent from "../contents/newsContent.jsx";

import MessagesContent from "../contents/messagesContent.jsx";
import SettingsContent from "../contents/settingsContent.jsx";
import ProfileContent from "../contents/profileContent.jsx";
import NotificationsContent from "../contents/notificationsContent.jsx";

import Profile1 from "../../assets/imgs/profile.jpg";

import Footer from "../footer/footer.jsx";

const container = ({ iconPage, namePage }) => {
    return (
        <section>
            <div className="ml-16 lg:ml-48 max-h-screen overflow-auto bg-[#050e15bd] h-screen flex justify-center">
                <div className="w-full">
                    {/* ------- Header -------- */}
                    <header className="bg-black py-3 px-6 flex justify-between items-center border-b-[1px] border-gray-800">
                        {/* -----------------------------//-------------------------------- */}
                        <div>
                            {/* Icon Page ! where we are actually ? */}
                            <div className="flex items-center gap-3">
                                <p className="flex items-center gap-3">
                                    {iconPage} <span>{namePage}</span>
                                </p>
                            </div>
                        </div>

                        {/* -----------------------------//-------------------------------- */}
                        <div className="flex gap-10">
                            <div className="flex gap-5">
                                {/* Messages */}
                                <div className="flex items-center gap-3">
                                    <div className="bg-gray-900 rounded-full p-2">
                                        <Link
                                            to="/Messages"
                                            className="cursor-pointer"
                                        >
                                            <IoChatbubbles />
                                        </Link>
                                    </div>
                                </div>
                                {/* Notification */}
                                <div className="flex items-center gap-3">
                                    <div className="bg-gray-900 rounded-full p-2">
                                        <Link
                                            to="/Notifications"
                                            className="cursor-pointer"
                                        >
                                            <BsFillBellFill />
                                        </Link>
                                    </div>
                                </div>
                                {/* Settings */}
                                <div className="flex items-center gap-3">
                                    <div className="bg-gray-900 rounded-full p-2">
                                        <Link
                                            to="/Settings"
                                            className="cursor-pointer"
                                        >
                                            <IoSettings />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div>
                                {/* Profile1 */}
                                <div className="flex items-center gap-3">
                                    <div className="flex flex-col">
                                        <span className="text-white font-semibold text-[0.8rem]">
                                            Lalaina
                                        </span>
                                        <span className="text-gray-400 text-sm  text-[0.7rem]">
                                            @lalaina0904
                                        </span>
                                    </div>
                                    <Link to="/Profile">
                                        <img
                                            src={Profile1}
                                            alt=""
                                            className="w-10 h-10 rounded-full"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* ------- Main [Page Principale de chaque Pages] -------- */}
                    <div className="flex flex-col justify-between h-full">
                        <main>
                            {/* 
                        --- if namePage == "Home" --> show HomeContent 
                        --- if namePage == "Community" ---> show CommunityContent
                        --- if namePage == "Marketplace" ---> show MarketplaceContent
                        --- if namePage == "News" ---> show NewsContent
                        --- if namePage == "Profile" ---> show ProfileContent
                        --- if namePage == "Settings" ---> show SettingsContent
                        --- if namePage == "Notifications" ---> show NotificationsContent
                        --- if namePage == "Messages"---> show MessagesContent
                        */}
                            {namePage === "Home" ? (
                                <HomeContent />
                            ) : namePage === "Community" ? (
                                <CommunityContent />
                            ) : namePage === "Marketplace" ? (
                                <MarketplaceContent />
                            ) : namePage === "News" ? (
                                <NewsContent />
                            ) : namePage === "Profile" ? (
                                <ProfileContent />
                            ) : namePage === "Settings" ? (
                                <SettingsContent />
                            ) : namePage === "Notifications" ? (
                                <NotificationsContent />
                            ) : namePage === "Messages" ? (
                                <MessagesContent />
                            ) : (
                                <div>Not Found</div>
                            )}
                        </main>

                        {/* ------- Footer -------- */}

                        <Footer />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default container;
