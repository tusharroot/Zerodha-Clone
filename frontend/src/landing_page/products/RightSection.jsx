import React from "react";
function RightSection({imageURL, productName, productDescription, learnMore}) {
  return (
    <div className="container">
      <div className="row mb-5">
        <div className="col-4 p-5 mt-5">
          <h1 className="mt-5">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore}>
              Learn More{" "}
              <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="col-2 p-5"></div>
        <div className="col-5">
          <img src={imageURL} width={"125%"} />
        </div>
      </div>
    </div>
  );
}
export default RightSection;
