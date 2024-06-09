import { SignInForm } from "@/components/form/SignInForm";

const SignIn = () => {
   return (
      <div className="h-full w-full px-2 flex justify-center items-baseline " >
         <div className="min-w-[350px] md:min-w-[420px] text-center mt-40 animate-slideRight" >
            <span className="text-3xl font-semibold block tracking-wider mb-5">Acesse o nosso Sistema</span>
            <SignInForm />
         </div>

      </div>
   )
}

export default SignIn;