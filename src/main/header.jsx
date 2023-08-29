import userimage from '../assets/teste-files/couverture.jpg';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import "./header.css";
import ev from '../utils/eventHandler.jsx';
export function Header() {
    const c1olor = 'rgb(7, 237, 206)';

    const iconStyle = {
        fontSize: 30,
        color: c1olor,
    };

    return (
        <div className='main_container'>
            <header>
                <div className="logo_f"><span id="F">F</span>-acebak</div>
                <div className="search-space">
                    <input type="text" name="search-bar"
                        placeholder='search in F -acebak' id="search-bar" />
                    <SearchRoundedIcon style={iconStyle} />
                </div>
                <div className="profil_name_bar_contain">
                    <div className="profil_name_space" onClick={() => ev.goToPage("/home/profil")}>
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