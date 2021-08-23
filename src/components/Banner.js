import React from 'react';
import play from '../images/play.png'
import home2 from '../images/home2.png'
import wave1 from '../images/wave1.png'

function Banner() {
    return (
        <div id="banner">
            <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="promo-title">BEST DIGITAL AGENCY</p>
              <p>Subscribe Easy tutorials Youtube Channel to watch more videos on website
                development, Digital Marketing, wordpress and graphics Designing
              </p>
              <a href><img src={play} className="play-btn" alt="" /> Watch Tutorials</a>
            </div>
            <div className="col-md-6">
              <img src={home2} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
        <img src={wave1} alt="" className="buttom-img" />
        </div>
    )
}

export default Banner
