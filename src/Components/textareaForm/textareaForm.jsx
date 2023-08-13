import React, { useState } from "react";

const TextareaForm = ({ placeholder, bg, isActive }) => {
    const [comment, setComment] = useState("");
    const [isFocused, setIsFocused] = useState(false);

    const handleInputChange = (event) => {
        setComment(event.target.value);
        event.target.style.height = "auto";
        event.target.style.height = event.target.scrollHeight + "px";
    };
    return (
        <textarea
            rows="1"
            value={comment}
            onChange={handleInputChange}
            placeholder={placeholder}
            className={`w-full rounded-md px-3 p-3 text-white outline-none resize-none ${
                bg ? "bg-gray-800 bg-opacity-70" : "bg-transparent"
            }`}
        ></textarea>
    );
};

export default TextareaForm;
