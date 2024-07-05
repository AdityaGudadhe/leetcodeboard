import type { Metadata } from "next"
import { Inter } from "next/font/google"
import React, { Suspense } from "react"
import IdLoading from "@/app/problems/[id]/loading"


const inter = Inter({ subsets: ["latin"] })
export default function IdLayout({
                                      children,
                                    }: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <section>
      <Suspense fallback={<IdLoading/>}>
        {children}
      </Suspense>
    </section>
  )
}
