"use client"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/client"
import { useContext } from "react"
import { LoggedStateContext } from "@/components/context-api/logged-state"

export default function SignoutComponent(){
  const router = useRouter();
  const { isLogged, setIsLogged } = useContext(LoggedStateContext);
  async function signoutHandler(){
    signOut(auth).then(()=>{
      if(setIsLogged) setIsLogged(false);
      router.push('/')
    }).catch(err=>{
      console.log("error while signout:", err);
    })
  }

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div
        className="relative dark:border-amber-50 dark:border px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div>
          Are you sure you want to signout?
        </div>
        <Button onClick={signoutHandler}>
          Yes
        </Button>
      </div>
    </div>
  )
}