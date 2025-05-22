import React from "react";

function Hero() {
  return (
    <div className="cointainer mx-5 px-5">
      <div className="row border-bottom text-center p-5 mt-5">
        <h1>Charges</h1>
        <p className="text-muted mt-3 fs-5">List of all charges and taxes</p>
      </div>
      <div className="row p-5 mt-5 text-muted flex justify-content-between">
        <div className="col-4 px-5">
          <img src="media/images/pricingEquity.svg" style={{ width: "80%" }} />
          <h2>Free equity delivery</h2>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 px-5">
          <img src="media\images\other-trades.svg" style={{ width: "80%" }} />
          <h2>Intraday and F&O trades</h2>
          <p>
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 px-5">
          <img src="media\images\pricingEquity.svg" style={{ width: "80%" }} />
          <h2>Free direct MF</h2>
          <p>
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
