import React from 'react';
import user1 from '../images/user1.jpg'

function Testimonial() {
    return (
        <section id="testimonials">
        <div className="container">
          <h1 className="title text-center">What Client Say</h1>
          <div className="row offset-1">
            <div className="col-md-5 testimonials">
              <p>Subscribe Easy tutorials YouTube Channel to watch more Videos on website
                development, Digital Marketing, wordpress and graphics Designing.
              </p>
              <img src={user1} alt="" />
              <p className="user-details"><b>Agelina</b><br /> Co-founder at xyz</p>
            </div>
            <div className="col-md-5 testimonials">
              <p>Subscribe Easy tutorials YouTube Channel to watch more Videos on website
                development, Digital Marketing, wordpress and graphics Designing.
              </p>
              <img src={user1} alt="" />
              <p className="user-details"><b>John Doe</b><br /> Director at xyz</p>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Testimonial
