import React from "react";
import { Link } from "react-router-dom";

const UserProfil = ({ pseudo, username, userImage }) => {
    return (
        <div>
            <div className="flex items-center gap-3">
                <div className="flex-col hidden md:flex">
                    <p className="text-white font-semibold text-[0.8rem]">
                        {pseudo}
                    </p>
                    <p className="text-gray-400 text-sm  text-[0.7rem]">
                        {username}
                    </p>
                </div>

                <Link to="/Profile">
                    <img
                        src={userImage}
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />
                </Link>
            </div>
        </div>
    );
};

export default UserProfil;
