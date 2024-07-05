import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function UnAuthorized(){
  const router = useRouter();

  useEffect(()=>{
    setTimeout(()=>{
      router.push('/signup');
    }, 2000);
  },[])

  return (
    <div className="flex justify-center text-3xl font-bold text-red-500">
      Looks like your are not logged in. Redirecting to the login page...
    </div>
  )
}