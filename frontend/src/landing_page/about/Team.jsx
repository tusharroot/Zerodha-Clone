import React from "react";
function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="fs-2 text-center mt-5">People</h1>
      </div>
      <div
        className="row text-muted p-3"
        style={{ lineHeight: "1.9", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="../Media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "55%" }}
          ></img>
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="https://nithinkamath.me/" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /
            <a href="https://tradingqna.com/u/nithin/summary" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="https://twitter.com/Nithin0dha" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
