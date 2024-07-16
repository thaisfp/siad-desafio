/* eslint-disable react/jsx-no-undef */
import Image from 'next/image'
import FormHome from './components/form-home-page'
import FormApi from './components/form-api'

export default function HomePage(){
  return(
    <div className="flex flex-row w-full h-screen p-4 font-sans text-base">
        <div className="w-3/5 h-full mr-4">
          <Image 
            src = "/imagemTelaPrincipal.jpg"
            alt="Imagem Home Page"
            className='w-full max-h-full'
            height={900}
            width={900}
          />
        </div>

        <div className="w-2/5 h-full justify-between">
          <FormApi/>
        </div>
    </div>
  )
}

