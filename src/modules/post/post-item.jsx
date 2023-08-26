import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import PublicIcon from '@mui/icons-material/Public';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import "./post-item.css";
import user from "../../assets/teste-files/couverture.jpg";
import ev from "../../utils/eventHandler.jsx"
const c1olor = 'rgb(7, 237, 206)';

export function PostIteme() {

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

    return (
        <div className="Post-left">

            <div className="head-post-ul">
                <MoreHorizIcon style={iconStyle2} />
                <div className="profil-post" onClick={() => ev.goToPage("/home/profil")}>
                    <p>Tiana-Finaritra</p>
                    <div className="img-profil-ul">
                        <img src={user} alt="user" />
                    </div>
                </div>

            </div>
            <div className="post-cont-ull">
                <img src={user} alt="Post-content-iluustration" />
            </div>
            <div className="title">
                <h4>Ca faisait si longtemps</h4>
            </div>
            <article className="article-post">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quos nemo quisquam cum
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quos nemo quisquam cum
            </article>
            <div className="date-reaction-container">
                <div id="creat-post-date">
                    <PublicIcon style={iconStyle3} /> 15 juil 2024
                </div>

                <div className="interaction">
                    <div className="reaction">
                        <FavoriteIcon style={iconStyle10} />
                        <span>Love</span>
                    </div>
                    <div className="reaction">
                        <CommentIcon style={iconStyle10} />
                        <span>Comment</span>
                    </div>
                    <div className="reaction">
                        <SendIcon style={iconStyle10} />
                        <span>Share</span>
                    </div>
                </div>

            </div>

        </div>
    )
}
