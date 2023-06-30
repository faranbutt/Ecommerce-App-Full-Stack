'use client'
import Image from "next/image";
import { urlForImage } from "../../sanity/lib/image";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Plus, Minus } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { CounterActions } from "@/store/slice/counterSlice";
import { toast } from "react-hot-toast";

export default function CartProducts({ item, res, userID }: { item: any; res: any; userID:any }) {
  console.log("res.images",res)
  const dispatch = useDispatch();
  const router = useRouter();
  const fetchProduct =async (id:string,quantity:number) => {
    const res = await axios.delete(`/api/cart?user_id=${userID}&product_id=${id}`);
    console.log(res);
    dispatch(CounterActions.DeletefromCart(quantity))
    toast.error('Product Deleted');
    router.refresh();
    console.log("Faran")
  };

  return (
    <>
    
    <div className="mt-8 gap-16 flex flex-col" style={{ flex: "3 1" }}>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="rounded-lg">
          <Image
            src={urlForImage(res.image).url()}
            alt="person"
            width={230}
            height={230}
          />
        </div>
        <div className="flex flex-col justify-between w-3/4 gap-2">
          <div className="flex justify-between">
            <h3 className="font-light text-xl">{res.name}</h3>
            <Button onClick={()=>fetchProduct(item.product_id,item.quantity)}>
              <Trash />
            </Button>
          </div>
          <p className="leading-4 text-[#666] font-semibold text-sm">
            {res.description}
          </p>
          <p className="font-semibold leading-5 text-sm text-[#212121] ">
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
</>
  );
}
