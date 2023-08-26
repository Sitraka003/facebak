import "./1-post-list.css";
import { PostIteme } from "./post-item.jsx";
import { Suggestion } from "./suggestion";

export function PostList() {
    return (
        <div className="post-list-container">
            <div className="post-list-space">
                <PostIteme />
                <PostIteme />
                <PostIteme />
                <PostIteme />
            </div>
            <div className="post-suggest-container">
                <Suggestion/>
            </div>
        </div>
    )
}