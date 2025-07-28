import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="container p-5">
      <div className="row">
        <h1 className="mt-5 "> 404 Page Not Found</h1>
        <p>
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/" style={{textDecoration:"none"}}>
            Home
        </Link>
      </div>
    </div>
  );
}

export default NotFoundPage;
