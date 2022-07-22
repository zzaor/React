import '../css/Header.css';
import netflixLogo from '../images/netflix_logo.png';
import searchIcon from '../images/search.png';
import moreIcon from '../images/more.png';
import userIcon from '../images/user-icon.jpg';
import alertIcon from '../images/alert-icon.png';

function Header() {
    return (
        <div id="header">
            <div id="headerMenu">
                <img src={netflixLogo} alt='netflix logo' className="logoImg" />
                <div className="category">
                    <span>홈</span>
                    <span>시리즈</span>
                    <span>영화</span>
                    <span>최신 콘텐츠</span>
                    <span>내가 찜한 콘텐츠</span>
                </div>
                <div className="userInfo">
                    <input type="text" className="searchInput"/>
                    <img src={searchIcon} alt="searchIcon" className="searchIcon" />
                    <span>키즈</span>
                    <img src={alertIcon} alt="alertIcon" className="alertIcon" />
                    <img src={userIcon} alt="userIcon" className="userIcon" />
                    <img src={moreIcon} alt="moreIcon" className="moreIcon" />            
                </div>
            </div>
        </div>
    )
}

export default Header;