import React from "react";
import "./Skills.css";
import "../Home.css";
const Skills = () => {
  return (
    <>
      <div id="skills">
        <div className="container">
          <div className="row skills-section  py-3">
            <h2>Skills</h2>
            <div className="col-md-3 col-sm-6 skills-img">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png"
                alt=""
              />
              <h5>Html</h5>
            </div>
            <div className="col-md-3 col-sm-6 skills-img">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"
                alt=""
              />
              <h5>Css</h5>
            </div>
            <div className="col-md-3 col-sm-6 skills-img">
              <img
                src="https://www.citypng.com/public/uploads/preview/js-javascript-round-logo-icon-png-11662226392lsrrajcm0y.png"
                alt=""
              />
              <h5>Javascript</h5>
            </div>
            <div className="col-md-3 col-sm-6 skills-img">
              <img
                src="https://www.interviewbit.com/blog/wp-content/uploads/2021/10/jquery-logo-vertical_large_square.png"
                alt=""
              />
              <h5>Jquery</h5>
            </div>
          </div>
          <div className="row  skills-section py-3">
            <div className="col-md-3 col-sm-6 skills-img">
              <img
                src="https://static.javatpoint.com/bootstrappages/images/bootstrap-tutorial.png"
                alt=""
              />
              <h5>Bootstrap</h5>
            </div>
            <div className="col-md-3 col-sm-6 skills-img">
              <img
                src="https://avatars.githubusercontent.com/u/6412038?s=280&v=4"
                alt=""
              />
              <h5>React Js</h5>
            </div>
            <div className="col-md-3 col-sm-6 skills-img">
              <img
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                alt=""
              />
              <h5>Git</h5>
            </div>
            <div className="col-md-3 col-sm-6 skills-img">
              <img
                src="https://dev.java/assets/images/java-logo-vert-blk.png"
                alt=""
              />
              <h5>Java</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
