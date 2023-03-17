import AppNavigator from "./src/components/AppNavigator";
import React, { createContext, useState } from "react";

const LoginContext = createContext()


export default function App() { 

  const [isLogin, setIsLogin] = useState(true)

  return (
    <LoginContext.Provider
      value={
        {
          isLogin,
          setIsLogin
        }
      }
    >
      <AppNavigator />
    </LoginContext.Provider>
  );
}

export { LoginContext }
