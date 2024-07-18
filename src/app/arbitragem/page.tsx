'use client'

import MenuBarDemo from '../../components/myComponents/menu-bar'
import NavigationBar from '../../components/myComponents/nav-bar'
import SelectModalidade from './components/selectModalidades'
import { Button } from '@/components/ui/button'
import { Printer, Search, Trash2, UserPen, UserPlus } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { TablePadrao } from '../components/table'
import { useRouter } from 'next/navigation'

export default function ArbritragemPage(){

  const router = useRouter();

  const passarRota = () => {
    router.push('/arbitragem/novoArbitro');
  }

  return(
    <div className='flex flex-col h-screen'>
        <div className="flex flex-col h-20 w-full p-4 font-sans text-base shadow-lg">
            <MenuBarDemo></MenuBarDemo>
        </div>  
        <div className='flex flex-row h-screen'>
            <div className='h-full w-72'>
              <NavigationBar ></NavigationBar>
            </div>

            <div className='w-full h-full'>
              <div className='w-full h-1/6 mt-3 bg-blue-50'>
                  <h1 className='text-2xl p-3 pl-10'>Painel Admistrativo</h1>
                  <h4 className='pl-10 text-gray-600'>Bem-vindo ao Painel da Plataforma SIAD Sport</h4>
              </div>

              <div className='h-4/5 m-3'>
                <div className='flex flex-col h-full'>  
                  <h4>home  Arbitragem</h4>

                  <div className='flex flex-row gap-72'>
                    <SelectModalidade></SelectModalidade>
                    <Button className='m-2 gap-2 bg-[#10476E] shadow-xl h-3/5' onClick={passarRota}><UserPlus/>Novo Membro Técnico</Button>
                  </div> 
                  <div className='flex flex-col h-full mt-10 pl-10'>

                    <div className='flex flex-row gap-64 w-full'>
                      <div className='w-2/3'>
                        <Input placeholder='Pesquise por nome' className='w-2/3 rounded-lg'></Input>
                      </div>

                      <div className='flex flex-row gap-2'>
                        <Button className='bg-transparent hover:bg-blue-50'><UserPen className='text-[#10476E] size-8'/></Button>
                        <Button className='bg-transparent hover:bg-blue-50'><Printer className='text-[#10476E] size-8' /></Button>
                        <Button className='bg-transparent hover:bg-blue-50'><Trash2 className='text-[#10476E] size-8' /></Button>    
                      </div>
                    </div>

                    <div>
                      <TablePadrao></TablePadrao>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
   
  )
}

