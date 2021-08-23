import React from 'react'
import network from '../images/network.png'

function About() {
    return (
        <section id="about-us">
        <div className="container">
          <h1 className="title text-center">
            Why Choose us ?
          </h1>
          <div className="row">
            <div className="col-md-6">
              <p className="about-title">Why We're differnet</p>
              <ul>
                <li>Believe in doing business with honesty</li>
                <li>Believe in doing business with honesty</li>
                <li>Believe in doing business with honesty</li>
                <li>Believe in doing business with honesty</li>
                <li>Believe in doing business with honesty</li>
                <li>Believe in doing business with honesty</li>
                <li>Believe in doing business with honesty</li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src={network} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
    )
}

export default About
