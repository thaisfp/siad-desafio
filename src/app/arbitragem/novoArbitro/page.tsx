'use client'

import Painel from '@/app/components/painel';
import MenuBarDemo from '@/components/myComponents/menu-bar';
import NavigationBar from '@/components/myComponents/nav-bar';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'
import FormNovoArbitro from './components/forms';

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
        <div className='h-full w-80'>
          <NavigationBar ></NavigationBar>
        </div>
        <div className='w-full h-full'>
          <div className='flex flex-row pt-1 h-1/6 justify-center items-center'>
            <div className='w-2/5'>
              <h4 className='ml-14 m-2'>home  Arbitragem Editar Membro Técnico</h4>
            </div>
            <div className='flex flex-row w-3/5 pr-20 gap-5 justify-end'>
              <Button className='w-72 m-2 gap-2 bg-[#10476E] shadow-xl h-12' >Salvar</Button>
              <Button className='w-72 m-2 gap-2 bg-[#ABACAC] shadow-xl h-12' >Cancelar</Button>
            </div>
          </div>

          <div className='h-5/6'>
            <FormNovoArbitro></FormNovoArbitro>
          </div>
        </div>
      </div>
    </div>
  )
}

