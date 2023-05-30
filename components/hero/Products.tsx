import Image from "next/image";


export default function Products() {
  return (
    <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center mb-20">
            <div className="font-bold text-blue-700 mb-5">Products</div>
            <div className="scroll-m-20 pb-2 text-2xl md:text-4xl font-semibold tracking-wide transition-colors first:mt-0">Check What We Have</div>
        </div>
        <div className="flex">
            <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
                <img src="/product1.png" alt="lady1" />
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Brushed Raglan Sweatshirt</h4>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">$195</h4>
            </div>
            <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
                <img src="/product2.png" alt="lady1" className="h-[395px]"/>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Cameryn Sash Tie Dress</h4>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">$545</h4>
            </div>
            <div className="flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300">
                <img src="/product3.png" alt="lady1" />
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">Flex Sweatshirt</h4>
                <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">$175</h4>
            </div>
            
        </div>
    </div>
  )
}
