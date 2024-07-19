'use client'

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

type FormData =  {
    nome: string;
    numeroInscricao: string;
    email: string;
    cep: string;
    dataCadastro: string;
    dataValidade: string;
    endereco: string;
    bairro: string;
    cidade: string;
    numero: string;
    uf: string;
    celular: string;
    dataNascimento: string;
    modalidade: string;
    tipoSanguineo: string;
    naturalidade: string;
    cpf: string;
    rg: string;
    funcao: string;
    foto: string;

};

const FormNovoArbitro = () => {

    const formSchema: z.ZodType<FormData> = z.object({
        nome: z.string().min(1, { message: "Nome Completo é obrigatório" }),
        numeroInscricao: z.string().min(1, { message: "Telefone é obrigatório" }),
        email: z.string().email({ message: "E-mail inválido" }).min(1, { message: "E-mail é obrigatório" }),
        cep: z.string().min(1,{ message: "Segmento é obrigatório" }),
        dataCadastro: z.string().min(1,{ message: "Ajuda é obrigatório" }),
        dataValidade: z.string().min(1,{ message: "Ajuda é obrigatório" }),
        endereco: z.string().min(1,{ message: "Ajuda é obrigatório" }),
        bairro: z.string().min(1,{ message: "Ajuda é obrigatório" }),
        cidade: z.string().min(1,{ message: "Ajuda é obrigatório" }),
        numero: z.string().min(1,{ message: "Ajuda é obrigatório" }),
        uf: z.string().min(1,{ message: "Ajuda é obrigatório" }),
        celular: z.string().min(1,{ message: "Ajuda é obrigatório" }),
        dataNascimento: z.string().min(1,{ message: "Ajuda é obrigatório" }),
        modalidade: z.string().min(1,{ message: "Ajuda é obrigatório" }),
        tipoSanguineo: z.string().min(1,{ message: "Ajuda é obrigatório" }),
        naturalidade: z.string().min(1,{ message: "Ajuda é obrigatório" }),
        cpf: z.string().min(1,{ message: "Ajuda é obrigatório" }),
        rg: z.string().min(1,{ message: "Ajuda é obrigatório" }),
        funcao: z.string().min(1,{ message: "Ajuda é obrigatório" }),
        foto: z.string().min(1,{ message: "Ajuda é obrigatório" }),

    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            nome: "",
            numeroInscricao: "",
            email: "",
            dataCadastro: "",
            dataValidade: "",
            endereco: "",
            bairro: "",
            cidade: "",
            numero: "",
            uf: "",
            celular: "",
            dataNascimento: "",
            modalidade: "",
            tipoSanguineo:"",
            naturalidade: "",
            cpf: "",
            rg: "",
            funcao: "",
            foto: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return(
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="h-full pl-10 pr-20">
                <div className="w-full h-full">
                    <div className="flex flex-row h-3/5 ">
                        <div className="w-3/6 pr-7 space-y-3 pt-2">
                            <FormField
                                control={form.control}
                                name="numeroInscricao"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nº de Inscrição</FormLabel>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7] w-5/6" placeholder="123456789" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            
                            <FormField
                                control={form.control}
                                name="nome"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nome</FormLabel>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7]" placeholder="Adelmo Soares" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="endereco"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Endereco</FormLabel>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7]" placeholder="Rua das Flores" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="cep"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>CEP</FormLabel>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7]" placeholder="29700-045" {...field} />
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
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7]" placeholder="usuario1@gmail.com" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className=" w-3/6 pr-7 pt-20 space-y-4">
                            <div className="flex flex-row gap-20">
                                <FormField
                                control={form.control}
                                name="dataCadastro"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Data do Cadastro</FormLabel>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7] " placeholder="12/02/2024" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />

                                <FormField
                                    control={form.control}
                                    name="dataValidade"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Data Validade</FormLabel>
                                            <FormControl>
                                                <Input className="border border-[#A7A7A7] " placeholder="12/02/2025" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>

                            <FormField
                                control={form.control}
                                name="bairro"
                                render={({ field }) => (
                                    <FormItem >
                                        <FormLabel>Bairro</FormLabel>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7]" placeholder="Moacir Antonio" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="cidade"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Cidade</FormLabel>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7]" placeholder="Colatina" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="celular"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Celular</FormLabel>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7]" placeholder="(27)9 984578-6312" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <div className="flex flex-col w-40 gap-5">
                            <div>
                                <FormField
                                control={form.control}
                                name="foto"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7] h-44" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />
                            </div>

                            <div>
                                <FormField
                                control={form.control}
                                name="numero"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Nº</FormLabel>
                                        <FormControl>
                                            <Input className="border border-[#A7A7A7]" placeholder="1425" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                                />

                                <FormField
                                    control={form.control}
                                    name="uf"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>UF</FormLabel>
                                            <FormControl>
                                                <Input className="border border-[#A7A7A7]" placeholder="ES" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="dataNascimento"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Data Nascimento</FormLabel>
                                            <FormControl>
                                                <Input className="border border-[#A7A7A7]" placeholder="12/05/2001" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="h-2/5">
                            
                    </div>
                </div>
                {/* <div className="flex flex-row w-full mr-40 border border-red-700">
                    <div className="2/5 border border-green-700">
                        
                    </div>

                    <div className="2/5">

                    </div>

                </div>
                <div className="1/3">

                </div>
                     */}

                    {/* <FormField
                        control={form.control}
                        name="tipoSanguineo"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tipo Sanguíneo</FormLabel>
                                <FormControl>
                                    <Input className="border border-[#A7A7A7] w-2/5" placeholder="A-" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="naturalidade"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Natural de</FormLabel>
                                <FormControl>
                                    <Input className="border border-[#A7A7A7] w-2/5" placeholder="Colatina" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    

                    
                    <FormField
                        control={form.control}
                        name="funcao"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Função</FormLabel>
                                <FormControl>
                                <div>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Selecione um segmento" />
                                        </SelectTrigger>
                                        <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="arb">Árbitro</SelectItem>

                                        </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="modalidade"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Modalidade</FormLabel>
                                <FormControl>
                                <div>
                                    <Select>
                                        <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Selecione um segmento" />
                                        </SelectTrigger>
                                        <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="fut">Futebol</SelectItem>

                                        </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="cpf"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>CPF</FormLabel>
                                <FormControl>
                                    <Input className="border border-[#A7A7A7] w-2/5" placeholder="446.841.530-45" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="rg"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>RG</FormLabel>
                                <FormControl>
                                    <Input className="border border-[#A7A7A7] w-2/5" placeholder="10.879.534-2" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    /> */}
            </form>
        </Form>
    )
}

export default FormNovoArbitro;