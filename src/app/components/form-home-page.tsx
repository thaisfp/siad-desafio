import Image from "next/image"
import { InputDemo } from "./form-input"
import { FormSelectScrollable } from "./form-select"
import { Textarea } from "@/components/ui/textarea"
import { AlertDialogDemo } from "./alertDialog"
import { Button } from "@/components/ui/button"


export default function FormHome() {

  return(
    <form className="h-full shadow-xl rounded-lg">

      <div className="flex items-center justify-center pt-10">
        <Image 
          src={'/logoSiad.jpg'}
          alt="Logo Siad" 
          height={100} 
          width={200} 
        />
      </div>

      <div className="flex flex-col h-2/3 p-8 justify-between">
        <InputDemo  type = "text" placeholder = "Maria da Silva" label = "Nome Completo: "/>
        <InputDemo  type = "text" placeholder = "(27)3700-0000" label = "Telefone: "/>
        <InputDemo  type = "text" placeholder = "maria@gmail.com" label = "E-mail: "/>
        <FormSelectScrollable/>
        <Textarea/>  
           
      </div>

      <div className="flex flex-col pt-2 pb-3 p-8 h-28 justify-between">
        <AlertDialogDemo/>
        <Button className="bg-blue-900">Enviar</Button> 
      </div>  
      
    </form>
  )
  
}