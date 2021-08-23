import React from 'react';
// import { Button } from 'react-bootstrap';
import service1 from '../images/service1.png'
import service2 from '../images/service2.png'
import service3 from '../images/service3.png'

function Service() {
    return (
        <section id="services">
        <div className="container text-center ">
          <h1 className="title">What We Do ?</h1>
          <div className="row text-center">
            <div className="col-md-4 services">
              <img src={service1} alt="" className="service-img" />
              <h4>Growth Marketing</h4>
              <p>Subscribe Easy tutorials YouTube Channel to watch more Videos on website
                development, Digital Marketing, wordpress and graphics Designing.
              </p>
            </div>
            <div className="col-md-4 services">
            <img src={service2} alt="" className="service-img" />
              <h4>Online B</h4>
              <p>Subscribe Easy tutorials YouTube Channel to watch more Videos on website
                development, Digital Marketing, wordpress and graphics Designing.
              </p>
            </div>
            <div className="col-md-4 services">
            <img src={service3} alt="" className="service-img" />
              <h4>Growth Marketing</h4>
              <p>Subscribe Easy tutorials YouTube Channel to watch more Videos on website
                development, Digital Marketing, wordpress and graphics Designing.
              </p>
            </div>
          </div>
          <button type="button" className="btn btn-primary">All Services</button>
        </div>
      </section>
    )
}

export default Service
