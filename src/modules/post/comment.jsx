import "./comment.css";
import InsertEmoticon from '@mui/icons-material/InsertEmoticon';
import Face from '@mui/icons-material/Face';
import LocalSee from '@mui/icons-material/LocalSee';
import Send from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import user from "../../assets/teste-files/couverture.jpg";

function CommentField() {
    return (
        <>
            <form className="comment-form">
                <div className="profil-space">
                    <img src={user} alt="user" />
                </div>
                <div className="comment-feild-input">
                    <div className="my-comment-space">
                        <textarea name="comment" id="commet-area" cols={100} placeholder="entrer your comment">
                        </textarea>
                    </div>
                    <div className="comment-interaction">
                        <div className="interaction-icon-space">
                            <Face />
                            <InsertEmoticon />
                            <LocalSee />
                        </div>

                        <button id="send-comment" type="submit"><Send /></button>
                    </div>
                </div>
            </form>
        </>
    )
}

function CommentItem() {
    return (
        <>
            <div className="comment-items-space">
                <div className="profil-space">
                    <img src={user} alt="user" />
                </div>
                <div className="comment-items">
                    <p className="user-name"> user.name </p>
                    <p className="comment-item">comment </p>
                    <div className="comment-r">
                        <p id="love">J'aime</p>
                        <p id="repondre">Repondre</p>
                        <p id="create-date">22min</p>
                    </div>
                </div>
                <div id="comment-option">
                    <MoreHorizIcon />
                </div>
            </div>
        </>
    )
}



export function Comment({ isComment }) {
    return (
        <>
            <div className={`comment-container ${isComment ? "" : "d-none"}`}>
                <CommentField />
                <div className="comment-containeer">
                    <CommentItem />
                    <CommentItem />
                </div>
            </div>
        </>
    )
}