import React from "react";
import myimg from "../image/sanjeev.png";
import "./Intropage.css";
import "../Home.css";
const Intropage = () => {
  return (
    <>
      <div id="intro">
        <div className="container">
          <div className="row intropage">
            <div className="col-lg-6 intro-text-section">
              <h2>
                Hi ! I am <span>Sanjeev</span>
              </h2>
              <h3>And I am a Front end developer</h3>
              <p>
                As a Front end developer having one plus years of experience who
                is comfirtable working with front end technologies(Html, Css,
                javascript, Jquery, Bootstrap, React js) and other libraries
              </p>
              <button className="btn">Read more...</button>

              <div className="prof-site">
                <a href="https://github.com/sk749326/">Go to Github</a>

                <a href="https://www.linkedin.com/in/sanjeev-kumar12/">
                  Go to LinkedIn
                </a>

                <a href="https://www.instagram.com/sk_arya70/">
                  Go to Instagram
                </a>
              </div>
            </div>
            <div className="col-lg-6 intro-img-section">
              <img src={myimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Intropage;
