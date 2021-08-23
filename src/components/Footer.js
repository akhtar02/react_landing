import React from 'react'
import wave2 from '../images/wave2.png'
import logo from '../images/demo-logo.png'

function Footer() {
    return (
        <section id="footer">
        <img src={wave2} className="footer-img" alt="" />
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-box">
              <img src={logo} alt="" />
              <p>Subscribe Easy tutorials YouTube Channel to watch more Videos on website
                development, Digital Marketing, wordpress and graphics Designing. Press the bell icon to get notification</p>
            </div>
            <div className="col-md-4 footer-box">
              <p><b>Contact Us</b></p>
              <p> <i className="fa fa-map-marker" />World Trade Center, New yark</p>
              <p> <i className="fa fa-phone" />+1 012345</p>
              <p> <i className="fa fa-envelope-o" />xyz@gmail.com</p>
            </div>
            <div className="col-md-4 footer-box">
              <p><b>Subscribe NewsLetter</b></p>
              <input type="email" name className="form-control" id />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
          <hr />
          <p className="copyright">Website Created by Akhtar Hussain</p>
        </div>
      </section>
    )
}

export default Footer
