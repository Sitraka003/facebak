import React from "react";
import { NavLink } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { BiSolidShoppingBagAlt, BiSolidNews } from "react-icons/bi";
import { AiFillHome } from "react-icons/ai";
import { HiUsers } from "react-icons/hi";
import { CiLogout } from "react-icons/ci";
import style from "./sidebar.scss";

const Sidebar = () => {
    return (
        <section>
            <aside
                className={`fixed inset-y-0 left-0 bg-black border-r-[1px] border-gray-800 max-h-screen w-16 lg:w-48 overflow-y-auto ${style.sidebar}`}
            >
                <div className="flex flex-col justify-between h-full">
                    <div className="flex-grow">
                        <div className="px-2 py-6">
                            <h1 className="text-xl pb-4 hidden lg:block ml-5">
                                <span className="text-gray-100">facebak</span>
                            </h1>

                            {/* search */}
                            <div className="mt-6">
                                <div className="relative">
                                    {/* <input
                                        type="text"
                                        className="bg-transparent md:border-[2px] border-gray-800 rounded-md w-full px-4 py-2 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-gray-700"
                                    /> */}
                                    <div className="absolute top-0 flex items-center h-full ml-3 md:ml-5">
                                        <a href="#searchhh">
                                            <BsSearch className="text-gray-50" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-2">
                            <ul className="">
                                <li className="mb-4">
                                    <NavLink
                                        to="/"
                                        activeClassName={style.active}
                                        exact
                                        className="flex gap-4 items-center rounded-sm font-bold text-sm text-gray-100 py-3 justify-center lg:justify-start lg:px-4 px-0 bg-transparent hover:bg-gray-200 hover:text-gray-700 transition duration-150 ease-out hover:ease-in"
                                    >
                                        <AiFillHome className="text-[20px]" />
                                        <span className="lg:block hidden text-[0.9rem]">
                                            Home
                                        </span>
                                    </NavLink>
                                </li>

                                <li className="mb-4">
                                    <NavLink
                                        to="/Community"
                                        activeClassName={style.active}
                                        className="flex gap-4 rounded-sm font-bold text-sm text-gray-100 py-3 justify-center lg:justify-start lg:px-4 px-0 bg-transparent hover:bg-gray-200 hover:text-gray-700 transition duration-150 ease-out hover:ease-in"
                                    >
                                        <HiUsers className="text-[20px]" />
                                        <span className="lg:block hidden text-[0.9rem]">
                                            Community
                                        </span>
                                    </NavLink>
                                </li>

                                <li className="mb-4">
                                    <NavLink
                                        to="/Marketplace"
                                        activeClassName={style.active}
                                        className="flex gap-4 rounded-sm font-bold text-sm text-gray-100 py-3 justify-center lg:justify-start lg:px-4 px-0 bg-transparent hover:bg-gray-200 hover:text-gray-700 transition duration-150 ease-out hover:ease-in"
                                    >
                                        <BiSolidShoppingBagAlt className="text-[20px]" />
                                        <span className="lg:block hidden text-[0.9rem]">
                                            Marketplace
                                        </span>
                                    </NavLink>
                                </li>
                                <li className="mb-4">
                                    <NavLink
                                        to="/News"
                                        activeClassName={style.active}
                                        className="flex gap-4 rounded-sm font-bold text-sm text-gray-100 py-3 justify-center lg:justify-start lg:px-4 px-0 bg-transparent hover:bg-gray-200 hover:text-gray-700 transition duration-150 ease-out hover:ease-in"
                                    >
                                        <BiSolidNews className="text-[20px]" />
                                        <span className="lg:block hidden text-[0.9rem]">
                                            News feed
                                        </span>
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4">
                        <button
                            type="button"
                            class="inline-flex items-center justify-center h-9 px-4 rounded-md bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"
                        >
                            <CiLogout className="text-sm" />
                        </button>

                        <span class="font-bold text-sm ml-2 text-[0.8rem]">
                            Logout
                        </span>
                    </div>
                </div>
            </aside>
        </section>
    );
};

export default Sidebar;

// ${
//     activeMenuItem === "news"
//         ? ""
//         : "bg-transparent hover:bg-gray-200 hover:text-gray-700"
// }

// ${
//     activeMenuItem === "marketplace"
//         ? "bg-gray-900 bg-opacity-80"
//         : "bg-transparent hover:bg-gray-200 hover:text-gray-700"
// }

// ${
//     activeMenuItem === "community"
//         ? "bg-gray-900 bg-opacity-80"
//         : "bg-transparent hover:bg-gray-200 hover:text-gray-700"
// }

// ${
//     activeMenuItem === "home"
//         ? "bg-gray-900 bg-opacity-80"
//         : ""
// }

//

//

//className={`flex gap-4  rounded-md font-bold text-sm text-gray-100 py-3 justify-center lg:justify-start lg:px-4 px-0`}

//className={`flex gap-4  rounded-md font-bold text-sm text-gray-100 py-3 justify-center lg:justify-start lg:px-4 px-0`}
