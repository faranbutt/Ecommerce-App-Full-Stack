import Image from "next/image";
import { Button } from "../ui/button";
export default function Features() {
  return (
    <div className="mt-10 md:mt-40">
      <div className="flex justify-center md:justify-end">
        <div className="w-[200px] md:w-[600px] md:mr-20">
          <h1 className="scroll-m-20 break-words text-4xl font-extrabold tracking-tight md:text-6xl">
            Unique and Authentic Vintage Designer Jewellery
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 md:px-32 pt-5 md:pt-16">
        <div className="grid grid-cols-2 justify-center items-center relative">
          <div className="text-5xl md:text-9xl absolute font-extrabold text-[#212121] z-0" style={{opacity:"0.07"}}>Different from others</div>
          <div className="z-20">
            <h4 className="scroll-m-20 text-lg md:text-xl font-semibold tracking-tight">
              Using Good Quality Materials
            </h4>
            <h4 className="leading-7 text-base md:text-lg [&:not(:first-child)]:mt-6 text-gray-500">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </h4>
          </div>
          <div className="z-20">
            <h4 className="scroll-m-20 text-lg md:text-xl font-semibold tracking-tight">
            100% Handmade Products
            </h4>
            <h4 className="leading-7 text-base md:text-lg [&:not(:first-child)]:mt-6 text-gray-500">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </h4>
          </div>
          <div className="z-20">
            <h4 className="scroll-m-20 text-lg md:text-xl  font-semibold tracking-tight">
            Modern Fashion Design
            </h4>
            <h4 className="leading-7 text-base md:text-lg [&:not(:first-child)]:mt-6 text-gray-500">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </h4>
          </div>
          <div className="z-20">
            <h4 className="scroll-m-20 text-lg md:text-xl font-semibold tracking-tight">
            Discount for Bulk Orders
            </h4>
            <h4 className="leading-7 text-base md:text-lg [&:not(:first-child)]:mt-6 text-gray-500">
              Lorem ipsum dolor sit amt, consectetur adipiscing elit.
            </h4>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 md:gap-10 mt-10 md:mt-0">
          <Image src={'/feature.webp'} alt="girl" width={500} height={500} />
          <div className="flex flex-col gap-8">
          <h4 className="scroll-m-20 text-lg md:text-xl font-light break-all tracking-tighter md:tracking-widest mx-10 md:mx-0">
          This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
          </h4>
          <Button className="p-7 w-40 mx-auto md:mx-0">See All Product</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
