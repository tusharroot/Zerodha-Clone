import React from "react";

function Hero() {
  return (
    <section className="container-fluid " id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row mb-5">
      <div className="col-1 "style={{marginLeft:"50px"}}></div>
        <div className="col-5 p-3 ">
          <h1 className="fs-4">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg. how do I activate F&O" className="mb-3"/>
          <br />
          <a href="" className="p-3">Track account opening</a>
          <a href="" className="p-3">Track segment activation</a>
          <a href="" className="p-3">Intraday margins</a><br/>
          <a href="" className="p-3">Kite user manual</a>
        </div>
        <div className="col-4 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;