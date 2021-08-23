import React from 'react';
import facebook from '../images/facebook-icon.png'
import instagram from '../images/instagram-icon.png'
import linkedin from '../images/linkedin-icon.png'
import whatsapp from '../images/whatsapp-icon.png'
import twitter from '../images/twitter-icon.png'
import snapchat from '../images/snapchat-icon.png'


function Contact() {
    return (
        <section id="social-media">
        <div className="container text-center">
          <p>Find us on Social Media</p>
          <div className="social-icons">
            <a href="#"><img src={facebook} alt="" /></a>
            <a href="#"><img src={instagram} alt="" /></a>
            <a href="#"><img src={twitter} alt="" /></a>
            <a href="#"><img src={whatsapp} alt="" /></a>
            <a href="#"><img src={linkedin} alt="" /></a>
            <a href="#"><img src={snapchat} alt="" /></a>
          </div>
        </div>
      </section>
    )
}

export default Contact
