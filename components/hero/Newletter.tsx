import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function Newletter() {
  return (
    <div className="flex justify-center relative z-10 items-center flex-col text-center px-5 md:px-40 py-20 md:py-32">
      <div className="text-6xl md:text-9xl mt-10 tracking-wide text-[#f2f3f7] absolute font-extrabold z-0">
        Newsletter
      </div>
      <h2 className="scroll-m-20 pb-2 text-2xl md:text-4xl font-semibold transition-colors first:mt-0 z-20 tracking-wide">
        Subscribe Our Newsletter
      </h2>
      <p className="flex text-lg font-light z-20 tracking-wide">
        Get the latest information and promo offers directly
      </p>
      <form className="z-20">
        <div className="flex w-full max-w-sm items-center space-x-3 pt-5">
          <Input type="email" placeholder="Input Email Address" className="flex border border-gray-900" />
          <Button type="submit" className="px-[10px] py-5 w-40">Get Started</Button>
        </div>
      </form>
    </div>
  );
}
