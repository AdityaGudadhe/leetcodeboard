import * as React from "react"
import { Skeleton } from "@/components/ui/skeleton"

export default function HomeLoader() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden py-6 sm:py-12">
      <div className="relative dark:border-amber-50 dark:border px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="flex justify-around">
            <Skeleton className="p-2 rounded-md w-40 h-10"/>
          <div className="p-2" />
        </div>
      </div>
    </div>
  )
}