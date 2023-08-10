import React from "react";
import { HiOutlineCamera } from "react-icons/hi";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineLink } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";

import Post from "../post/post.jsx";
import Profile from "../../assets/imgs/profile.jpg";
import Profile2 from "../../assets/imgs/profile2.jpg";
import Post1 from "../../assets/imgs/post1.jpeg";

const homeContent = () => {
    return (
        <div className="md:grid grid-cols-5 gap-2 lg:gap-6 my-4 mx-2 md:mx-3 lg:mx-8 xl:mx-10 xl:gap-12">
            {/* --------------------  right Side ---------------------- */}
            <div className="col-span-3">
                {/*------------- Input field of feeds -------------*/}
                <div className="bg-transparent p-3 rounded-md border-[1px] border-gray-800">
                    <div className="flex items-center gap-3">
                        <img
                            src={Profile}
                            alt=""
                            className="w-10 h-10 rounded-full"
                        />
                        <input
                            type="text"
                            placeholder="What's on your mind ?"
                            className="bg-gray-800 bg-opacity-50 w-full h-10 rounded-md px-5 text-white outline-none"
                        />
                    </div>

                    <div className="flex justify-between">
                        <div className="flex gap-4 pt-5 items-center">
                            <HiOutlineCamera />
                            <BiImageAdd />
                            <AiOutlineLink />
                            <IoLocationOutline />
                            <BsEmojiSmile />
                        </div>

                        {/* Btn submint feed => CANCEL or POST */}
                        <div className="flex gap-4 pt-5">
                            <button className="bg-gray-800 px-5 py-1 rounded-md text-white">
                                <a href="#cancel" className="text-[0.8rem]">
                                    Cancel
                                </a>
                            </button>
                            <button className="bg-transparent border-[3px] border-gray-800 px-5 py-1 rounded-md text-white">
                                <a href="#post" className="text-[0.8rem]">
                                    Post
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                {/*------------- Latest post by friends/others -------------*/}
                <div className="bg-gray-900 p-2 mt-5">
                    <div className="flex items-center gap-3">
                        <Post
                            description={
                                <div>
                                    <p>Pushing Our Physical Limits 🏋️‍♂️💪</p>
                                    <p>
                                        Join us on the quest for ultimate
                                        physical performance, from intense
                                        training sessions to the satisfaction of
                                        pushing boundaries. If you're seeking
                                        motivation to go beyond, don't miss this
                                        story.
                                    </p>
                                </div>
                            }
                            profileImage={Profile2}
                            postImage={Post1}
                        />
                    </div>
                </div>
            </div>

            {/* ------------------------------------------- left Side ------------------------------------------ */}
            <div className="col-span-2 mt-5 md:mt-0">
                {/* --Events-- */}
                <div className="bg-gray-900 p-2">
                    <div className="flex items-center gap-3">
                        <div>
                            <div className="p-2">
                                <p className="text-[0.8rem]">Upcoming Events</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default homeContent;
