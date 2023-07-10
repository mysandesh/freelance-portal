import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <form>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input name="username" type="text" placeholder="user" />
        <label htmlFor="">Password</label>
        <input name="password" type="password" placeholder="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
