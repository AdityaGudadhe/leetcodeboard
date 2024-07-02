"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function LoginNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex">
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <Link
          href="/login"
          className={cn(
            "transition-colors hover:text-foreground/80",
            pathname === "/login" ? "text-foreground" : "text-foreground/60"
          )}
        >
          Login
        </Link>
      </nav>
    </div>
  )
}