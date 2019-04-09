import React from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

//it the endpoint from the Env
const endpoint = `${process.env.REACT_APP_API_URL}/api`;
axios.defaults.baseURL = endpoint;

//https://github.com/axios/axios#interceptors
//on all requests and I want to use these options
// this is like middleware
axios.interceptors.request.use(
  function(options) {
    options.headers.authorization = localStorage.getItem("jwt");
    return options;
  },
  function(err) {
    return Promise.reject(err);
  }
);

//higher order comp
export default function(Component) {
  return props => {
    const token = localStorage.getItem("jwt");
    return <>{token ? <Component {...props} /> : <Redirect to="/login" />}</>;
  };
}
