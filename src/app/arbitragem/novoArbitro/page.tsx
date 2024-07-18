'use client'

import MenuBarDemo from '@/components/myComponents/menu-bar';
import NavigationBar from '@/components/myComponents/nav-bar';
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
        </div>
    </div>
  )
}

