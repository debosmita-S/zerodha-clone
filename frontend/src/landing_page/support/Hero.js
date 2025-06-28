import React from "react";
function Hero() {
  return (
    <div
      className="mb-5"
      style={{ backgroundColor: "#387ed1", color: "white" }}
    >
      <div className="container">
        <div className="d-flex flex-wrap">
          <div className="col-7">
            <h5 className="mt-5">Support Portal</h5>
            <p className="fs-4 mt-5">
              Search for an answer or browse help topics to create a <br></br>
              ticket
            </p>
            <div className="input-group mt-4">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
              />
              <span className="input-group-text bg-white">
                <i className="fa fa-search text-muted"></i>
              </span>
            </div>
            <div
              className="d-flex flex-wrap gap-4 mt-4"
              style={{ marginBottom: "100px" }}
            >
              <p className="border-bottom pb-1 mb-0">Track account opening</p>
              <p className="border-bottom pb-1 mb-0">
                Track segment activation
              </p>
              <p className="border-bottom pb-1 mb-0">Intraday margins</p>
              <br></br>
              <p className="border-bottom pb-1 mb-0">Kite user manual</p>
            </div>
          </div>
          <div className="col-5">
            {/* <p
              className="border-bottom text-align-right m-5"
              style={{ textAlign: "right" }}
            >
              Track tickets
            </p> */}
            <a href="#" className="border-bottom text-align-right" style={{ color: "white", textAlign: "right" }}>
              <ul style={{ color: "white", marginRight: "10px", marginTop: "20px", fontSize:"1.2rem" }}>
                Track tickets
              </ul>
            </a>
            <p
              className="fs-4"
              style={{ marginLeft: "50px", marginTop: "40px" }}
            >
              Featured
            </p>
            <ol>
              <a href="#" className="border-bottom" style={{ color: "white" }}>
                <li style={{ color: "white", marginLeft: "50px" }}>
                  Surveillance measure on scrips - June 2025
                </li>
              </a>
              <br></br>
              <a href="#" className="border-bottom" style={{ color: "white" }}>
                <li style={{ color: "white", marginLeft: "50px" }}>
                  Rights Entitlements listing in June 2025
                </li>
              </a>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
