import { React } from "react";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

const formLogin = () => {
    return (
        <div>
            <section className="bg-black">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
                    {/* <a
                        href="#"
                        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
                    >
                        <Image src={logo} alt="logo" width={70} height={70} />
                    </a> */}
                    <div className="w-full rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 bg-gray-800 bg-opacity-10 border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-50 md:text-2xl dark:text-white">
                                Sign in to your account
                            </h1>
                            <form className="space-y-4 md:space-y-6" action="#">
                                <div>
                                    <label
                                        for="email"
                                        className="block mb-2 text-sm font-medium text-gray-50 dark:text-white"
                                    >
                                        Your email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="border text-gray-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-200 dark:text-white focus:ring-gray-200 focus:border-gray-200"
                                        placeholder="name@stellar.com"
                                        required=""
                                    />
                                </div>
                                <div>
                                    <label
                                        for="password"
                                        className="block mb-2 text-sm font-medium text-gray-50 dark:text-white"
                                    >
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="••••••••"
                                        className="border text-gray-100 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-200 dark:text-white focus:ring-gray-200 focus:border-gray-200"
                                        required=""
                                    />
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="remember"
                                                aria-describedby="remember"
                                                type="checkbox"
                                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                required=""
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label
                                                for="remember"
                                                className="text-gray-500 dark:text-gray-300"
                                            >
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full text-gray-900 bg-gray-50 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                >
                                    Sign in
                                </button>

                                {/* - register redirection link - */}
                                <p className="mb-0 mt-5 pt-1 text-sm font-semibold text-white">
                                    Don't have an account?
                                    <Link
                                        to="/Register"
                                        className="ms-5 text-red-500 transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                                    >
                                        Register
                                    </Link>
                                </p>

                                {/* back home */}
                                <div className="flex flex-row lg:justify-start">
                                    <p className="mb-0 mr-4 text-lg text-white">
                                        <Link
                                            to="/"
                                            className="text-white  flex gap-5 items-center text-[0.8rem]"
                                        >
                                            <span>Back to home</span>
                                            <BsChevronRight />
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default formLogin;
