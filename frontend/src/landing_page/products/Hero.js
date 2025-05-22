import React from "react";

function Hero() {
  return (
    <div className="container border-bottom">
      <div className=" my-5 p-5 text-center">
        <h1>Zerodha Products</h1>
        <h3 className="text-muted mt-3 fs-4">
          Sleek, modern, and intuitive trading platforms
        </h3>
        <p className="mt-3">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings
            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
