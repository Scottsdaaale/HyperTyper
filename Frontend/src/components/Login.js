import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Login({ currentUser, setCurrentUser, setCurrentUserResults }) {
  const [login, setLogin] = useState({ username: "", password: "" });

  console.log(currentUser);
  function loginSubmitHandler(e) {
    e.preventDefault();

    fetch("http://localhost:9292/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(login),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.id) {
          setCurrentUser(data);
          setCurrentUserResults(data.results);
        } else {
          console.log(data);
        }
      });
  }
  console.log(currentUser);
  function handleUsernameLogin(e) {
    setLogin({ ...login, username: e.target.value });
  }

  function handlePasswordLogin(e) {
    setLogin({ ...login, password: e.target.value });
  }
  // const handleDelete = (userToDelete) => {
  //     console.log(userToDelete)
  //     fetch(`http://localhost:9292/users/${userToDelete.id}`,{
  //         method:'DELETE',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //     })
  //     .then(res => res.json())
  //     .then(data => alert(data.message))
  // }

  // function handleEdit(userToEdit) {
  // fetch(`localhost:9292/users/${userToEdit.id}`, {
  //  method: 'PATCH',
  //  headers: {
  //      'Content-type' : 'application/json'
  //    },
  //  body: JSON.stringify(userToEdit)
  // })
  // }

  return (
    <div className="login-page">
      <div className="log-form">
        <form onSubmit={loginSubmitHandler}>
          {/* <label className="login-label" htmlFor="signIn">Username</label> */}
          <input
            className="login-input"
            onChange={handleUsernameLogin}
            id="signIn"
            type="text"
            placeholder="username"
          ></input>
          {/* <label className="login-label" htmlFor='loginPassword'>Password</label> */}
          <input
            className="login-input"
            onChange={handlePasswordLogin}
            id="loginPassword"
            type="password"
            placeholder="password"
          ></input>
          <button className="form-button" type="submit">
            Submit
          </button>
          <p className="sign-message">
            Not registered? <Link to="create-account">Create an account</Link>
          </p>
        </form>
      </div>
      {/* <button onClick={(e)=>{handleDelete(currentUser)}}></button> */}
      {/* <button onClick={(e)=>{handleEdit(currentUser)}}></button> */}
    </div>
  );
}

export default Login;
