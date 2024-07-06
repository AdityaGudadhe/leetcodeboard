"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

const formSchema = z.object({
  problemId: z.coerce.number({
    required_error: "ProblemId is required",
    invalid_type_error: "problem ID is not valid"
  })
})

export type problemSchemaType = z.infer<typeof formSchema>;

export function ProfileForm(){
  const router = useRouter();
  const form = useForm<problemSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues:{
      problemId: 0,
    }
  })

  async function onSubmit(values:problemSchemaType){
    router.push(`/problems/${values.problemId}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="problemId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Problem</FormLabel>
              <FormDescription>
                Please enter the Problem ID below.
              </FormDescription>
              <FormControl>
                <Input placeholder="Problem ID" {...field} />
              </FormControl>
              <FormMessage/>
            </FormItem>
          )}
        />
        <Button type="submit" >Submit</Button>
      </form>
    </Form>
  )
}