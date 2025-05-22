import React from "react";

function LeftSection({
  imageURl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div
        className="row p-5  align-items-center flex justify-content-between"
      >
        <div className="col-6 p-3" style={{ textAlign: "right" }}>
          <img src={imageURl} />
        </div>
        <div className="col-1"></div>
        <div className="col-5 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div style={{ display: "flex" }}>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a
              href={learnMore}
              style={{ marginLeft: "60px", textDecoration: "none" }}
            >
              Learn more{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          <div className="mt-3" style={{ display: "flex" }}>
            <a href={googlePlay}>
              <img src="media\images\googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img
                src="media\images\appstoreBadge.svg"
                style={{ marginLeft: "30px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
