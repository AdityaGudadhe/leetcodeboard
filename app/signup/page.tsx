import EmailSignup from "@/components/auth/email-signup"
import Link from "next/link"


export default function Signup(){
  return <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
    <div
      className="relative dark:border-amber-50 dark:border px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
      <EmailSignup />
      <div className="flex justify-start">
        <div className="pr-1">Already have an account?</div>
        <Link className="text-blue-500" href={"/login"}><u>Login</u></Link>
        <div className="pl-1">instead</div>
      </div>
    </div>
  </div>
}