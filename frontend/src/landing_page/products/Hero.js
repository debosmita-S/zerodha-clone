import React from "react";
function Hero() {
  return (
    <div className="container p-5 mt-5">
      <div className="row text-center">
        <h1 className="mb-3">Zerodha Products</h1>
        <p className="fs-5"> Sleek, modern, and intuitive trading platforms </p>
        <p className="fs-7 mb-5">
          Check out our
          <a
            href="demat"
            style={{
              textDecoration: "none",
              color: "#1a73e8",
              fontWeight: "500",
            }}
          >
            {" "}
            investment offerings{" "}
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>{" "}
        </p>
      </div>
      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2rem" }}
      ></div>
    </div>
  );
}

export default Hero;
