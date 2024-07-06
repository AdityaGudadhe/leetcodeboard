"use client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"


export default function SignoutButton(){
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/signout"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/signout" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Logout
        </Link>
      </nav>
    </div>
  )
}