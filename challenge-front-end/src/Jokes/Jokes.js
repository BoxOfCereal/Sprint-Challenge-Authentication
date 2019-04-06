import React, { useState, useEffect } from "react";
import axios from "axios";
import requiresAuth from "../auth/requiresAuth";

const Jokes = () => {
  const [data, setData] = useState([]);
  const URL = `http://localhost:3300/api/jokes`;

  useEffect(() => {
    //use effect does not support asynchronous functions
    // because useEffect needs to return a clean and function or nothing
    // but you can use an asynchronous function inside useEffect
    const fetchData = async () => {
      const result = await axios(URL);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Jokes</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    </>
  );
};

export default requiresAuth(Jokes);
