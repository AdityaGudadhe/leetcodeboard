import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import * as React from "react"

export default function UnAuthorized(){
  const router = useRouter();

  useEffect(()=>{
    setTimeout(()=>{
      router.push('/login');
    }, 2000);
  },[])

  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div
        className="relative dark:border-amber-50 dark:border px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="flex justify-around">
          <div className="flex justify-center text-3xl font-bold text-red-500">
            Looks like your are not logged in. Redirecting to the login page...
          </div>
          <div className="p-2" />
        </div>
      </div>
    </div>
  )
}