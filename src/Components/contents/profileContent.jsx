import React from "react";
import Profile from "../../assets/imgs/profile.jpg";
import { BiEditAlt } from "react-icons/bi";
const profileContent = () => {
    return (
        <section className="container mx-auto mt-8">
            <div>
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
                                Lalaina
                            </h1>
                        </div>
                        <div className="flex justify-center">
                            <h2 className="text-gray-400 text-sm  text-[0.7rem]">
                                @lalaina0904
                            </h2>
                        </div>
                    </div>

                    {/* Informations */}
                    {/* <div>
                    <div className="grid grid-cols-2">
                        <div>
                            <h2>Posts</h2>
                            <h3>0</h3>
                        </div>
                        <div>
                            <h2>Followers</h2>
                            <h3>0</h3>
                        </div>
                        <div>
                            <h2>Following</h2>
                            <h3>0</h3>
                        </div>
                    </div>
                </div> */}
                </div>
            </div>
        </section>
    );
};

export default profileContent;
