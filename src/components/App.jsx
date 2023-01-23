import React from "react";
import Form from "./Form";

var userIsRegistered = false ;

function App() {
  return (
    <div className="container">
      {userIsRegistered ? <h1>Sign in to Get Started</h1> : <h1>Sign Up to continue </h1>}
      
      <Form 
      isRegistered={userIsRegistered}/>
    </div>
  );
}

export default App;
