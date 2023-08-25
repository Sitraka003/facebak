import { HeartBrokenOutlined, MoreVert } from "@mui/icons-material";
import "./post.css";

const Post = () => {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img src="../../assets/person/2.jpeg" className="postProfileImg" alt="" />
            <span className="postUsername">Fiantso Harena</span>
            <span className="postDate">5 days ago</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Hello Stivebook ! This is my first post here✨️</span>
          <img src="../../assets/post/1.jpeg" className="postImg" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="../../assets/like.png" className="likeIcon"/>
            <img src="../../assets/heart.png" className="likeIcon"/>
            <span className="postLikeCounter">69 peoples like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">69 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
