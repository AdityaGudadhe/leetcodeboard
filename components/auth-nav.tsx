"use client"

import LoginButton from "@/components/auth/login-button"
import { useContext } from "react"
import { LoggedStateContext } from "@/components/context-api/logged-state"
import SignoutButton from "@/components/auth/logout-button"

export function LoginNav() {
  const { isLogged, setIsLogged } = useContext(LoggedStateContext);

  return <div>
    {
        isLogged ? <SignoutButton/> : <LoginButton />
    }
  </div>
}