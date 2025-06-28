import React from "react";
function Hero() {
  return (
    <div className="container p-3 mt-5">
      <div className="row text-center">
        <h1 className="mb-3">Charges</h1>
        <p className="fs-5 text-muted mb-5"> List of all charges and taxes </p>
      </div>

      <div className="d-flex flex-wrap mt-5">
        <div className="row col-4 p-3">
          <img src="media/images/pricing0.svg" alt="" />
          <h3 className="text-center">Free equity delivery</h3>
          <p className="text-center text-muted">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="m-4"></div>
        <div className="row gap-4 col-4 p-3 mt-4">
          <img src="media/images/other-trades.svg" alt="" />
          <h3 className="text-center">Intraday and F&O trades</h3>
          <p className="text-center text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="m-2"></div>
        <div className="row gap-4 col-4 p-3">
          <img src="media/images/pricing0.svg" alt="" />
          <h3 className="text-center">Free direct MF</h3>
          <p className="text-center text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
