import React from "react";
import "./SupportPage.css";

function Hero() {
  return (
    <div className="cointainer hero text-muted px-5">
      <div className="row mx-5 p-5 support-row">
        <div className="col-6 px-5">
          <a href="/" style={{ textDecoration: "none", color: "#fff" }}>
            <h3 className="fs-5">Support Portal</h3>
          </a>
        </div>
        <div className="col-6">
          <a
            href="/"
            style={{ textDecoration: "", color: "#fff", textAlign: "right" }}
          >
            <h3 className="fs-5">Track tickets</h3>
          </a>
        </div>
      </div>
      <div className="row mx-5 mb-5 px-5 support-row row2 flex align-center">
        <div className="col-7 mb-5 pb-5 px-5">
          <h3 className="fs-4 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h3>
          <input placeholder="Eg. how do i activate F&O, why is my order getting rejected ..." />
          <div className="supportLinks">
            <a href="/">Track account opening</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/">Track segment activation</a> &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="/">Intraday margins</a> <br />
            <a href="/">Kite user manual</a>
          </div>
        </div>
        <div className="col-5 mb-5 pb-5">
          <h3 className="fs-4 mb-3">Featured</h3>
          <ol>
            <li className="mb-3">
              Change in expiry day of NSE derivative contracts from April 04,
              2025 [Withheld]
            </li>
            <li>Surveillance measure on scrips - April 2025</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
