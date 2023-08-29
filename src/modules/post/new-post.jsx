import "./new-post.css";
import AddPhotoAlternateRoundedIcon from '@mui/icons-material/AddPhotoAlternateRounded';
import VideoFileIcon from '@mui/icons-material/VideoFile';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import user from "../../assets/teste-files/couverture.jpg";
import IosShareIcon from '@mui/icons-material/IosShare';
import CancelIcon from '@mui/icons-material/Cancel';
import { PostIteme } from "./post-item";
const c1olor = 'rgb(7, 237, 206)';

const iconStyle = {
    fontSize: 50,
    color: c1olor,
};


const clode = {
    fontSize: 25,
    color: c1olor,
};


function UploadedImgIteM() {
    return (
        <>
            <div className="upload-items">
                <button id="close"><CancelIcon style={clode} /></button>
                <img src={user} alt="upload" />
            </div>
        </>
    )
}

export function PostForm() {
    return (
        <form action="Post">
            <div className="input-desciption-container">
                <p>What's up?</p>
                <textarea name="post-title"
                    placeholder="Set your post's title"
                    id="post-title" >
                </textarea>
                <textarea name="post-description"
                    placeholder="Set your post's description..."
                    id="post-description" >
                </textarea>
            </div>

            <div className="post-required">
                <div id="Photo">
                    <AddPhotoAlternateRoundedIcon style={iconStyle} />
                    <p>Photo</p>
                </div>
                <div id="Video">
                    <VideoFileIcon style={iconStyle} />
                    <p>Vidéo</p>
                </div>
                <div id="Text">
                    <TextFieldsIcon style={iconStyle} />
                    <p>Text</p>
                </div>
            </div>

            <div className="post-content-container">
                <div id="post-content-slide">
                    UPLOADED
                </div>
                <div className="uplad-content">
                    < UploadedImgIteM />
                    < UploadedImgIteM />
                    < UploadedImgIteM />
                    < UploadedImgIteM />
                    < UploadedImgIteM />
                    < UploadedImgIteM />
                    < UploadedImgIteM />
                    < UploadedImgIteM />
                </div>
            </div>
            <div></div>
            <button className="post-btn" type="submit"> <IosShareIcon /> POST</button>
        </form>
    )
}


export function NewPost() {
    return (
        <div className="new-post-container">
            <PostForm />
            <PostIteme />
        </div>
    )
}