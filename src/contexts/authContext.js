import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
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

  const notify = {
    created: () => toast.success('Dragão criado com sucesso!', {
      position: 'bottom-center'
    }),
    success: () => toast.success('Dragão modificado com sucesso!'),
    error: () => toast.error('Oops! Nome ou tipo não inseridos'),
    info: () => toast.info('Nenhuma alteração realizada!')
 }


  const contexts = {logIn, logOut, user, notify, isAuthenticated: !!user}

  return (
    <AuthContext.Provider value={ contexts }>
      {children}
    </AuthContext.Provider>
  )
}