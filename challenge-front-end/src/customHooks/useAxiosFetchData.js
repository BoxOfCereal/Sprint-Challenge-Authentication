import { useState, useEffect, useReducer } from "react";
import axios from "axios";

const useAxiosFetchData = (initialUrl, initialData) => {
  console.count("hook call");
  const [url, setUrl] = useState(initialUrl); //holds current url
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "FETCH_INIT":
          return {
            ...state,
            isLoading: true,
            isError: false
          };
        case "FETCH_SUCCESS":
          return {
            ...state,
            isLoading: false,
            isError: false,
            data: action.payload
          };
        case "FETCH_FAILURE":
          return {
            ...state,
            isLoading: false,
            isError: true
          };
        default:
          throw new Error();
      }
    },
    {
      isLoading: false,
      isError: false,
      data: initialData
    }
  );

  useEffect(() => {
    //use effect does not support asynchronous functions
    // because useEffect needs to return a clean and function or nothing
    // but you can use an asynchronous function inside useEffect

    const fetchData = async () => {
      //is loading
      dispatch({ type: "FETCH_INIT" });

      try {
        const result = await axios(url);
        dispatch({ type: "FETCH_SUCCESS", payload: result.data });
      } catch (e) {
        dispatch({ type: "FETCH_FAILURE" });
      }
      //done loading
    };
    fetchData();
  }, [url]); //once urls is changed with button effect will run

  const doFetch = url => {
    setUrl(url); //changes the URL and retriggers the effect
  };
  console.log(state);
  return { ...state, doFetch };
};

export default useAxiosFetchData;
