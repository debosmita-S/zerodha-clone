import React from "react";
function CreateTicket() {
  return (
    <div className="container">
      <p className="text-muted fs-4">
        To create a ticket, select a relevant topic
      </p>
      <div className="d-flex flex-wrap">
        <p className="col-4 fs-4">
          <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening
        </p>
        <p className="col-4 fs-4">
          <i class="fa fa-user" aria-hidden="true"></i> Your Zerodha Account
        </p>
        <p className="col-4 fs-4">
          <i class="fa fa-signal" aria-hidden="true"></i> Kite
        </p>
      </div>
      <div className="d-flex flex-wrap" style={{marginBottom:"90px"}}>
        <div className="col-4">
          <ul>
            <a href="#" style={{ textDecoration: "none" }}>
              Resident individual
            </a>
          </ul>
          <ul>
            <a href="#" style={{ textDecoration: "none" }}>
              Minor
            </a>
          </ul>
          <ul>
            <a href="#" style={{ textDecoration: "none" }}>
              Non Resident Indian (NRI)
            </a>
          </ul>
          <ul>
            <a href="#" style={{ textDecoration: "none" }}>
              Company, Partnership, HUF and LLP
            </a>
          </ul>
          <ul>
            <a href="#" style={{ textDecoration: "none" }}>
              Glossary
            </a>
          </ul>
        </div>
        <div className="col-4">
          <div>
            <ul>
              <a href="#" style={{ textDecoration: "none" }}>
                Your Profile
              </a>
            </ul>
            <ul>
              <a href="#" style={{ textDecoration: "none" }}>
                Account modification
              </a>
            </ul>
            <ul>
              <a href="#" style={{ textDecoration: "none" }}>
                Client Master Report (CMR) and Depository Participant (DP)
              </a>
            </ul>
            <ul>
              <a href="#" style={{ textDecoration: "none" }}>
                Nomination
              </a>
            </ul>
            <ul>
              <a href="#" style={{ textDecoration: "none" }}>
                Transfer and conversion of securities
              </a>
            </ul>
          </div>
        </div>
        <div className="col-4">
          <div>
            <ul>
              <a href="#" style={{ textDecoration: "none" }}>
                IPO
              </a>
            </ul>
            <ul>
              <a href="#" style={{ textDecoration: "none" }}>
                Trading FAQs
              </a>
            </ul>
            <ul>
              <a href="#" style={{ textDecoration: "none" }}>
                Margin Trading Facility (MTF) and Margins
              </a>
            </ul>
            <ul>
              <a href="#" style={{ textDecoration: "none" }}>
                Charts and orders
              </a>
            </ul>
            <ul>
              <a href="#" style={{ textDecoration: "none" }}>
                Alerts and Nudges
              </a>
            </ul>
            <ul>
              <a href="#" style={{ textDecoration: "none" }}>
                General
              </a>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
