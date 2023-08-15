import React from "react";
import { HiOutlineCamera } from "react-icons/hi";
import { BiImageAdd } from "react-icons/bi";
import { AiOutlineLink } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BsEmojiSmile } from "react-icons/bs";

import Post from "../post/post.jsx";
import Profile from "../../assets/imgs/profile.jpg";
import Profile2 from "../../assets/imgs/profile2.jpg";
import Profile3 from "../../assets/imgs/profile3.jpg";
import Post1 from "../../assets/imgs/post1.jpeg";
import Post2 from "../../assets/imgs/post2.jpeg";

import TextareaForm from "../textareaForm/textareaForm.jsx";

const HomeContent = () => {
    return (
        <div className="lg:grid grid-cols-5 gap-2 lg:gap-6 my-4 mx-2 md:mx-3 lg:mx-8 xl:mx-10 xl:gap-12">
            {/* --------------------  right Side --> Correspond aux Posts---------------------- */}

            <div className="col-span-3 max-w-[745px] my-0 mx-auto">
                {/*------------- Input field of feeds -------------*/}

                <div className="bg-transparent p-3 rounded-md border-[1px] border-gray-800">
                    <div className="flex items-center gap-3">
                        <img
                            src={Profile}
                            alt=""
                            className="w-10 h-10 rounded-full"
                        />
                        {/* Textarea - Input Texts */}
                        <TextareaForm placeholder="What's in your mind ?" bg />
                    </div>

                    <div className="flex justify-between">
                        <div className="flex gap-4 pt-5 items-center">
                            <a href="#photo">
                                <HiOutlineCamera />
                            </a>
                            <a href="#image">
                                <BiImageAdd />
                            </a>
                            <a href="#link">
                                <AiOutlineLink />
                            </a>
                            <a href="#location">
                                <IoLocationOutline />
                            </a>
                            <a href="#emoji">
                                <BsEmojiSmile />
                            </a>
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
                {/*------------- Latest post by friends/others (ici y'aura la liste des publications XD) -------------*/}
                <div className="mt-5">
                    <div className="bg-gray-900 border-[1px] border-solid  border-gray-700  rounded-md p-2 mb-5">
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
                            username="Jane Smith"
                            postImage={Post1}
                            postHour="2h ago"
                            hashtag={
                                <div className="flex gap-2">
                                    <a
                                        href="#hashtag"
                                        className="text-[0.8rem] text-blue-500"
                                    >
                                        #fitness
                                    </a>
                                    <a
                                        href="#hashtag"
                                        className="text-[0.8rem] text-blue-500"
                                    >
                                        #workout
                                    </a>
                                    <a
                                        href="#hashtag"
                                        className="text-[0.8rem] text-blue-500"
                                    >
                                        #gym
                                    </a>
                                </div>
                            }
                            like="1K"
                            share="58"
                            comments="13"
                        />
                    </div>

                    <div className="bg-gray-900 border-[1px] border-solid  border-gray-700  rounded-md p-2 mb-5">
                        <Post
                            description={
                                <div>
                                    <p>Outfit Of the Day ❤️</p>
                                </div>
                            }
                            profileImage={Profile3}
                            username="Dylan scott"
                            postImage={Post2}
                            postHour="4h ago"
                            hashtag={
                                <div className="flex gap-2">
                                    <a
                                        href="#hashtag"
                                        className="text-[0.8rem] text-blue-500"
                                    >
                                        #fashion
                                    </a>
                                    <a
                                        href="#hashtag"
                                        className="text-[0.8rem] text-blue-500"
                                    >
                                        #ootd
                                    </a>
                                    <a
                                        href="#hashtag"
                                        className="text-[0.8rem] text-blue-500"
                                    >
                                        #style
                                    </a>
                                </div>
                            }
                            like="2K"
                            share="100"
                            comments="50"
                        />
                    </div>
                </div>
            </div>

            {/* ----------------------------------55rem--------- left Side ------------------------------------------ */}
            <div className="col-span-2 mt-5 md:mt-0">
                {/* --Events-- */}
                <div className="bg-gray-900 p-2 shadow-[0px_0px_5px_#96d1ff] rounded-md mb-5">
                    <div className="flex items-center gap-3">
                        <div className="p-2">
                            <p className="text-[0.8rem]">Upcoming Events</p>
                        </div>
                    </div>
                </div>
                {/* contacts */}
                <div className="bg-gray-900 p-2 shadow-[0px_0px_5px_#96d1ff] rounded-md mb-5">
                    <div className="flex items-center gap-3">
                        <div className="p-2">
                            <p className="text-[0.8rem]">Contacts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
