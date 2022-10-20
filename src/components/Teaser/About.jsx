import React from "react";
import avtr from "../image/avtra.jpg";
import "./About.css";
import "../Home.css";
const About = () => {
  return (
    <>
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-7 col-sm-12 about-img-section">
              <img src={avtr} alt="img" />
            </div>
            <div className="col-md-5 col-sm-12 about-text-section">
              <h2>About me :</h2>
              <p>
                I'm an experienced software engineer who constantly seeks out
                innovative solutions to everyday problems. In my one years in
                this industry, I've honed my analytical thinking and
                collaboration skills, and I love working with a team.
              </p>
              <p>
                I have knowledge of front end developent and i like to create
                animated website. “I have just over a year of experience as a
                Associate software engineer with First Technology. In my short
                time there, I've already contributed to over a multiple projects
                and assisted with managing one project for one of the firm's
                clients.
              </p>
              <p>
                Prior to this role, I completed a 3 month internship in java
                programming, where I honed my development skills. Ideally, I
                would like to continue to specialize in software engineering, an
                area where I know your firm excels.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
