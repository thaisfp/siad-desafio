
import {Menubar} from "@radix-ui/react-menubar"
import Image from "next/image"

export default function MenuBarDemo(){
    return(
        <Menubar className="flex flex-row ">
            <div className="flex justify-center items-center ">
                <Image 
                    src = "/logoSiad.jpg"
                    alt="Imagem Home Page"
                    height={150}
                    width={150}
                />
            </div>
        </Menubar>  
    )
}