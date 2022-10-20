import React from "react";
import "./Project.css";
import "../Home.css";
import Card from "./Card";
import project1 from "../image/introweb.png";
import project2 from "../image/healthcare.jpeg";
import project3 from "../image/project1.png";
import html from "../image/html.png";
import css from "../image/css.webp";
import bootstrap from "../image/bootstrap.png";
import react from "../image/react.png";

const Project = () => {
  return (
    <>
      <div id="project">
        <div className="container">
          <h2 className="project-heading">Project</h2>
          <div className="row">
            <div className="col-md-4  project-card">
              <Card
                cardImage={project1}
                title="Profile Website project"
                description="This multi-page website includes more detailed information about my work."
                technology1={html}
                technology2={css}
                technology3={bootstrap}
                technology4={react}
              />
            </div>
            <div className="col-md-4  project-card">
              <Card
                cardImage={project2}
                title="HealthCare project"
                description=" This is Single-page healthCare website using Html, Css, Bootstrap With Responsiveness?"
                technology1={html}
                technology2={css}
                technology3={bootstrap}
              />
            </div>
            <div className="col-md-4  project-card">
              <Card
                cardImage={project3}
                title="Resume project"
                description=" This resume project build using Html, Css, Bootstrap.User can modify according to his requirement"
                technology1={html}
                technology2={css}
                technology3={bootstrap}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
