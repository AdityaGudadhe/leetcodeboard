import Link from "next/link"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"


export default function LoginButton(){
  const pathname = usePathname();

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