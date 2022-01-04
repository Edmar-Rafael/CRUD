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
    else{
      notify.loginError()
    }
  }

  function logOut() {
    setUser(null)
    localStorage.removeItem(`${SESSION_KEY}`)
  }

  const notify = {
    created: () => toast.success('Dragão criado com sucesso!\n'
    + 'Dragon create successfull!', {
        position: 'bottom-center'
    }),
    success: () => toast.success('Dragão modificado com sucesso!\n' 
    + 'Dragon modified successfull'
    ),
    loginError: () => toast.error('Oops! Nome e/ou Senha incorretos!\n'
    + 'Oops! Name and/or Password incorrect!'),
    error: () => toast.error('Oops! Nome e/ou tipo não inseridos\n'
    + 'Oops! Name or type not inserted'
    ),
    info: () => toast.info('Nenhuma alteração realizada!\n'
    + 'No changes made!')
 }


  const contexts = {logIn, logOut, user, notify, isAuthenticated: !!user}

  return (
    <AuthContext.Provider value={ contexts }>
      {children}
    </AuthContext.Provider>
  )
}