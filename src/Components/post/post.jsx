import React from "react";
import { BsStopwatch } from "react-icons/bs";
import Profile from "../../assets/imgs/profile.jpg";
import Profile3 from "../../assets/imgs/profile3.jpg";

const post = ({ description, profileImage, postImage }) => {
    return (
        <section>
            <div className="flex items-center gap-3">
                <img
                    src={profileImage}
                    alt=""
                    className="w-10 h-10 rounded-full"
                />
                <div>
                    <p className="text-white font-semibold">Jane Smith</p>
                    <p className="text-[0.7rem] text-gray-400 flex gap-2">
                        <BsStopwatch /> 2 hours ago
                    </p>
                </div>
            </div>

            <div className="mt-3">
                <p className="text-white">{description}</p>

                <div className="mt-3">
                    <img
                        src={postImage}
                        alt=""
                        className="w-full h-96 object-cover rounded-md"
                    />

                    <div className="flex justify-between mt-3">
                        <div className="flex gap-4">
                            <button className="bg-gray-800 px-5 py-1 rounded-md text-white">
                                <a href="#Like" className="text-[0.8rem]">
                                    Like
                                </a>
                            </button>

                            <button className="bg-gray-800 px-5 py-1 rounded-md text-white">
                                <a href="#share" className="text-[0.8rem]">
                                    Share
                                </a>
                            </button>
                        </div>

                        {/* a field input to comment the post */}
                        <div>
                            <div className="flex gap-4">
                                <img
                                    src={Profile}
                                    alt=""
                                    className="w-10 h-10 rounded-full"
                                />
                                <input
                                    type="text"
                                    placeholder="Write a comment..."
                                    className="bg-gray-800 bg-opacity-50 w-full h-10 rounded-md px-5 text-white outline-none"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* show other users comments (max:03) on the post and btn show more */}
                <div className="mt-3 border-t-[4px] border-gray-800">
                    <div className="flex gap-3 mt-3">
                        <img
                            src={Profile3}
                            alt=""
                            className="w-10 h-10 rounded-full"
                        />
                        <div>
                            <p className="text-white font-semibold">
                                user lambda
                            </p>
                            <p className="text-[0.7rem] text-gray-400">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quisquam, voluptatum
                                voluptates.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default post;
