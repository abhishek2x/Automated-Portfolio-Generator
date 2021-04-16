import React, { useState, createContext, useEffect } from "react";
import { auth } from "../firebase-config";

// Create Context Object
export const UidContext = createContext();

// Create a provider for components to consume and subscribe to changes

export const UidContextProvider = props => {
  const [uid, setUid] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((accountUser) => {
      if (accountUser) {
        setUid(accountUser.uid)
      }
      console.log("from context: ", uid)
    })
  }, [uid])

  return (
    <UidContext.Provider value={[uid, setUid]}>
      {props.children}
    </UidContext.Provider>
  );
};
