import React from "react";

function Hero() {
  return (
    <div className="container">
      {/* Header Row */}
      <div className="row">
        <h1 className="fs-2 mt-5 mb-5 p-5 text-center">
          We pioneered the discount broking model in India.
          <br />
          Now, we are breaking ground with our technology.
        </h1>

        <div
          className="row p-5 mt-4 border-top text-muted"
          style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
        ></div>

        {/* 2-column Text Row */}
        <div className="row mt-4">
          {/* Left Column */}
          <div className="col-md-1"></div>
          <div className="col-5">
            <p className="fs-6 text-muted">
              We kick-started operations on the 15th of August, 2010 with the
              goal of breaking all barriers that traders and investors face in
              India in terms of cost, support, and technology. We named the
              company Zerodha, a combination of Zero and "Rodha", the Sanskrit
              word for barrier.
            </p>
            <p className="fs-6 text-muted">
              Today, our disruptive pricing models and in-house technology have
              made us the biggest stock broker in India.
            </p>
            <p className="fs-6 text-muted">
              Over 1.6+ crore clients place billions of orders every year
              through our powerful ecosystem of investment platforms,
              contributing over 15% of all Indian retail trading volumes.
            </p>
          </div>

          <div className="col-sm-1"></div>

          {/* Right Column */}
          <div className="col-5">
            <p className="fs-6 text-muted">
              In addition, we run a number of popular open online educational
              and community initiatives to empower retail traders and investors.
            </p>
            <p className="fs-6 text-muted">
              <a href="" style={{ textDecoration: "none" }}>
                Rainmatter
              </a>
              , our fintech fund and incubator, has invested in several fintech
              startups with the goal of growing the Indian capital markets.
            </p>
            <p className="fs-6 text-muted">
              And yet, we are always up to something new every day. Catch up on
              the latest updates on our blog or see what the media is{" "}
              <a href="" style={{ textDecoration: "none" }}>
                saying about us
              </a>{" "}
              or learn more about our business and product{" "}
              <a href="" style={{ textDecoration: "none" }}>
                philosophies
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
