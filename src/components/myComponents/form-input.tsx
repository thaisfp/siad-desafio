import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"

interface InputProps{
    type: string,
    placeholder: string,
    label: string,
}

export function InputDemo( {type, placeholder, label} : InputProps) {

  return (
    <>
        <Label>{label}</Label>
        <Input type={type} placeholder={placeholder} />
    </>
  )
}
