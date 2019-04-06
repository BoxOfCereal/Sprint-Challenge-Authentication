import React from "react";
import axios from "axios";
import requiresAuth from "../auth/requiresAuth";

const Jokes = () => {
  const URL = `http://localhost:3300/api/jokes`;

  return (
    <>
      <h1>Jokes</h1>
    </>
  );
};

export default requiresAuth(Jokes);
