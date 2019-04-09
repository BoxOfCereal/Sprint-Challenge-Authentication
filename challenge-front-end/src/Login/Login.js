import React from "react";
import axios from "axios";
import useInputValue from "../customHooks/useInputValue";

const Login = props => {
  let username = useInputValue("");
  let password = useInputValue("");

  const submit = e => {
    e.preventDefault();
    // set the endpoint
    const endpoint = "http://localhost:3300/api/login";
    // use axios to post credentials
    axios
      .post(endpoint, { username: username.value, password: password.value })
      .then(res => {
        // set JSON web token inside local storage
        localStorage.setItem("jwt", res.data.token);
        //redirect to jokes
        props.history.push("/jokes");
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      <h2>Login</h2>
      <form onSubmit={submit}>
        <div>
          <div>
            <label htmlFor="username">Username</label>
            <input name="username" id="username" type="text" {...username} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              {...password}
            />
          </div>
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default Login;
