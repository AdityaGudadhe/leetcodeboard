import GoogleSignup from "@/components/auth/google"
import GithubSignup from "@/components/auth/github"

export default function FirebaseSignin() {
  return (
    <div>
      <GoogleSignup />
      <div className="py-1" />
      <GithubSignup />
    </div>
  )
}