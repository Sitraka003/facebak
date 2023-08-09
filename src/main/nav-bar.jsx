import "./nav-bar.css";
export function NavBar() {
    return (
            <nav>
                <div className="nav_interaction">
                    <div id="home_space">
                        <i>Home</i>
                    </div>
                    <div id="message_space">
                        <i>message</i>
                    </div>
                    <div id="notif_space">
                        <i>notif</i>
                    </div>
                    <div id="Post_space">
                        <i>Post</i>
                    </div>
                </div>
                <div className="params_space">
                    <i>Params</i>
                </div>
            </nav>
    )
}