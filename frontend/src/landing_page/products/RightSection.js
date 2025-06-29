import React from 'react';
function RightSection({prodName,
  prodDesc,
  learnMore,
  imageURL}) {
    return ( 
        <div className="container">
      <div className="row">
        <div className="col-5 mt-5">
          <h1 style={{marginTop:"120px"}}>{prodName}</h1>
          <p style={{marginRight:"120px"}}>{prodDesc}</p>
          <div>
            <a href="demat" style={{ textDecoration: "none", color: "#1a73e8", fontWeight: "500"}}>
            {learnMore}{" "}
            </a>
          </div>
        </div>
        <div className="col-7 p-2">
          <img src={imageURL} alt="" />
        </div>
      </div>
      </div>
     );
}

export default RightSection;