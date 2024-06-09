'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { Church } from "lucide-react"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"
import { DatePicker } from "../date/DatePicker"
import { CPFInput } from "../input/input-cpf"
import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"


const signUpFormSchema = z.object({
   name: z.string().min(1, 'Campo Obrigatório').min(3, 'Mínimo 3 letras'),
   cpf: z.string().min(1, 'Campo Obrigatório'),
   dateOfBirth: z.string(),
   email: z.string().min(1, 'Campo Obrigatório').email('Email Inválido'),
   password: z.string().min(1, 'Campo Obrigatório'),
   confirmPassword: z.string().min(1, 'Campo Obrigatório')
}).refine(data => data.password === data.confirmPassword, {
   message: 'As senhas devem ser iguais',
   path: ["confirmPassword"]
});

export const SignUpForm = () => {

   const form = useForm<z.infer<typeof signUpFormSchema>>({
      resolver: zodResolver(signUpFormSchema),
      defaultValues: {
         name: '',
         cpf: '',
         email: '',
         password: '',
         confirmPassword: ''
      }
   })

   const onSubmit: SubmitHandler<z.infer<typeof signUpFormSchema>> = (data) => {
      console.log("Chegou no submithandler :" + data)
   }

   return (
      <div className="bg-zinc-800 h-fit rounded-md px-8 py-6 relative" >
         <Church size={20} className="absolute right-3 top-3 text-white dark:text-black" />
         <Form {...form} >
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-x-4 gap-y-4">
               <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                     <FormItem className="text-left">
                        <FormLabel className="text-white text-md" >Nome</FormLabel>
                        <FormControl>
                           <Input className="text-md" placeholder="Digite seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                     <FormItem className="text-left">
                        <FormLabel className="text-white text-md" >Email</FormLabel>
                        <FormControl>
                           <Input className="text-md" type="email" placeholder="Digite seu email" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="cpf"
                  render={({ field }) => (
                     <FormItem className="text-left">
                        <FormLabel className="text-white text-md" >CPF</FormLabel>
                        <FormControl>
                           <Controller
                              control={form.control}
                              name="cpf"
                              render={({ field }) => (
                                 <CPFInput
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder="Digite seu CPF"
                                 />
                              )}
                           />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />
               <FormField
                  control={form.control}
                  name="dateOfBirth"
                  render={({ field }) => (
                     <FormItem className="text-left">
                        <FormLabel className="text-white text-md" >Data Nascimento</FormLabel>
                        <FormControl>
                           <DatePicker />
                        </FormControl>
                        <FormMessage />
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
               <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                     <FormItem className="text-left">
                        <FormLabel className="text-white text-md" >Confirmar Senha</FormLabel>
                        <FormControl>
                           <Input className="text-md" type="password" placeholder="Confirme sua senha" {...field} />
                        </FormControl>
                        <FormMessage />
                     </FormItem>
                  )}
               />

               <div className="col-span-2 space-y-2 mt-4" >
                  {/* <Separator className="dark:bg-white" /> */}
                  <Button className="w-full bg-blue-500 hover:bg-blue-500/80 text-white text-md mt-2" type="submit">Cadastrar</Button>
                  
               </div>

            </form>

         </Form>
      </div>
   )
}