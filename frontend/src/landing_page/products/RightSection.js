import React from "react";

function RightSection({
  imageURl,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div
        className="row p-5 align-items-center flex justify-content-between"
      >
        <div className="col-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn more
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>
        <div className="col-1"></div>
        <div className="col-6 p-3" style={{ textAlign: "left" }}>
          <img src={imageURl}/>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
