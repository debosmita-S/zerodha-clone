import React from "react";
function Universe() {
  return (
    <div className="container">
      <div className="row">
        <h1 className="fs-2 p-4 text-center">The Zerodha Universe</h1>
        <p className="fs-5 text-center text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="d-flex flex-wrap fs-6 text-muted">
        <div className="row gap-4 col-4 p-5">
          <img src="media/images/zerodhaFundhouse.png"></img>
          <p className="text-center">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="row gap-4 col-4 p-5">
          <img src="media/images/sensibullLogo.svg"></img>
          <p className="text-center">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="row gap-4 col-4 p-5">
          <img src="media/images/tijori.svg"></img>
          <p className="text-center">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="row gap-4 col-4 p-5">
          <img src="media/images/streakLogo.png"></img>
          <p className="text-center">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="row gap-4 col-4 p-5">
          <img src="media/images/smallcaseLogo.png"></img>
          <p className="text-center">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="row gap-4 col-4 p-5">
          <img src="media/images/dittoLogo.png"></img>
          <p className="text-center">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin: "0 auto"}}>Sign up for free</button>
        
      </div>
      <div className="m-5"></div>
    </div>
  );
}

export default Universe;
