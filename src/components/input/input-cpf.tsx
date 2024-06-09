import InputMask from 'react-input-mask'
import { cn } from '@/lib/utils';

interface CPFinputProps extends React.InputHTMLAttributes<HTMLInputElement> {
   value: string,
   onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CPFInput = ({ value, onChange, className, ...rest }: CPFinputProps) => {
   return (
      <InputMask
         mask="999.999.999-99"
         value={value}
         onChange={onChange}
         {...rest}
         className={cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-md ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", className)}
      />
   )
}