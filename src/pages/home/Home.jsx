import Navbar from "../../components/navbar/Navbar";
import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css";

function Home() {

  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <Leftbar className="leftBar"/>
        <Feed className="feed" />
        <Rightbar className="rightBar" />
      </div>
    </>
  );
}

export default Home;
