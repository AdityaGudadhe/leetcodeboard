import { LoginForm } from "@/components/custom/login-form"

export default function Login(){
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div
        className="relative dark:border-amber-50 dark:border px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <LoginForm />
      </div>
    </div>
  )
}