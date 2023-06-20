
import axios from "axios";
import { client } from "../../../sanity/lib/client";
import { Image as IImage } from "sanity";
import CartFilled from "../../../components/hero/CartFilled";
import EmptyCart from "../../../components/hero/EmptyCart";
import { Button } from "../../../components/ui/button";
import { cookies } from "next/headers";
export type SanityProduct = {
  title: string;
  type: string;
  images: IImage[];
};


const fetchProducts = async () => {
  let user_ID: any = cookies().get('user_id')?.value;
  console.log(user_ID);
  if(!user_ID){
    user_ID = 'abc'
  }
  const res = await axios.get(`https://dine-three.vercel.app/api/cart?user_id=${user_ID}`);
  return {res:res,user_ID:user_ID};
};


export default async function Cart() {
  const { res,user_ID } = await fetchProducts();
  const { data } = res;
  return (
    <div>
      {data.data.length ? (
        <CartFilled data={data} userID = {user_ID} />
        
      ) : (
        <EmptyCart  />
      )}
    </div>
  );
}
