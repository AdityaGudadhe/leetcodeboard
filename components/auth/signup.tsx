import GoogleSignup from "@/components/auth/google"
import GithubSignup from "@/components/auth/github"

export default function FirebaseSignup() {
  return (
    <div>
      <GoogleSignup/>
      <div className="py-1"/>
      <GithubSignup/>
    </div>
  )
}