import React from "react";
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/images/kite.png"
        prodName="Kite"
        prodDesc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="Try Demo"
        learnMore="Learn more"
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/images/console.png"
        prodName="Console"
        prodDesc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="Learn more"
      />

      <LeftSection
        imageURL="media/images/coin.png"
        prodName="Coin"
        prodDesc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="Coin"
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <div className="row m-5"></div>
      <RightSection
        imageURL="media/images/kiteconnect.png"
        prodName="Kite Connect API"
        prodDesc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="Kite Connect"
      />
      <div className="row m-5"></div>
      <LeftSection
        imageURL="media/images/varsity.png"
        prodName="Varsity mobile"
        prodDesc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <p className="fs-4 m-5 p-4 text-center">
        Want to know more about our technology stack? Check out the{" "}
        <a
          href=""
          style={{
            textDecoration: "none",
            color: "#1a73e8",
          }}
        >
          Zerodha.tech{" "}
        </a>{" "}
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;
