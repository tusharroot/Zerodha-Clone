import React from "react";
import { useNavigate } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


function OpenAccount() {
    // const navigate = useNavigate();
  
    // const handleRedirect = () => {
    //   navigate('/Signup#target-element');
    // };
  return (
    <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-5 "> Open a Zerodha account</h1>
        <p>
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <HashLink smooth to="/Signup#target-element">
        <button  className="p-2 btn btn-primary fs-5"
            style={{ width: "20%", margin: "0 auto" }} >
            Sign up Now
        </button>
        </HashLink>
      </div>
    </div>
  );
}

export default OpenAccount;
