import React from "react";
import "./Experience.css";
import "../Home.css";
import dentsu from "../image/dentsu-logo.png";
import ugam from "../image/ugam-logo.png";
const Experience = () => {
  return (
    <>
      <div id="experience">
        <div className="container">
          <div className="row">
            <h2 className="exp-heading">Experience</h2>
            <div className="col-lg-6 mb-4">
              <div className="exp-wrapper">
                <div className="exp-card">
                  <div className="row">
                    <div className="exp-left-image col-lg-4">
                      <img
                         src={dentsu}
                        alt=""
                      />

                      <h5 className="company-name">Dentsu World Services</h5>
                      <h6>May 2022 - Sept 2022</h6>
                    </div>
                    <div className="exp-details col-lg-8">
                      <h5 lassName="job-title">
                        React developer, Frontend developer
                      </h5>
                      <p className="exp-description">
                        I worked on the internal project of DWS. The project
                        included complete redesign of their website, and
                        adopting the standard style for the country's website .
                      </p>
                      <h6 className="responsibility-heading">
                        Responsibilites
                      </h6>
                      <ul className="exp-responsibility">
                        <li>Making the required changes suggested by client</li>
                        <li>
                        Designing the structure and UI of the pages
                        </li>
                        <li>
                          Constantly delivering and receiving the feedback
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="exp-wrapper">
                <div className="exp-card">
                  <div className="row">
                    <div className="exp-left-image col-lg-4">
                      <img
                        src={ugam}
                        alt=""
                      />
                      <h5 className="company-name">Ugam Solutions</h5>
                      <h6>July 2021 - May 2022</h6>
                    </div>
                    <div className="exp-details col-lg-8">
                      <h5 className="job-title">Frontend Developer</h5>
                      <p className="exp-description">
                        I worked with Ugam solutios to design and developed
                        website according to clint requirement. The project was
                        regarding the nastle water project to sell water in
                        Europian countries
                      </p>
                      <h6 className="responsibility-heading">
                        Responsibilites
                      </h6>
                      <ul className="exp-responsibility">
                        <li>Suggesting the solution to the problems</li>
                        {/* <li>Implementing the solutions</li> */}
                       <li> Cleaning existing pages and converting to newer
                          designs</li>
                       
                        <li>Making the required changes suggested by client</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
