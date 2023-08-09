import userimage from '../teste-files/toonmecom_d28076.jpeg'; //for test
import "./header.css";
export function Header() {
    return (
        <div className='main_container'>
            <header>
                <div className="logo_f"><span id="F">F</span>-acebak</div>
                <div id="liaison">Welcome!</div>
                <div className="profil_name_bar_contain">
                    <div className="profil_name_space">
                        <div className="profil_image_space" >
                            <img src={userimage} alt="User" />
                        </div>
                        <p>Tiana-Finaritra</p>
                    </div>
                    <div className="three_bars">
                        <div id="bar1"></div>
                        <div id="bar2"></div>
                        <div id="bar3"></div>
                    </div>
                </div>
            </header>
        </div>
    )
}