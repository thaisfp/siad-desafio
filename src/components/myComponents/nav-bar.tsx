import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu"


export default function NavigationBar(){
    return(
        <div className="h-full w-64 bg-blue-800">
            <NavigationMenu>
                {/* <NavigationMenuList>
                    <NavigationMenuItem>
                    <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavigationMenuLink>Link</NavigationMenuLink>
                    </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList> */}
            </NavigationMenu>
                    
        </div>
    )
}