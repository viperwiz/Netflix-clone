import React from "react";
import "./footer.scss";

function footer() {
  return (
    <div className="footer">
      <div className="footericon">
        <i className="ri-facebook-fill"></i>
        <i className="ri-instagram-line"></i>
        <i className="ri-twitter-x-line"></i>
        <i className="ri-youtube-fill"></i>
      </div>
      <div className="footertext">
        <div className="text">
          <h5>Audio Description</h5>
          <h5>Investor Relations</h5>
          <h5>Legal Notice</h5>
        </div>
        <div className="text">
          <h5>Help Centers</h5>
          <h5>Jobs</h5>
          <h5>Cookie Preferences</h5>
        </div>
        <div className="text">
          <h5>Gift Cards</h5>
          <h5>Terms Of Use</h5>
          <h5>Corporate Information</h5>
        </div>
        <div className="text">
          <h5>Media Center</h5>
          <h5>Privacy</h5>
          <h5>Contact Us</h5>
        </div>
      </div>
    </div>
  );
}

export default footer;
