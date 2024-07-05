// "use client"
// import { useRouter } from "next/navigation"
// import { auth } from "@/firebase/client"
// // import { createUserWithEmailAndPassword } from "firebase/auth"
//
// export default function GoogleSignup() {
//   const router = useRouter()
//   async function loginHandler(){
//     try{
//       const response = await
//       const user = response.user;
//       router.push('/');
//     }
//     catch(err){
//       console.log("google signin error:", err);
//     }
//   }
//
//   return (
//     <button onClick={loginHandler}>Login with Google</button>
//   )
// }