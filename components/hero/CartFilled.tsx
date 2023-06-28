import CartProducts from "./CartProducts";
import CartCheckout from "./CartCheckout";
// import Image from "next/image";
// import { Button } from "../ui/button"
// import { urlForImage } from "../../sanity/lib/image";

import { SanityProduct } from "@/app/Cart/page";
import { client } from "../../sanity/lib/client";
// import Image from "next/image";
// import axios from "axios";
// import { urlForImage } from "../../sanity/lib/image";
// import { Trash } from "lucide-react";
// import { Tooltip,
//     TooltipContent,
//     TooltipProvider,
//     TooltipTrigger,
// } from "../ui/tooltip";
// import { Button } from "../ui/button";
// import { Plus,Minus } from "lucide-react";

// let quantity = 0;
// let totalPrice=0;

const fetchImages = async (id: string) => {
    const res: SanityProduct[] =
      await client.fetch(`*[_type=='dress' && _id=='${id}']{
      title,
      type,
      images,
  }`);
    return res[0];
  };

// const deleteItems = () => {
//     console.log("DELETED ITEMS");
// }

// export default function CartFilled({data}:{data:any}) {
//   return (
//     <div className="md:mx-16 md:my-32 md:p-12 mx-6">

//           <div className="scroll-m-20 text-3xl font-semibold tracking-tighter md:tracking-wider transition-colors first:mt-0">
//             Shopping Cart
//           </div>
//           <div className="flex flex-col md:flex-row">
//           <div className="flex flex-col justify-between gap-16 md:w-2/4">
//             {data.data.map(async (item: any, index: number) => {
//               quantity = item.quantity+quantity;
//               totalPrice = item.price+totalPrice
//               let res: SanityProduct = await fetchImages(item.product_id);
//               return (
//                 <div
//                   key={index}
//                   className="mt-8 gap-16 flex flex-col"
//                   style={{ flex: "3 1" }}
//                 >
//                   <div className="flex flex-col md:flex-row gap-8">
//                     <div className="rounded-lg">
//                       <Image
//                         src={urlForImage(res.images[0]).url()}
//                         alt="person"
//                         width={230}
//                         height={230}
//                       />
//                     </div>
//                     <div className="flex flex-col justify-between w-3/4 gap-2">
//                       <div className="flex justify-between">
//                         <h3 className="font-light text-xl">{res.title}</h3>
//                         <button className="cursor-pointer">
//                           <Trash onClickCapture={deleteItems} />
//                         </button>
//                       </div>
//                       <p className="leading-4 text-[#666] font-semibold text-sm">
//                         {res.type}
//                       </p>
//                       <p className="font-semibold leading-5 text-sm text-[#212121]">
//                         Delivery Estimation
//                       </p>
//                       <p className="font-semibold text-xs text-[#ffc700] leading-5">
//                         5 Working days
//                       </p>
//                       <div className="flex justify-between">
//                         <span className="text-sm font-bold leading-5 tracking-widest">
//                           {item.price}$
//                         </span>
//                         <div>
//                           <div>
//                             <span>
//                               <TooltipProvider>
//                                 <Tooltip>
//                                   <TooltipTrigger asChild>
//                                     <Button
//                                       variant="outline"
//                                       className="w-10 rounded-full p-0"
//                                     >
//                                       <Plus className="h-4 w-4" />
//                                       <span className="sr-only">Add</span>
//                                     </Button>
//                                   </TooltipTrigger>
//                                   <TooltipContent>
//                                     <p>Add to library</p>
//                                   </TooltipContent>
//                                 </Tooltip>
//                               </TooltipProvider>
//                             </span>
//                             <span className="mx-3">{item.quantity}</span>
//                             <span>
//                               <TooltipProvider>
//                                 <Tooltip>
//                                   <TooltipTrigger asChild>
//                                     <Button
//                                       variant="outline"
//                                       className="w-10 rounded-full p-0"
//                                     >
//                                       <Minus className="h-4 w-4" />
//                                       <span className="sr-only">Add</span>
//                                     </Button>
//                                   </TooltipTrigger>
//                                   <TooltipContent>
//                                     <p>Add to library</p>
//                                   </TooltipContent>
//                                 </Tooltip>
//                               </TooltipProvider>
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//           <div className="p-8 bg-[#fbfcff] flex flex-col gap-8" style={{flex:'1 1'}}>
//             <h3>Order Summary</h3>
//             <div className="flex justify-between gap-16">
//               <p>Quantity</p>
//               <span>{quantity} Product</span>
//             </div>
//             <div className="flex justify-between gap-16">
//               <p>Sub Total</p>
//               <span>${totalPrice}</span>
//             </div>
//             <div className="flex justify-between gap-16">
//               <Button>Proceed to Checkout</Button>
//             </div>
//           </div>
//           </div>
//         </div>
//   )
// }



export default function CartFilled({ data,userID }: { data: any,userID:any }) {
  let totalQuantity = 0;
  let totalPrice = 0;
  return (
    <div className="p-20">
      <div className="scroll-m-20 text-3xl font-semibold tracking-tighter md:tracking-wider transition-colors first:mt-0">
        Shopping Cart
      </div>
      <div className="flex justify-center items-center">
        {data.data.map(async (item: any, index: number) => {
          totalQuantity = item.quantity + totalQuantity;
          totalPrice = item.price + totalPrice;
          const res = await fetchImages(item.product_id);
          return (
            <div key={index}>
              <CartProducts item={item} res={res} userID={userID} />
            </div>
          );
        })}
        <CartCheckout quantity={totalQuantity} price={totalPrice} />
      </div>
    </div>
  );
}
