import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row p-5 align-items-center flex justify-content-between text-center">
        <h1 className="fs-2 text-muted mb-4">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row px-5 mx-5">
        <div className="col-4 p-3">
          <img
            src="media\images\zerodhaFundhouse.png"
            style={{ height: "50px", width: "150px" }}
          />
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media\images\sensibullLogo.svg"
            style={{ height: "50px", width: "150px" }}
          />
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media\images\tijori.svg"
            style={{ height: "50px", width: "150px" }}
          />
          <p className="text-small text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>
      </div>

      <div className="row px-5 mx-5">
        <div className="col-4 p-3">
          <img
            src="media\images\streakLogo.png"
            style={{ height: "50px", width: "150px" }}
          />
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media\images\smallcaseLogo.png"
            style={{ height: "50px", width: "150px" }}
          />
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 p-3">
          <img
            src="media\images\dittoLogo.png"
            style={{ height: "50px", width: "150px" }}
          />
          <p className="text-small text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling.
          </p>
        </div>

        <div className="text-center m-4">
          <button
            className="p-2 my-3 btn btn-primary fs-5 mb-5"
            style={{ width: "20%", margin: "0 auto", backgroundColor: "blue" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
