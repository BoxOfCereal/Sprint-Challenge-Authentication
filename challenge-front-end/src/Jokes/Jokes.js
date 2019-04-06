import React, { useState, useEffect } from "react";
import axios from "axios";
import requiresAuth from "../auth/requiresAuth";

const Jokes = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("hipster");

  useEffect(() => {
    //use effect does not support asynchronous functions
    // because useEffect needs to return a clean and function or nothing
    // but you can use an asynchronous function inside useEffect

    //http://localhost:3300/api/jokes?term=hipster
    const URL = `http://localhost:3300/api/jokes`;
    const fetchData = async () => {
      const result = await axios(`${URL}?term=${query}`);
      setData(result.data);
    };
    fetchData();
  }, [query]); //the effect is now depending on the query

  return (
    <>
      <h1>Jokes</h1>
      <label htmlFor="search-term">Search Term</label> <br />
      <input
        name="search-term"
        id="search-term"
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    </>
  );
};

export default requiresAuth(Jokes);
