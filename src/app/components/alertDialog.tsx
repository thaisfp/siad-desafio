"use client";
import React, { useState } from "react";
import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import App from "./icon-search"
import { SeparatorDemo } from "./separator"
import { ButtonGhost } from "./button-close"
  
export function AlertDialogDemo() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
    return (
      <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
          <Button variant="outline" className="bg-gray-600 text-white font-sans" onClick={() => setOpen(true)}>Receber Dados</Button>
        </AlertDialogTrigger>
        <AlertDialogContent className="h-96">
          <AlertDialogHeader>
            <div className="flex flex-col">
                <div className="pl-10 ml-96 -mb-10">
                  <ButtonGhost onClick = {handleClose}/>
                </div>
                <div>                
                    <AlertDialogTitle>Dados</AlertDialogTitle>
                </div>
                
            </div>
            <AlertDialogDescription className="h-5/6">
              <div className="flex flex-col justify-between text-black h-full">
                <label htmlFor="email">Informe o e-mail: </label>
                <div className="flex flex-row">
                    <input type="text" className='border border-gray-400 rounded-md p-1 w-96 mr-5' /> 
                    <App/>
                </div>
                <SeparatorDemo/>
                <div>Fulana de Tal</div>
                <div>
                    <label htmlFor="segmento">Segmento: </label>
                    Tal Tal
                </div>
                <div className="flex flex-col h-28 justify-between">
                    <label htmlFor="mensagem">Mensagem: </label>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dolorum commodi. 
                    Labore assumenda quia necessitatibus ipsam dolorem dignissimos temporibus fuga quisquam 
                    quas numquam blanditiis eum delectus et, laboriosam fugit nemo.
                </div>
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    )
  }
  