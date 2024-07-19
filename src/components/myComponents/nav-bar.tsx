import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu"


export default function NavigationBar(){
    return(
        <div className="h-full W-80 bg-[#005490]">
            <NavigationMenu className="p-10 text-white">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    </NavigationMenuItem>
                </NavigationMenuList>     
            </NavigationMenu>     
        </div>
    )
}