'use client'

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"

export default function Painel(props: { name: string }){
    return (
        <div className='w-full h-28 mt-3 bg-blue-50'>
            <h1 className='text-2xl p-3 pl-10'>Painel {props.name}</h1>
            <h4 className='pl-10 text-gray-600'>Bem-vindo ao Painel da Plataforma SIAD Sport</h4>
        </div>
    )
}