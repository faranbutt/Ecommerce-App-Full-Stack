
import axios from "axios";
import { client } from "../../../sanity/lib/client";
import { Image as IImage } from "sanity";
import CartFilled from "../../../components/hero/CartFilled";
import EmptyCart from "../../../components/hero/EmptyCart";
import { Button } from "../../../components/ui/button";
import { cookies } from "next/headers";
import CartExtra from "../../../components/hero/CartExtra";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export type SanityProduct = {
  title: string;
  type: string;
  images: IImage[];
};


const fetchUser = async () => {
  
  let user_ID: any = cookies().get('user_id')?.value;
  console.log(user_ID);
  if(!user_ID){
    user_ID = 'abc'
  }

  return {user_ID:user_ID};
};


export default async function Cart() {
  const { user_ID } = await fetchUser();

  return (
    <div>
     <CartExtra user={user_ID} />
    </div>
  );
}
