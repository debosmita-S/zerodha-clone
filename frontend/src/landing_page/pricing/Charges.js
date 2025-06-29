import React from "react";
function Charges() {
  return (
    <div className="container">
      <p className="fs-5 mt-5 text-center mb-5">
        <a href="demat" style={{ textDecoration: "none" }}>
          Calculate your costs upfront
        </a>{" "}
        using our brokerage calculator
      </p>
      <h3 className="text-muted">Charges explained</h3>
      <div className="d-flex flex-wrap">
        <div className="col-6 pe-5">
          <p className="fs-5">Securities/Commodities transaction tax</p>
          <p style={{ fontSize: "0.9rem" }}>
            Tax by the government when transacting on the exchanges. Charged as
            above on both buy and sell sides when trading equity delivery.
            Charged only on selling side when trading intraday or on F&O.
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            When trading at Zerodha, STT/CTT can be a lot more than the
            brokerage we charge. Important to keep a tab.
          </p>
          <p className="fs-5">Transaction/Turnover Charges</p>
          <p style={{ fontSize: "0.9rem" }}>
            Charged by exchanges (NSE, BSE, MCX) on the value of your
            transactions.
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
            to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
            merged into a new group X w.e.f 01.12.2017)
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            BSE has revised transaction charges in SS and ST groups to ₹1,00,000
            per crore of gross turnover.
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            BSE has revised transaction charges for group A, B and other non
            exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC,
            W, T) at ₹375 per crore of turnover on flat rate basis w.e.f.
            December 1, 2022.
          </p>
        </div>
        {/* <div className="m-5 p-2"></div> */}
        <div className="col-6">
          <p className="fs-5">GST</p>
          <p style={{ fontSize: "0.9rem" }}>
            Tax levied by the government on the services rendered. 18% of (
            brokerage + SEBI charges + transaction charges)
          </p>
          <p className="fs-5">SEBI Charges</p>
          <p style={{ fontSize: "0.9rem" }}>
            Charged at ₹10 per crore + GST by Securities and Exchange Board of
            India for regulating the markets.
          </p>
          <p className="fs-5">DP (Depository participant) charges</p>
          <p style={{ fontSize: "0.9rem" }}>
            ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
            charged on the trading account ledger when stocks are sold,
            irrespective of quantity.
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            Female demat account holders (as first holder) will enjoy a discount
            of ₹0.25 per transaction on the CDSL fee.
          </p>
          <p style={{ fontSize: "0.9rem" }}>
            Debit transactions of mutual funds & bonds get an additional
            discount of ₹0.25 on the CDSL fee.
          </p>
          <p className="fs-5">Pledging charges</p>
          <p style={{ fontSize: "0.9rem" }}>
            ₹30 + GST per pledge request per ISIN.
          </p>
        </div>

        <div className="mt-3 mb-5">
          <p className="fs-5">Disclaimer</p>
          <p>
            For Delivery based trades, a minimum of ₹0.01 will be charged per
            contract note. Clients who opt to receive physical contract notes
            will be charged ₹20 per contract note plus courier charges.
            Brokerage will not exceed the rates specified by SEBI and the
            exchanges. All statutory and regulatory charges will be levied at
            actuals. Brokerage is also charged on expired, exercised, and
            assigned options contracts. Free investments are available only for
            our retail individual clients. Companies, Partnerships, Trusts, and
            HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery
            brokerage. A brokerage of 0.25% of the contract value will be
            charged for contracts where physical delivery happens. For netted
            off positions in physically settled contracts, a brokerage of 0.1%
            will be charged.
          </p>
        </div>
        <div className="mt-3 mb-3">
          <h3 className="text-muted">Charges for account opening</h3>
        </div>
      </div>
      <div style={{marginBottom:"90px"}}>
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Type of account</th>
              <th scope="col">Charges</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Online account</td>
              <td><button type="button" class="btn btn-success">FREE</button></td>
            </tr>
            <tr>
              <td>Offline account</td>
              <td><button type="button" class="btn btn-success">FREE</button></td>
            </tr>
            <tr>
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr>
              <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Charges;
