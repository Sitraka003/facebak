import React from "react";
import Profile from "../../assets/imgs/profile.jpg";
import { BiEditAlt } from "react-icons/bi";
import { useEffect, useState, useContext } from "react";
const ProfileContent = () => {
    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [id, setId] = useState("")

    useEffect(()=>{
        const userString = localStorage.getItem('user');
        const user = JSON.parse(userString)
        setUserName(user.username)
        setEmail(user.email)
        setId(user.id)
    }, [])
    return (
        <section className="container mx-auto mt-8 mx-16 ">
            <div className="border-b-2 border-gray-300 pb-5">
                {/* { photo de couverture } */}
                <div className="h-48 bg-gray-900">
                    <div className="flex justify-end items-end h-full">
                        <button className="text-white px-2 py-1">
                            <BiEditAlt className="text-[1.5rem]" />
                        </button>
                    </div>
                </div>
                {/* Profile img and informations */}
                <div className="grid grid-flow-col relative">
                    <div className="absolute top-[-2rem] right-0 left-0">
                        {/* Profile img */}
                        <div className="flex justify-center">
                            <img
                                src={Profile}
                                alt="profile"
                                className="rounded-full h-32 w-32"
                            />
                        </div>
                    </div>

                    <div className="mt-32">
                        {/* Informations */}
                        <div className="flex justify-center">
                            <h1 className="text-white font-semibold text-[0.8rem]">
                                {username}
                            </h1>
                        </div>
                        <div className="flex justify-center">
                            <h2 className="text-gray-400 text-sm  text-[0.7rem]">
                                {email}
                            </h2>
                        </div>
                    </div>
                </div>

                {/* Profile informations */}
                <div className="mt-5">
                    <div className="flex justify-center">
                        <ul className="flex gap-16">
                            <li className="text-white text-[0.8rem]">
                                <span className="font-semibol px-2">01</span>
                                <a href="#">Friends</a>
                            </li>
                            <li className="text-white text-[0.8rem]">
                                <span className="font-semibold px-2">03</span>
                                pages s{" "}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Profile content */}
            <div className="mt-8">
                <div className="flex justify-between">
                    <ul className="flex gap-16">
                        <li className="text-white text-[0.8rem]">
                            <a href="#">About</a>
                        </li>

                        <li className="text-white text-[0.8rem]">
                            <a href="#Post">Post</a>
                        </li>
                        <li className="text-white text-[0.8rem]">
                            <a href="#">Photos</a>
                        </li>
                        <li className="text-white text-[0.8rem]">
                            <a href="#">Videos</a>
                        </li>

                        <li className="text-white text-[0.8rem]">
                            <a href="#">More</a>
                        </li>
                    </ul>
                    <div>
                        <button className="text-white px-3 py-1 rounded-md">
                            ...
                        </button>
                    </div>
                </div>
            </div>

            {/* Profile content */}
        </section>
    );
};

export default ProfileContent;
