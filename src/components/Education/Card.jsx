import React from "react";
import "./Card.css";
const Card = (props) => {
  const getCode = () => {
    alert("Please Pay First");
  };
  return (
    <>
      <div className=" mycard">
        <section className=" my-3" style={{ maxWidth: "20rem" }}>
          <div className="card">
            <div
              className="bg-image hover-overlay ripple"
              data-mdb-ripple-color="light"
            >
              <img
                src={props.cardImage}
                alt="project "
                className="image-fluid"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <button onClick={getCode} to="">
                Get Code
              </button>
              <hr />
              <div className="technology">
                <span>
                  <img src={props.technology1} alt="html " />
                </span>
                <span>
                  <img src={props.technology2} alt="css " />
                </span>
                <span>
                  <img src={props.technology3} alt="bootstrap " />
                </span>
                
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Card;
