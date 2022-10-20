import React from "react";
import "./Footer.css";
import image1 from "../image/img1.jpg";
import image2 from "../image/img2.jpg";

const Footer = () => {
  return (
    <>
      <footer>
        <h2 className="social-heading">Follow Me :</h2>
        <div className="container-fluid">
          <div className="social-link-section">
            <span className="linkedin">
              <a href="https://www.linkedin.com/in/sanjeev-kumar12?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bu9ari5O9QDSTP%2BdkbVkdzA%3D%3D">
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
            </span>
            <span className="github">
              <i className="fa-brands fa-github"></i>
            </span>
            <span className="instagram">
              <i className="fa-brands fa-instagram"></i>
            </span>
            <span>
            <i className="fa-brands fa-twitter text-primary"></i>
            </span>
          </div>

          <div className="row py-5 footer-down">
            <div className="col-md-4">
              <h3>About</h3>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                amet quia illum obcaecati rem inventore dolor. Dolore minima
                optio vel.
              </p>
            </div>
            <div className="col-md-4 px-3">
              <h3>Contact</h3>

              <p>Phone : +91-7023511054</p>
              <p>Email : Sk749326@gmail.com</p>
              <p>LinkedIn:linkedin.com/in/sanjeev-kumar12 </p>
            </div>
            <div className="col-md-4">
              <h3>My Gallery</h3>
              <div className="gallery-parent">
                <img src={image1} className="gallery-child " alt="" />

                <img src={image2} className="gallery-child " alt="" />

                <img src={image1} className="gallery-child " alt="" />

                <img src={image1} className="gallery-child " alt="" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
