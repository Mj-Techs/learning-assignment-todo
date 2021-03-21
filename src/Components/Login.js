import React, { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState(
    localStorage.getItem("username") ? localStorage.getItem("username") : ""
  );
  const [password, setPassword] = useState(
    localStorage.getItem("password") ? localStorage.getItem("password") : ""
  );
  const [loginError, setLoginError] = useState({});
  const errors = {};
  const handleUsername = (e) => {
    setUsername(e.target.value);
    localStorage.setItem("username", e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    localStorage.setItem("password", e.target.value);
  };
  const runValidation = () => {
    if (username.length === 0) {
      errors.username = "input field can't be empty";
    }
    if (password.length === 0) {
      errors.password = "input field can't be empty";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    runValidation();
    if (Object.keys(errors).length === 0) {
      setLoginError({});
      props.history.push(`/${username}/Todos`);
    } else {
      setLoginError(errors);
    }
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit} className="login_form">
        <div className="username">
          <label>Username</label>
          <input
            type="text"
            value={username}
            name="username"
            onChange={handleUsername}
            style={{ borderColor: loginError.username && "red" }}
          />
        </div>
        {loginError.username && <span>{loginError.username}</span>}
        <div className="password">
          <label>Password</label>
          <input
            type="password"
            value={password}
            name="password"
            onChange={handlePassword}
            style={{ borderColor: loginError.password && "red" }}
          />
        </div>
        {loginError.password && <span>{loginError.password}</span>}
        <div className="submit_btn">
          <button type="submit" className="btn">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
