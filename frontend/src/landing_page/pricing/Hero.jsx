import React from "react";
function Hero() {
  return (
    <div className="container">
      <div className="row mt-5 border-bottom text-muted p-5 text-center">
        <h1>Charges</h1>
        <h3 className="fs-4 mt-3">List of all charges and taxes</h3>
      </div>
      <div className="row p-5 text-center text-muted">
        <div className="col-4 p-4 text-center">
          <img src="../Media/images/pricingEquity.svg" width={"75%"} />
          <h1 className="fs-3">Free equity delivery </h1>
          <p>
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="../Media/images/intradayTrades.svg" width={"75%"}/>
          <h1 className="fs-3">Intraday and F&O trades
          </h1>
          <p>
          Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="../Media/images/pricingEquity.svg" width={"75%"}/>
          <h1 className="fs-3">Free direct MF
          </h1>
          <p>
          All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
