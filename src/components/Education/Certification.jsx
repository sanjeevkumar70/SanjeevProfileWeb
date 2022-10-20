import React from "react";
import CertificateData from "./CertificateData";
import "./Certification.css";
const Certification = () => {
  return (
    <>
      <div id="certification">
        <div className="container">
          <h2 className="certification-heading">Certification</h2>
          <div className="row ">
            <div className="col-md-6 certification-card ">
              <CertificateData
                heading="Certificate of Completion in Web Designing by INCAPP"
                para="This certificate was issued by INCAPP after completing
                3 months training in Web Design Technology successfully."
              />
            </div>
            <div className="col-md-6 certification-card">
              <CertificateData
                heading="Certification in Java by NPTEL Online Certification"
                para="This certificate was issued by after passing the NPTEL Examination."
              />
            </div>
            <div className="col-md-6 certification-card">
              <CertificateData
                heading="Certification in Proagramming In C by NPTEL Online Certification "
                para="This certificate was issued by after passing the NPTEL Examination."
              />
            </div>
            <div className="col-md-6 certification-card">
              <CertificateData
                heading="Certification in DBMS NPTEL Online Certification"
                para="This certificate was issued by after passing the NPTEL Examination."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Certification;
