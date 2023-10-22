import React from "react";
import "../styles/ErrorPage.css"
function Errorpage() {
  return (
    <div className="error-message-wrapper">
      <h2>Something went wrong.</h2>
      <p>404 - Page Not Found</p>
      <a href="/">
        <button>Go Back to home....</button>
      </a>
    </div>
  );
}

export default Errorpage;