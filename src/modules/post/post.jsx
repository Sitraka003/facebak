import { Reaction } from "./reaction";
import "./post.css";

export function Post (){
    return (
        <div className="post-container">
            I am POST
            <Reaction/>
        </div>
    )
}
