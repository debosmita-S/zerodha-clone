import React from "react";
function LeftSection({
  imageURL,
  prodName,
  prodDesc,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-7 p-2">
          <img src={imageURL} />
        </div>
        <div className="col-5 mt-5">
          <h1>{prodName}</h1>
          <p style={{marginRight:"120px"}}>{prodDesc}</p>
          <div>
            <a href='' style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500" }}>{tryDemo}{" "}
            </a>
            <a href='' style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500", marginLeft:"80px" }}>
            {learnMore}{" "}
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg"/>
            </a>
            <a href={appStore} style={{marginLeft:"30px"}}>
              <img src="media/images/appstoreBadge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
