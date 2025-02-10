import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function AboutUs() {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>

      <div className="row align-items-center">
        {/* Left Column: Image */}
        <div className="col-md-5">
          <img 
            src="http://www.rippleslearning.com/wp-content/uploads/2018/09/about-us-1024x683.jpg" 
            alt="About Us" 
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Right Column: Text */}
        <div className="col-md-7">
          <h4>Who We Are</h4>
          <p>
            We are a passionate team dedicated to delivering high-quality solutions with innovation and excellence.
          </p>
          <h4>Our Mission</h4>
          <p>
            Our mission is to provide outstanding services and products that make a difference in people's lives.
          </p>
          <h4>Why Choose Us?</h4>
          <ul>
            <li>Customer-centric approach</li>
            <li>Innovative solutions</li>
            <li>Experienced professionals</li>
            <li>Commitment to quality</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;

