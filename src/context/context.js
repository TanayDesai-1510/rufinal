import { createContext, useContext, useState } from "react";

const MeddyContext = createContext(null);

export const useContract = () => useContext(MeddyContext);

export const MeddyProvider = (props) => {
  const [userType, setUserType] = useState("");
  const [authData, setAuthData] = useState([]);

  return (
    <MeddyContext.Provider
      value={{
        userType,
        setUserType,
        setAuthData,
        authData,
      }}
    >
      {props.children}
    </MeddyContext.Provider>
  );
};
