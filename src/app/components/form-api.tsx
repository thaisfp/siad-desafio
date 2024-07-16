import { Button } from "@/components/ui/button";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Image from "next/image";
import { Textarea } from "@/components/ui/textarea";
import { AlertDialogDemo } from "./alertDialog";

type FormData =  {
    nomeCompleto: string;
    telefone: string;
    email: string;
    segmento: string;
    ajuda: string;
};


const FormApi = () => {

    const formSchema: z.ZodType<FormData> = z.object({
        nomeCompleto: z.string().min(1, { message: "Nome Completo é obrigatório" }),
        telefone: z.string().min(1, { message: "Telefone é obrigatório" }),
        email: z.string().email({ message: "E-mail inválido" }).min(1, { message: "E-mail é obrigatório" }),
        segmento: z.string().min(1,{ message: "Segmento é obrigatório" }),
        ajuda: z.string().min(1,{ message: "Ajuda é obrigatório" }),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nomeCompleto: "",
            telefone: "",
            email: "",
            segmento: "",
            ajuda: "",
        },
    })

    function onSubmit(values: FormData) {
        console.log(values);
    }

    return (
            <form onSubmit={form.handleSubmit(onSubmit)} className="h-full shadow-xl rounded-lg space-y-1">
                <div className="flex items-center justify-center pt-10">
                    <Image src={'/logoSiad.jpg'} alt="Logo Siad" height={100} width={200} />
                </div>

                <div className="flex flex-col h-2/3 p-8 justify-between">
                    <FormField
                        control={form.control}
                        name="nomeCompleto"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nome Completo:</FormLabel>
                                <FormControl>
                                    <Input className="border border-[#A7A7A7]" placeholder="Maria da Silva" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="telefone"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Telefone:</FormLabel>
                                <FormControl>
                                    <Input className="border border-[#A7A7A7]" placeholder="(27)3700-0000" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-mail:</FormLabel>
                                <FormControl>
                                    <Input className="border border-[#A7A7A7]" placeholder="maria@gmail.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="segmento"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Segmento:</FormLabel>
                                <FormControl>
                                    <Input className="border border-[#A7A7A7]" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="ajuda"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ajuda:</FormLabel>
                                <FormControl>
                                    <Textarea className="border border-[#A7A7A7]" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                <div className="flex flex-col pt-2 pb-3 p-8 h-28 justify-between">
                    <AlertDialogDemo />
                    <Button className="bg-blue-900" type="submit">Enviar</Button>
                </div>
            </form>
    );
};

export default FormApi;
