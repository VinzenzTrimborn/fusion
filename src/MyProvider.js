import React, { useState } from "react";
import MyContext from "./MyContext";
import supabaseClient from "./supabaseClient";

const MyProvider = ({ children }) => {
  const [state, setState] = useState(() => {
    const storedState = localStorage.getItem("state");
    if (storedState) {
      return JSON.parse(storedState);
    } else {
      // ToDo Koray: Call superbase and ask for a new user ID
      supabaseClient.rpc("create_user").then(({ data, error }) => {
        console.log(data);
        setState({ userID: 1 });
        console.log(error);
      });
      return { userID: 1 };
    }
  });
  // value to be passed to consuming components
  const contextValue = {
    state,
    updateState: (newState) => setState({ ...state, ...newState }),
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export default MyProvider;
