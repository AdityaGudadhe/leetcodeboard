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
import Link from "next/link"

const userSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters"
  })
})

export type problemSchemaType = z.infer<typeof userSchema>;

export function LoginForm(){
  const router = useRouter();
  const form = useForm<problemSchemaType>({
    resolver: zodResolver(userSchema),
  })

  function onSubmit(values:problemSchemaType){
    // console.log(`email: ${values.email}, password: ${values.password}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
        <div className="flex justify-start">
          <div className="pr-1">Do not have an account?</div>
          <Link className="text-blue-500" href={"/signup"}><u>Signup</u></Link>
          <div className="pl-1">instead</div>
        </div>
      </form>
    </Form>
  )
}