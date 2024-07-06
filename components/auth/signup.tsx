import GoogleSignup from "@/components/auth/google"
import GithubSignup from "@/components/auth/github"

export default function FirebaseSignin() {
  return (
    <div>
      <div className="py-1" />
      <GoogleSignup />
      <div className="py-1" />
      <GithubSignup />
    </div>
  )
}