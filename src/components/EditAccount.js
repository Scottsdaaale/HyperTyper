import React from "react";

function EditAccount({ currentUser }) {
  // const handleDelete = (id) => {
  //     fetch(`http://localhost:9292/users/${currentUser.id}`,{
  //         method:'DELETE',
  //         headers: {
  //             'Content-Type': 'application/json'
  //         },
  //     })
  //     .then(res => res.json())
  //     .then(data => console.log(data))

  // }
  const handleDelete = (userToDelete) => {
    console.log(userToDelete);
    fetch(`http://localhost:9292/users/${userToDelete.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="login-page">
      <div className="log-form">
        <form /*onSubmit={loginSubmitHandler}*/>
          {/* <label className="login-label" htmlFor="signIn">Username</label> */}
          <input
            className="login-input"
            /*onChange={handleUsernameLogin} */ id="old-username"
            type="text"
            placeholder="username"
          ></input>
          <input
            className="login-input"
            /*onChange={handleUsernameLogin} */ id="new-username"
            type="text"
            placeholder="edit username"
          ></input>
          {/* <label className="login-label" htmlFor='loginPassword'>Password</label> */}
          <input
            className="login-input"
            /* onChange={handlePasswordLogin}*/ id="old-password"
            type="password"
            placeholder="old password"
          ></input>
          <input
            className="login-input"
            /* onChange={handlePasswordLogin}*/ id="new-password"
            type="password"
            placeholder="new password"
          ></input>
          <button className="form-button" type="submit">
            Submit
          </button>
          <p className="sign-message">
            Want to delete your account?{" "}
            <button
              id="user-delete-button"
              onClick={(e) => {
                handleDelete(currentUser);
              }}
              type="click"
            >
              Delete account
            </button>
          </p>
        </form>
      </div>
    </div>
  );
}

export default EditAccount;
