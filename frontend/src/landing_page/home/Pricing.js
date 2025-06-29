import React from 'react';

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row align-items-start">

        {/* Left Section: Text */}
        <div className="col-md-5">
          <h2 className="fs-2 fw-semibold">Unbeatable pricing</h2>
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#555" }}>
            We pioneered the concept of discount broking and price transparency in India.
            Flat fees and no hidden charges.
          </p>
          <a href="demat" style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500" }}>
            See pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i>

          </a>
        </div>

        {/* Right Section: Pricing Cards */}
        <div className="col-md-6">
          <div className="d-flex justify-content-between align-items-start mt-3 flex-wrap" style={{ maxWidth: "100%" }}>
            
            {/* Card 1 */}
            <div className="d-flex text-center">
              <img src="media/images/pricing0.svg" alt="₹0" style={{ height: "70px" }} />
              <p className="mt-2" style={{ fontSize: "0.75rem" }}><br />Free account<br /> opening</p>
            </div>

            {/* Card 2 */}
            <div className="d-flex text-center">
              <img src="media/images/pricing0.svg" alt="₹0" style={{ height: "70px" }} />
              <p className="mt-2" style={{ fontSize: "0.75rem" }}><br />Free equity delivery<br /> and direct mutual funds</p>
            </div>

            {/* Card 3 */}
            <div className="d-flex text-center">
              <img src="media/images/other-trades.svg" alt="₹20" style={{ height: "70px" }} />
              <p className="mt-2" style={{ fontSize: "0.75rem" }}><br />Intraday and <br />F&amp;O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
