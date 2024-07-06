"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/client"



const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters"
  }).max(20, {
    message: "Maximum character limit reached"
  })
})

export type loginSchemaType = z.infer<typeof userSchema>;

export default function EmailSignup() {
  const router = useRouter()

  const form = useForm<loginSchemaType>({
    resolver: zodResolver(userSchema),
  })


  async function loginHandler(values:loginSchemaType){
    try{
      const response = await createUserWithEmailAndPassword(auth, values.email, values.password)
      const token: string = await response.user.getIdToken()
      localStorage.setItem("authorization", token)
      router.push("/login")
    }
    catch(error){
      console.log("email signup error", error);
    }
  }


  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(loginHandler)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" >Submit</Button>
      </form>
    </Form>
  )
}