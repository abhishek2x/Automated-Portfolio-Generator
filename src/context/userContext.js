import React, { useState, createContext, useEffect } from "react";
import { auth } from "../firebase-config";

// Create Context Object
export const UserContext = createContext();

// Create a provider for components to consume and subscribe to changes

export const UserContextProvider = props => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((accountUser) => {
      if (accountUser) {
        if (accountUser.displayName)
          setUser(accountUser.displayName)
        else setUser(accountUser.email)
      }
      console.log("from context: ", user)
    })
  }, [user])

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};
