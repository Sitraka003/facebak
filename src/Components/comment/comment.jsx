import React from "react";
import Profile3 from "../../assets/imgs/profile3.jpg";

const Comment = () => {
    return (
        <div>
            <div className="mt-3 border-t-[4px] border-gray-800">
                <div className="flex gap-3 mt-3">
                    <img
                        src={Profile3}
                        alt=""
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="text-white font-semibold">user lambda</p>
                        <p className="text-[0.7rem] text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quisquam, voluptatum voluptates.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Comment;
