import '../css/Carousel.css';
import interstellar from '../images/interstellar.jpg';
import strangerThings from '../images/strangerThings.jpg';
import doctorStrange from '../images/doctor_strange.jpg';
import smallLogo from '../images/netflix_logo_s.png';
import topIcon from '../images/top-10.png';

function Carousel() {
    return (
      <div id="carouselDiv">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={interstellar} className="d-block w-100" alt="interstellar" />
              <div className="carousel-caption d-none d-md-block">
                <img src={smallLogo} className="smallLogo" alt="small logo" />
                <span className="logoSpan">영화</span>
                <p id="interstellar" className="movieName" >인  터  스  텔  라</p>
                <div className="buttons">
                  <button type="button" className="btn btn-light btnPlay">
                    <i className="bi bi-play-fill"></i>
                    재생
                  </button>
                  <button type="button" className="btn btn-secondary btnInfo">
                    <i className="bi bi-info-circle"></i>
                    상세정보
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={strangerThings} className="d-block w-100" alt="strangerThings" />
              <div className="carousel-caption strangerCaption d-none d-md-block">
                <img src={smallLogo} className="smallLogo" alt="small_logo" />
                <span className="logoSpan">NETFLIX 오리지널</span>
                <p id="strangerThings" className="movieName">기묘한<br/>이야기</p>
                <p id="topInfo">2022 | 15+ | 시즌 4개</p>
                <img src={topIcon} className="topIcon" alt="top_icon" />
                <p id="topPara">오늘 한국에서 콘텐츠 순위 2위</p>
                <div className="buttons">
                  <button type="button" className="btn btn-light btnPlay">
                    <i className="bi bi-play-fill"></i>
                    재생
                  </button>
                  <button type="button" className="btn btn-secondary btnInfo">
                    <i className="bi bi-info-circle"></i>
                    상세정보
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={doctorStrange} className="d-block w-100" alt="doctorStrange" />
              <div className="carousel-caption strangerCaption d-none d-md-block">
                <img src={smallLogo} className="smallLogo" alt="small_logo" />
                <span className="logoSpan">영화</span>
                <p id="strangerThings" className="movieName">닥터<br/>스트레인지</p>
                <p id="topInfo">2022 | 15+ </p>
                <img src={topIcon} className="topIcon" alt="top_icon" />
                <p id="topPara">오늘 한국에서 콘텐츠 순위 1위</p>
                <div className="buttons">
                  <button type="button" className="btn btn-light btnPlay">
                    <i className="bi bi-play-fill"></i>
                    재생
                  </button>
                  <button type="button" className="btn btn-secondary btnInfo">
                    <i className="bi bi-info-circle"></i>
                    상세정보
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    )
}

export default Carousel;