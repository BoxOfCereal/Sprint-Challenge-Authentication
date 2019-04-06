import React, { Component } from "react";
import { Route, NavLink, withRouter, Switch } from "react-router-dom";
import Login from "./Login/Login";
import Register from "./Register/Register";
import Jokes from "./Jokes/Jokes";

import "./App.css";
require("dotenv").config();

class App extends Component {
  logout = () => {
    //Remove the jwt from local storage
    localStorage.removeItem("jwt");
    //redirect to login
    this.props.history.push("/login");
  };

  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/register">Register</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/login">Login</NavLink>
            &nbsp;|&nbsp;
            <NavLink to="/jokes">Jokes</NavLink>
            &nbsp;|&nbsp;
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/jokes" component={Jokes} />
          </Switch>
        </main>
      </>
    );
  }
}

export default withRouter(App);
