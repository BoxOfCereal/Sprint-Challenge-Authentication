import React from "react";
import axios from "axios";
import useInputValue from "../customHooks/useInputValue";

const Register = props => {
  let username = useInputValue("");
  let password = useInputValue("");

  const submit = e => {
    e.preventDefault();
    // set the endpoint
    const endpoint = "http://localhost:3300/api/register";
    // use axios to post credentials
    axios
      .post(endpoint, { username: username.value, password: password.value })
      .then(res => {
        // set JSON web token inside local storage
        localStorage.setItem("jwt", res.data.token);
        //<Redirect to="/users" />
        props.history.push("/jokes");
      })
      .catch(error => {
        console.log("error", error.response);
      });
  };

  return (
    <>
      <h2>Register</h2>
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
          <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
};

export default Register;
