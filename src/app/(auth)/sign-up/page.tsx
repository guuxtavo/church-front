import { SignUpForm } from "@/components/form/SignUpForm";

const SignUp = () => {
   return (
      <div className="h-full w-full flex justify-center" >
         <div className="max-w-80 lg:min-w-[420px] text-center mt-20 2xl:mt-40" >
            <span className="text-3xl font-semibold block tracking-wider mb-5">Realize seu cadastro</span>
            <SignUpForm />
         </div>
      </div>
   )
}

export default SignUp;