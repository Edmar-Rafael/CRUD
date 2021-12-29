import React, { createContext, useEffect, useState } from "react";
import { EMAIL, PASSWORD, SESSION_KEY } from "../config";

export const AuthContext = createContext({})

export function AuthContextProvider({children}) {
  const [user, setUser] = useState()

  useEffect(() => {
    async function loadStorageData() {
      const session = await localStorage.getItem(`${SESSION_KEY}`)
      if(session) {
        setUser(JSON.parse(session))
      }
    }
    loadStorageData()
  }, [])

  function logIn(userData) {
    if(EMAIL === userData.name && PASSWORD === userData.password) {
      setUser(userData)
      localStorage.setItem(`${SESSION_KEY}`, JSON.stringify(userData))
    }
  }

  function logOut() {
    setUser(null)
    localStorage.removeItem(`${SESSION_KEY}`)
  }


  const contexts = {logIn, logOut, user, isAuthenticated: !!user}

  return (
    <AuthContext.Provider value={ contexts }>
      {children}
    </AuthContext.Provider>
  )
}