import React, { useState, useEffect } from "react";
import "./Contact.css";
import "../Home.css";
const Contact = () => {
  const data = {
    name: "",
    phone: "",
    email: "",
  };
  const [inpData, setInpData] = useState(data);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("registerd");
  }, [flag]);

  function handleData(e) {
    setInpData({ ...inpData, [e.target.name]: e.target.value });
    console.log(inpData);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!inpData.name || !inpData.phone || !inpData.email) {
      alert("All field are mendatory");
    } else {
      setFlag(true);
      alert(
        `We Store  Name: ${inpData.name} | Phone:  ${inpData.phone} | Email : ${inpData.email}`
      );
    }
  }

  return (
    <>
      <div id="contact">
        <div className="container">
          <h2 className="contact-heading">Contact me:</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              value={inpData.name}
              onChange={handleData}
            />
            <br />
            <br />
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone number"
              value={inpData.phone}
              onChange={handleData}
            />
            <br /> <br />
            <input
              type="email"
              name="email"
              value={inpData.email}
              onChange={handleData}
              placeholder="Enter email"
              id=""
            />
            <br /> <br />
            <button type="submit" className="btn">
              Send
            </button>
          </form>

          <div className="information py-4">
            <h2>Information</h2>
            <div className="row social-link-section">
              <div className="col-md-3 col-sm-6">
                <span className="Phone">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <p>+91-7023511054</p>
              </div>
              <div className="col-md-3 col-sm-6">
                <span className="email">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <p>Sk749326@gmail.com</p>
              </div>
              <div className="col-md-3 col-sm-6">
                <span className="linkedin">
                  <i className="fa-brands fa-linkedin-in"></i>
                </span>
                <p>Sanjeev Kumar</p>
              </div>

              <div className="col-md-3 col-sm-6">
                <span className="location">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <p>Pune,Maharastra</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
