import Image from "next/image";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

export function TypographyH1() {
  return (
    <div className="flex p-10 justify-center items-center mx-10">
      <div className="p-15">
        <div className="ml-10">
          <Button type="button" className="flex bg-blue-100">
            <div className="text-lg text-blue-700">Sale 70%</div>
          </Button>
        </div>
        <div className="p-5">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            <div className="text-5xl">An Industrial Take on Streetwear</div>
          </h1>
        </div>
        <div className="pb-10 px-5">
          <h4 className="leading-7 text-lg [&:not(:first-child)]:mt-6 text-gray-500">
            Anyone can beat you but no one can beat your outfit as long as you
            wear Dine outfits.
          </h4>
        </div>
        <div className="px-10">
          <Button className="p-10 m-4">
            <ShoppingCart className="mr-5 h-10 w-10" />
            <span>
              <p className="leading-7 [&:not(:first-child)]:mt-6">
                Start Shopping
              </p>
            </span>
          </Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 m-5">
          <Image src={"/brand1.webp"} alt="brand1" width={100} height={100} />
          <Image src={"/brand2.webp"} alt="brand1" width={100} height={100} />
          <Image src={"/brand3.webp"} alt="brand1" width={100} height={100} />
          <Image src={"/brand4.webp"} alt="brand1" width={100} height={100} />
        </div>
      </div>

      <div className="sm:hidden md:hidden lg:flex">
        <div className="bg-pink-100 rounded-full">
          <Image src={"/header.webp"} alt="girl" width={900} height={900} />
        </div>
      </div>
    </div>
  );
}
