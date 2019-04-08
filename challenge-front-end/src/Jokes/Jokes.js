import React, { useState } from "react";
import requiresAuth from "../auth/requiresAuth";
import useAxiosFetchData from "../customHooks/useAxiosFetchData";

const Jokes = () => {
  const { data, isLoading, isError, doFetch } = useAxiosFetchData(
    `http://localhost:3300/api/jokes`,
    []
  );
  const [query, setQuery] = useState(""); //holds state of query term from input

  return (
    <>
      <h1>Jokes</h1>
      {console.count("render")}
      <label htmlFor="search-term">Search Term</label> <br />
      {/* set search based off input */}
      <button
        type="button"
        onClick={() => doFetch(`http://localhost:3300/api/jokes?term=${query}`)}
      >
        Search
      </button>
      <input
        name="search-term"
        id="search-term"
        type="text"
        value={query}
        placeholder="hispter"
        onChange={event => setQuery(event.target.value)}
      />
      {isError && <div>Something went wrong ...</div>}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.joke}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default requiresAuth(Jokes);
