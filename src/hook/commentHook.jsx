import { useState } from "react";

 function useCommentState() {
    const [isComment, setComment] = useState(false);

    const showComment = () => {
        setComment(true);
    }

    const hideComment = () => {
        setComment(false);
    }

    return { isComment, showComment, hideComment };
}
