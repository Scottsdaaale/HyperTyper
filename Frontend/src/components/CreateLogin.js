import React from "react";
import { useState } from "react";

function CreateLogin() {
  const [newUser, setNewUser] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");

  function signUpFormSubmitHandler(e) {
    e.preventDefault();

    fetch("http://localhost:9292/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
          username: newUser, 
          password: newUserPassword
        }),
    })
      .then((res) => res.json())
      .then((data) => alert(data.message));
  }

  return (
    <div className="login-page">
      <div className="log-form">
        <form className="register-form" onSubmit={signUpFormSubmitHandler}>
          {/* <label className="login-label" htmlFor='signUpUsername'>Create Username </label> */}
          <input
            className="login-input"
            id="signUp"
            onChange={(e) => setNewUser(e.target.value)}
            type="text"
            placeholder="create username"
          ></input>
          {/* <label className="login-label" htmlFor='signUpPassword'>Create Password</label> */}
          <input
            className="login-input"
            id="signUpPassword"
            onChange={(e) => setNewUserPassword(e.target.value)}
            type="password"
            placeholder="create password"
          ></input>
          <button className="form-button" type="submit">
            Submit
          </button>
          <p className="sign-message">
            Already registered?{" "}
            <a href="http://localhost:5050/login">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default CreateLogin;
