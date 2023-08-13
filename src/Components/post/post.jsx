import React from "react";

import { BsStopwatch, BsEmojiSmile } from "react-icons/bs";
import { AiOutlineLike, AiOutlineLink } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { MdOutlineModeComment } from "react-icons/md";
import { HiOutlineCamera } from "react-icons/hi";
import { BiImageAdd, BiSend } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";

import Profile from "../../assets/imgs/profile.jpg";

import TextareaForm from "../textareaForm/textareaForm.jsx";

const Post = ({ description, profileImage, postImage }) => {
    return (
        <section>
            <div className="flex items-center gap-3">
                <img
                    src={profileImage}
                    alt="user_profile"
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
                        alt="post_img"
                        className="w-full h-fit object-cover rounded-md"
                    />

                    <div className="flex justify-between items-center mt-3">
                        <div className="flex gap-5">
                            <button className=" py-1  text-white flex gap-1 items-center">
                                <p className="pt-2 text-[0.8rem]">1K</p>
                                <a href="#Like" className="text-xl">
                                    <AiOutlineLike />
                                </a>
                            </button>

                            <button className=" py-1  text-white flex gap-1 items-center">
                                <p className="pt-2 text-[0.8rem]">57</p>
                                <a href="#share" className="text-xl">
                                    <PiShareFatLight />
                                </a>
                            </button>
                        </div>

                        {/* PS : à cliquer pour afficher tout les commentaires du poste*/}
                        <div>
                            <a href="#allcomments" className="text-xl">
                                <MdOutlineModeComment />
                            </a>
                        </div>
                    </div>
                </div>

                {/* <div className="mt-3 border-t-[4px] border-gray-800">
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
                </div> */}

                {/* a field input to comment the post */}
                <div className="my-3 pt-5 border-t-[4px] border-gray-800">
                    <div className="flex gap-4">
                        <img
                            src={Profile}
                            alt=""
                            className="w-10 h-10 rounded-full"
                        />

                        <div className={`flex gap-3 w-full`}>
                            <div
                                className={`bg-gray-800 bg-opacity-70 rounded-md w-full md:flex`}
                            >
                                {/* Text area - Input text for comments */}

                                <TextareaForm placeholder="Write a comment..." />

                                <div className="flex gap-4 items-center justify-end p-3">
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
                            </div>

                            <button className=" px-3 rounded-md text-gray-50 text-[1.2rem]">
                                <a href="#send">
                                    <BiSend />
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Post;
