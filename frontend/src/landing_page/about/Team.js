import React from "react";
function Team() {
  return (
    <div className="container mb-5">
      {/* Header Row */}
      <div className="row">
        <h1 className="fs-2 mt-5 mb-5 p-5 text-center">People</h1>


        {/* 2-column Text Row */}
        <div className="row m-4">
          {/* Left Column */}
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <img src="media/images/nithinKamath.jpg"
              style={{ borderRadius: "50%", width: "85%", height: "auto" }} alt="" />
            <br></br>
            <br></br>
            <h4 className="text-muted" style={{ marginLeft: "60px" }}>Nithin Kamath</h4>
            <p className="text-muted" style={{ marginLeft: "90px" }}>Founder, CEO</p>
          </div>


          {/* Right Column */}
          <div className="col-md-5">
            <p className="fs-6 text-start text-muted">
              Nithin bootstrapped and founded Zerodha in 2010 to overcome the
              hurdles he faced during his decade long stint as a trader. Today,
              Zerodha has changed the landscape of the Indian broking industry.
            </p>
            <p className="fs-6 text-start text-muted">
              He is a member of the SEBI Secondary Market Advisory Committee
              (SMAC) and the Market Data Advisory Committee (MDAC).
            </p>
            <p className="fs-6 text-start text-muted">
              Playing basketball is his zen.
            </p>
            <p className="fs-6 text-start text-muted">
              Connect on{" "}
              <a href="" style={{ textDecoration: "none" }}>
                Homepage
              </a>{" "}
              /{" "}
              <a href="" style={{ textDecoration: "none" }}>
                TradingQnA
              </a>{" "}
              /{" "}
              <a href="" style={{ textDecoration: "none" }}>
                Twitter
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
