import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import OpenAccount from "../OpenAccount";

function Signup() {
  const features = [
    {
      title: "Stocks",
      description: "Invest in all exchange-listed securities",
      image: "/Media/images/stocks-acop.svg",
    },
    {
      title: "Mutual funds",
      description: "Invest in commission-free direct mutual funds",
      image: "/Media/images/mf-acop.svg",
    },
    {
      title: "IPO",
      description: "Apply to the latest IPOs instantly via UPI",
      image: "/Media/images/ipo-acop.svg",
    },
    {
      title: "Futures & options",
      description:
        "Hedge and mitigate market risk through simplified F&O trading",
      image: "/Media/images/fo-acop.svg",
    },
  ];

  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = 'https://zerodha-clone-7nts.onrender.com';
    // You can integrate API call here
  };
  return (
    <div className="container align-items-center"  id="target-element">
      <div className="row text-center mt-5 p-5">
        <h1>Open a free demat and trading account online</h1>
        <h3 className="text-muted p-3">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </h3>
      </div>

      <div className="row">
        <div className="col-6 p-5 ms-5 mb-5">
          <img src="/Media/images/account_open.svg" alt="Account Open" />
        </div>

        <div className="col-5 p-5 text-muted mt-5 mb-5">
          <h2>SignUp Now</h2>
          <p>Or track your existing application</p>
          <div className="justify-center bg-gray-50">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex border border-gray-300 rounded-md overflow-hidden">
                <div className="flex items-center px-3 bg-gray-100">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg"
                    alt="India Flag"
                    className="w-6 h-4 mr-2"
                    style={{ width: "50px" }}
                  />
                  <span className="text-gray-700">+91</span>
                  <input
                    type="text"
                    placeholder="Enter your mobile number"
                    className="flex-1 p-2 focus:outline-none"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>
              </div>
              <button
                className="p-2 btn btn-primary fs-5 mt-3"
                style={{ width: "30%", margin: "0 auto" }}
                // onClick={}
              >
                Get OTP
              </button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              By proceeding, you agree to the Zerodha{" "}
              <a href="#" className="text-blue-600 underline">
                terms
              </a>{" "}
              &{" "}
              <a href="#" className="text-blue-600 underline">
                privacy policy
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="row g-4 text-muted" style={{ marginLeft: "16%" }}>
        <h1 className="mb-5" style={{ alignItems: "center" }}>
          Investment options with Zerodha demat account
        </h1>
        {features.map((feature, index) => (
          <div key={index} className="col-6 col-md-5 d-flex">
            <img
              src={feature.image}
              alt={feature.title}
              className="me-3"
              width="120"
            />
            <div>
              <h5>{feature.title}</h5>
              <p className="text-muted">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
      <button
          className="p-2 btn btn-primary fs-5 mt-3 mb-5"
          style={{ width: "30%" ,marginLeft:"35%"}}
        >
          Explore Investments
        </button>

      </div>
      <div
        className="row mt-5 border-top align-items-center mb-5"
        style={{ backgroundColor: "#FAFAFB" }}
      >
        <h1 className="text-center">
          Steps to open a demat account with Zerodha
        </h1>
        <div className="col-6 text-center mb-5" style={{ marginLeft: "10%" }}>
          <img src="/Media/images/steps-acop.svg" style={{ width: "60%" }} />
        </div>
        <div className="col-3 mb-5">
          <div class="steps-container">
            <div class="step">
              <div class="step-number">01</div>
              <div class="step-text">Enter the requested details</div>
            </div>
            <hr />
            <div class="step">
              <div class="step-number">02</div>
              <div class="step-text">Complete e-sign & verification</div>
            </div>
            <hr />
            <div class="step">
              <div class="step-number">03</div>
              <div class="step-text">Start investing!</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-5 mb-5" style={{ marginLeft: "14%" }}>
          <img src="/Media/images/acop-benefits.svg" width={"90%"} />
          <h2 className="mt-5 text-muted">
            Benefits of opening a Zerodha demat account
          </h2>
        </div>
        <div className="col-1"></div>
        <div className="col-4 mb-5 text-muted">
          <h3 className="mb-4">Unbeatable pricing</h3>
          <p className="mb-5">
            Zero charges for equity & mutual fund investments. Flat ₹20 fees for
            intraday and F&O trades.
          </p>
          <h3 className="mb-4">Best investing experience</h3>
          <p className="mb-5">
            Simple and intuitive trading platform with an easy-to-understand
            user interface.
          </p>
          <h3 className="mb-4">No spam or gimmicks </h3>
          <p className="mb-5">
            Committed to transparency — no gimmicks, spam, "gamification", or
            intrusive push notifications.
          </p>
          <h3 className="mb-4">The Zerodha universe </h3>
          <p className="mb-5">
            More than just an app — gain free access to the entire ecosystem of
            our partner products.
          </p>
        </div>
      </div>
      <div className="row text-muted text-center">
        <h1>Explore different account types</h1>
      </div>
      <div className="row text-muted">
        <h1>FAQs</h1>
      </div>
      <OpenAccount />
    </div>
  );
}

export default Signup;
