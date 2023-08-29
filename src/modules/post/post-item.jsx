import CancelIcon from '@mui/icons-material/Cancel';
import PublicIcon from '@mui/icons-material/Public';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import "./post-item.css";
import user from "../../assets/teste-files/couverture.jpg";
import ev from "../../utils/eventHandler.jsx"
import { Comment } from './comment';
import { useState } from 'react';
// import { Tune } from '@mui/icons-material';
const c1olor = 'rgb(7, 237, 206)';

// css
const iconStyle2 = {
    fontSize: 30,
    color: c1olor,
};
const iconStyle3 = {
    fontSize: 20,
    color: c1olor,
};
const iconStyle10 = {
    fontSize: 40,
    color: c1olor,
};


function ReactionPost({reaction, commentCount}) {

    // reaction show:
    const [isRate, setRate] = useState(false);
    const showTypeRate = () => {
        setRate(true);
    }
    const hideTypeRate = () => {
        setRate(false);
    }

    //comment show
    const [isComment, setComment] = useState(false);
    const showComment = () => {
        setComment(true);
    };
    const closeComment = () => {
        setComment(false)
    }

    const [isNameR, setNameR] = useState(false);
    const showNameR = () => {
        setNameR(!isNameR);
    }

    return (
        <>
            <div className="date-reaction-container">
                <div id="creat-post-date">
                    <PublicIcon style={iconStyle3} /> 15 juil 2024
                </div>

                <div className="interaction">
                    <div
                        onMouseEnter={() => showNameR()}
                        onMouseLeave={() => showNameR()}
                        className="reaction">
                        <FavoriteIcon onMouseEnter={() => showTypeRate()} style={iconStyle10} />
                        <span id='Love-absolute'>
                            <p className={`${isNameR ? '' : 'd-none'} `} id='like'>Rate</p>
                            <p className={`${isNameR ? 'd-none' : ''} `} id='like-count'>{reaction}</p>
                            <p className={`${isNameR ? 'd-none' : ''} `} id='dislike-count'>- 00</p>

                            <div className={`like-dislike-container ${isRate ? "" : "d-none"} `} >
                                <p onClick={() => hideTypeRate()}>Like</p>
                                <p onClick={() => hideTypeRate()}>Dislike</p>
                            </div>
                        </span>
                    </div>
                    <div
                        onClick={() => showComment()}
                        className="reaction">
                        <CommentIcon style={iconStyle10} />
                        <span>
                            <p>Comment</p>
                            <p id='comment-count'>{commentCount}</p>
                        </span>
                    </div>

                    <div className="reaction">
                        <SendIcon style={iconStyle10} />
                        <span>
                            <p>Share</p>
                            <p id='share-count'>1</p>
                        </span>
                    </div>
                </div>

            </div>
            <Comment isComment={isComment} />
            <button
                onClick={() => closeComment()}
                className={`closeComment ${isComment ? "" : "d-none"}`} >
                <CancelIcon />
            </button>
        </>
    )
}

function PostItemHead({ username }) {
    return (
        <>
            <div className="head-post-ul">
                <CancelIcon style={iconStyle2} />
                <div className="profil-post" onClick={() => ev.goToPage("/home/profil")}>
                    <p>{username}</p>
                    <div className="img-profil-ul">
                        <img src={user} alt="user" />
                    </div>
                </div>
            </div>
        </>
    )
}


function PostImageContent({ title, content }) {
    return (
        <>
            <div className="post-cont-ull">
                {/* <img src={user} alt="Post-content-iluustration" /> */}
            </div>
        </>
    )
}

function PostTextContent({ title, content }) {
    return (
        <>
            <div className="title">
                <h4>{title}</h4>
            </div>
            <article className="article-post">
                {content}
            </article>
        </>
    )
}

export function PostIteme({ postData }) {
    return (
        <div
            className="Post-left">
            <PostItemHead username={postData.user.username} />
            <PostImageContent />
            <PostTextContent  title={postData.title}  content={postData.content} />
            <ReactionPost reaction={postData._count.reactions} commentCount={postData._count.comments} />
            <Comment isComment={false} />
        </div>
    )
}