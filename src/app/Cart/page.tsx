
import axios from "axios";
import { client } from "../../../sanity/lib/client";
import Image from "next/image";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../sanity/lib/image";
import { Trash } from "lucide-react";
import { Plus, Minus } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../../../components/ui/tooltip";
import { Button } from "../../../components/ui/button";
type SanityProduct = {
  title: string;
  type: string;
  images: IImage[];
};
const fetchImages = async (id: string) => {
  const res: SanityProduct[] =
    await client.fetch(`*[_type=='dress' && _id=='${id}']{
    title,
    type,
    images,
}`);
  return res[0];
};

let quantity = 0;
let totalPrice=0;

const deleteItems = (id:any) => {
  console.log("IN");
  // const res = await axios.delete(`http://localhost:3000/api/cart?user_id=b57650a9-c4bc-4961-8e8b-c7098054bceb&product_id=${id}`)
  // console.log(res);
}

const fetchProducts = async () => {
  const res = await axios.get(
    "/api/cart?user_id=b57650a9-c4bc-4961-8e8b-c7098054bceb"
  );
  return res;
};

function Checkout(){
  console.log("Faran");
}

export default async function Cart() {
  const { data } = await fetchProducts();
  return (
    <div>
      {data.data.length ? (
        <div className="md:mx-16 md:my-32 md:p-12 mx-6">

          <div className="scroll-m-20 text-3xl font-semibold tracking-tighter md:tracking-wider transition-colors first:mt-0">
            Shopping Cart
          </div>
          <div className="flex flex-col md:flex-row">
          <div className="flex flex-col justify-between gap-16 md:w-2/4">
            {data.data.map(async (item: any, index: number) => {
              quantity = item.quantity+quantity;
              totalPrice = item.price+totalPrice
              let res: SanityProduct = await fetchImages(item.product_id);
              return (
                <div
                  key={index}
                  className="mt-8 gap-16 flex flex-col"
                  style={{ flex: "3 1" }}
                >
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="rounded-lg">
                      <Image
                        src={urlForImage(res.images[0]).url()}
                        alt="person"
                        width={230}
                        height={230}
                      />
                    </div>
                    <div className="flex flex-col justify-between w-3/4 gap-2">
                      <div className="flex justify-between">
                        <h3 className="font-light text-xl">{res.title}</h3>
                        <button className="cursor-pointer">
                          <Trash onClickCapture={deleteItems} />
                        </button>
                      </div>
                      <p className="leading-4 text-[#666] font-semibold text-sm">
                        {res.type}
                      </p>
                      <p className="font-semibold leading-5 text-sm text-[#212121]">
                        Delivery Estimation
                      </p>
                      <p className="font-semibold text-xs text-[#ffc700] leading-5">
                        5 Working days
                      </p>
                      <div className="flex justify-between">
                        <span className="text-sm font-bold leading-5 tracking-widest">
                          {item.price}$
                        </span>
                        <div>
                          <div>
                            <span>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="outline"
                                      className="w-10 rounded-full p-0"
                                    >
                                      <Plus className="h-4 w-4" />
                                      <span className="sr-only">Add</span>
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Add to library</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </span>
                            <span className="mx-3">{item.quantity}</span>
                            <span>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="outline"
                                      className="w-10 rounded-full p-0"
                                    >
                                      <Minus className="h-4 w-4" />
                                      <span className="sr-only">Add</span>
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Add to library</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="p-8 bg-[#fbfcff] flex flex-col gap-8" style={{flex:'1 1'}}>
            <h3>Order Summary</h3>
            <div className="flex justify-between gap-16">
              <p>Quantity</p>
              <span>{quantity} Product</span>
            </div>
            <div className="flex justify-between gap-16">
              <p>Sub Total</p>
              <span>${totalPrice}</span>
            </div>
            <div className="flex justify-between gap-16">
              <button onClick={Checkout} >Proceed to Checkout</button>
            </div>
          </div>
          </div>
        </div>
      ) : (
        <div className="p-16 mx-8 md:mx-16 my-4 text-center md:text-left">
          <div className="scroll-m-20 text-3xl font-semibold tracking-tighter md:tracking-wider transition-colors first:mt-0">
            Shopping Cart
          </div>
          <div className="flex justify-between gap-16 ">
            <div className="mt-8 gap-8 flex flex-col" style={{ flex: "3 1" }}>
              <div className="flex flex-col justify-center items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 1024 1024"
                  height="150"
                  width="150"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M832 312H696v-16c0-101.6-82.4-184-184-184s-184 82.4-184 184v16H192c-17.7 0-32 14.3-32 32v536c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V344c0-17.7-14.3-32-32-32zm-432-16c0-61.9 50.1-112 112-112s112 50.1 112 112v16H400v-16zm392 544H232V384h96v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h224v88c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-88h96v456z"></path>
                </svg>
                <h1>Your shopping bag is empty</h1>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
