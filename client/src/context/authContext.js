import React, { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState();
  const [log, setLog] = useState(false);


   
 
  useEffect(() => {
    const data = sessionStorage.getItem("userInfo");
     
    if (data) {
      const parseData = JSON.parse(data);
     console.log(parseData)
      setAuth({
        //...auth,
        user: parseData.username,
        
        token: parseData.token,
      });
      console.log(auth)
    }
       
    
  }, []);
  return (
    <AuthContext.Provider value={[auth, setAuth]}>
      {children}
    </AuthContext.Provider>
  );
};

// custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
 