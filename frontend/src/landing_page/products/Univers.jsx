import React from "react";
import OpenAccount from "../OpenAccount";
function Univers() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1 className="mt-5">The Zerodha Universe </h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 mt-5">
          <img
            src="../Media/images/zerodhaFundhouse.png"
            style={{ height: "55px", maxwidth: "100%" }}
          />
          <p className="text-muted text-small mt-2 extra-small-text">
          Our asset management venture
that is creating simple and transparent index
funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="../Media/images/sensibullLogo.svg"
            style={{ height: "55px", maxwidth: "100%" }}
          />
          <p className="text-muted text-small mt-2 extra-small-text">
          Options trading platform that lets you
create strategies, analyze positions, and examine
data points like open interest, FII/DII, and more.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="../Media/images/tijori.svg"
            style={{ height: "55px", maxwidth: "100%" }}
          />
          <p className="text-muted text-small mt-2 extra-small-text">
          Investment research platform
that offers detailed insights on stocks,
sectors, supply chains, and more.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="../Media/images/streakLogo.png"
            style={{ height: "55px", maxwidth: "100%" }}
          />
          <p className="text-muted text-small mt-2 extra-small-text">Systematic trading platform
that allows you to create and backtest
strategies without coding.</p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="../Media/images/smallcaseLogo.png"
            style={{ height: "55px", maxwidth: "100%" }}
          />
          <p className="text-muted text-small mt-2 extra-small-text">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>
        <div className="col-4 mt-5">
          <img
            src="../Media/images/dittoLogo.png"
            style={{ height: "55px", maxwidth: "100%" }}
          />
          <p className="text-muted text-small mt-2 extra-small-text">
          Personalized advice on life
and health insurance. No spam
and no mis-selling.
          </p>
        </div>
        <OpenAccount/>
      </div>
    </div>
  );
}

export default Univers;
