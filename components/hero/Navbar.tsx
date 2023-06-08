'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/navigation-menu";
import { ShoppingCart, Search, ShoppingCartIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Menu, XCircle } from "react-feather"; 
import { Button } from "../ui/button";
import Link from "next/link";


export default function Navbar() {
  const [menuOpen, setisMenuOpen] = useState(false)
  const handleMenuToggle = () => {
    setisMenuOpen(!menuOpen);
  }
  return (
    <nav className="flex p-10 gap-x-28 justify-center items-center">
        <div className="ml-4">
           <Link href={'/'}><img src="/Logo.webp" alt="logo" className=""/></Link> 
        </div> 
      <div className="hidden sm:block">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger><Link href={'/Female'}>Female</Link></NavigationMenuTrigger>
            <NavigationMenuTrigger><Link href={'/Male'}>Male</Link></NavigationMenuTrigger>
            <NavigationMenuTrigger>Kids</NavigationMenuTrigger>
            <NavigationMenuTrigger>All Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      </div>
      <div className="hidden sm:flex md:flex lg:flex gap-x-2 border-2 items-center h-7 rounded-lg">
        <Search />
        <input type="text" placeholder={`What are you looking for`} className="border-none"/>
      </div>
      <div className="hidden sm:block rounded-full p-4 bg-gray-100 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300">
        <ShoppingCartIcon className="w-7 h-7" />
      </div>

      <div className="lg:hidden">
        <button className="flex" onClick={handleMenuToggle}>
          {menuOpen ? (<XCircle />) : (<Menu />)}
        </button>
        {menuOpen && <div>
          <div className="bg-white w-full absolute top-0 left-0 h-screen">
            <div className="flex mx-4 mt-10 justify-between items-center">
              <img src="/Logo.webp" alt="logo" className="h-5" />
              <Button onClick={handleMenuToggle} className="bg-black">
                <XCircle />
              </Button>
            </div>
            <div>
            <div className="flex justify-center items-center p-5">
              <div className="rounded-full bg-gray-100 p-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300">
              <ShoppingCartIcon className="" />
              </div>
            </div>  
            </div>
            <div className="items-center justify-center mt-10">
            <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="flex flex-col gap-3">
            <NavigationMenuTrigger>Female</NavigationMenuTrigger>
            <NavigationMenuTrigger>Male</NavigationMenuTrigger>
            <NavigationMenuTrigger>Kids</NavigationMenuTrigger>
            <NavigationMenuTrigger>All Products</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>              
            </div>
          </div>
          </div>}
      </div>
    </nav>
  );
}
