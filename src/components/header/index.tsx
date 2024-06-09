import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import logo from '@/../public/brown-minimalist-church-logo.png'
import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "../theme/theme-toggle"

export const Header = () => {
   return (
      <header className="w-full max-h-[75px] bg-zinc-200 py-2 shadow-md dark:bg-zinc-800" >
         <div className="lg:container flex items-center justify-between" >
            <Link href={'/'} >
               <Image
                  priority={true}
                  quality={100}
                  className="h-14 w-14 bg-white rounded-full" alt="logo da bíblia" src={logo} />
            </Link>

            <div className="flex gap-4" >
               <ThemeToggle />
               <Link className={cn(buttonVariants(), 'w-24 text-md tracking-wide dark:hover:bg-white/80')} href={"/sign-in"}>Entrar</Link>
            </div>

         </div>

      </header>
   )
}