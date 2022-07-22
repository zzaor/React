import '../css/Contents.css';
import React, { Component } from 'react';
import Slider from "react-slick";
// import netflixLogo from '../images/netflix_logo.png';
import Card from './Card';

export default class Contents extends Component {
    clickMovie(e) {
        console.log(e);
    }

    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
        return (
            <div id="contentsMain">
            <h2> 시청 중인 콘텐츠 </h2>
            <Slider {...settings}>
                <div>
                    <div id="thor" className="movieImg" onClick={this.clickMovie}></div>
                    <div className="moviePara"></div>
                    <div className="progress">
                        <div className="progress-bar bg-danger w50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div>
                    <div id="paperHouse" className="movieImg"></div>
                    <div className="moviePara"></div>
                    <div className="progress">
                        <div className="progress-bar bg-danger w50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div>
                    <div id="dune" className="movieImg"></div>
                    <div className="moviePara"></div>
                    <div className="progress">
                        <div className="progress-bar bg-danger w75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div>
                    <div id="floridaProject" className="movieImg"></div>
                    <div className="moviePara"></div>
                    <div className="progress">
                        <div className="progress-bar bg-danger w25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div>
                    <div id="yeongwoo" className="movieImg"></div>
                    <div className="moviePara"></div>
                    <div className="progress">
                        <div className="progress-bar bg-danger w50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div>
                    <div id="parasite" className="movieImg"></div>
                    <div className="moviePara"></div>
                    <div className="progress">
                        <div className="progress-bar bg-danger w75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div>
                    <div id="nineteen" className="movieImg"></div>
                    <div className="moviePara"></div>
                    <div className="progress">
                        <div className="progress-bar bg-danger w25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div>
                    <div id="doctors" className="movieImg"></div>
                    <div className="moviePara"></div>
                    <div className="progress">
                        <div className="progress-bar bg-danger w50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div>
                    <div id="startUp" className="movieImg"></div>
                    <div className="moviePara"></div>
                    <div className="progress">
                        <div className="progress-bar bg-danger w50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div>
                    <div id="bando" className="movieImg"></div>
                    <div className="moviePara"></div>
                    <div className="progress">
                        <div className="progress-bar bg-danger w25" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </Slider>
            <br/><br/>
            <Card />
            </div>
        );
    }
  }