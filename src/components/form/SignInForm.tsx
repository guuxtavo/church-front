'use client'

import { Button, buttonVariants } from "../ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Church } from "lucide-react"
import { Separator } from "../ui/separator"
import Link from "next/link"

const signInFormSchema = z.object({
  email: z.string().min(1, 'Campo Obrigatório').email('Email Inválido'),
  password: z.string().min(1, 'Campo Obrigatório'),
})


export const SignInForm = () => {

  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmit: SubmitHandler<z.infer<typeof signInFormSchema>> = (data) => {
    console.log(data)
  }

  return (
    <div className="bg-zinc-800 h-fit rounded-md px-8 py-6 relative" >
      <Church size={20} className="absolute right-3 top-3 text-white" />
      <Form {...form} >
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-white text-md" >Email</FormLabel>
                <FormControl>
                  <Input className="text-md" placeholder="Digite seu email" {...field} />
                </FormControl>
                <FormMessage className="" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="text-left">
                <FormLabel className="text-white text-md" >Senha</FormLabel>
                <FormControl>
                  <Input className="text-md" type="password" placeholder="Digite sua senha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full bg-blue-500 hover:bg-blue-500/80 text-white text-md mt-2" type="submit">Entrar</Button>
          <Separator className="dark:bg-white" />
          <div className="flex flex-col gap-1" >
            <span className="text-md text-white semi-bold text-left" >Ainda não tem uma conta?</span>
            <Button className="text-md dark:bg-white dark:text-black dark:hover:bg-white/60" variant={'secondary'} asChild>
              <Link href={"/sign-up"}>Cadastre-se</Link>
            </Button>
          </div>

        </form>
      </Form>
    </div>
  )
}