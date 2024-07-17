
'use client'

import Image from 'next/image'

import MenuBarDemo from '../../components/myComponents/menu-bar'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from '@radix-ui/react-menubar'
import NavigationBar from '../../components/myComponents/nav-bar'

export default function ArbritragemPage(){
  return(
    <div className='flex flex-col h-screen border border-green-600'>
        <div className="flex flex-col h-20 w-full p-4 font-sans text-base shadow-md">
            <MenuBarDemo></MenuBarDemo>
        </div>  
        <div className='flex flex-row h-screen'>
            <div>
                <NavigationBar></NavigationBar>
            </div>
            <div className='border border-blue-600'>

            </div>
        </div>
    </div>
   
  )
}

