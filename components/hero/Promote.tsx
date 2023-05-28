import Image from "next/image";
import { Button } from "../ui/button";

export default function Promote() {
  return (
    <div className="flex flex-col justify-center items-center m-10">
      <div>
        <div className="flex justify-center font-bold text-blue-700 mb-5">
          PROMOTIONS
        </div>
        <h2 className="scroll-m-20 border-b pb-2 text-2xl md:text-4xl font-semibold tracking-tight transition-colors first:mt-0">
          Our Promotions Events{" "}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:p-10 md:bg-gradient-to-b from-orange-100 to-orange-400">
        <div className="md:mx-20">
            <div className="flex flex-col md:flex-row bg-[#d6d6d8] justify-center items-center px-10 py-5 w-[350px] md:w-[600px]">
                <div className="flex flex-col justify-center items-center">
                    <div><h3 className="scroll-m-20 md:text-2xl font-semibold tracking-tight">GET UP TO</h3><span><h2 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight transition-colors first:mt-0">60%</h2></span></div>
                    <div><h4 className="leading-7 text-lg [&:not(:first-child)]:mt-6 text-black-100">For the summer season</h4></div>
                </div>
                <img src='/promote1.webp' alt="girl"/>
            </div>
            <div className="bg-[#212121] mt-5 flex flex-col justify-center items-center w-[350px] md:w-[600px]">
                <div className="m-10"><h2 className="scroll-m-20 pb-2 text-5xl font-semibold tracking-tight transition-colors first:mt-0 text-white">GET 30% OFF</h2></div>
                <div className="text-white">USE PROMO CODE</div>
                <Button className="bg-[#474747] mb-10">DINEWEEKENDSALE</Button>
            </div>
        </div>
        <div className="bg-[#efe1c7] md:mx-[250px] w-[350px] md:w-[300px] flex flex-col justify-center items-center mt-6 md:mt-0">
          <h4 className="leading-7 text-lg [&:not(:first-child)]:mt-6 text-black-100">Flex Sweatshirt</h4>
          <h4 className="leading-7 text-lg [&:not(:first-child)]:mt-1 text-black-100"><s>$100.00</s> <span className="font-bold">$75.00</span></h4>
          <img src="/promote2.webp" alt="person2"/>
        </div>
        <div className="bg-[#d7d7d9] md:ml-[120px] w-[350px] md:w-[300px] flex flex-col justify-center items-center mt-6 md:mt-0">
          <h4 className="leading-7 text-lg [&:not(:first-child)]:mt-6 text-black-100">Flex Push Button Bomber</h4>
          <h4 className="leading-7 text-lg [&:not(:first-child)]:mt-1 text-black-100"><s>$225.00</s> <span className="font-bold">$190.00</span></h4>
          <img src="/promote3.webp" alt="person3"/>
        </div>

      </div>
    </div>
  );
}
