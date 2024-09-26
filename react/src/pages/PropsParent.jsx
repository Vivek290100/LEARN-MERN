import React from "react";
import PropsChild from "../pages/PropsChild";
import ErrorBoundary from "../components/ErrorBoundary";

const PropsParent = () => {
    const name = "vivek"
    const email = "vivek@gmail.com"

    //Conditional Rendering
    const loggedIn = false

  return (
    <div>
      <ErrorBoundary>
        <h1>Welcome to Prps App</h1>
        <PropsChild  name={name} email = {email} isLoggedIn={loggedIn} />
      </ErrorBoundary>
    </div>
  );
}; 

export default PropsParent;
