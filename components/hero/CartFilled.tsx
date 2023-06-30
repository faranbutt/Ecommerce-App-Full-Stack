'use client'
import React, { useEffect, useState } from 'react';
import CartProducts from "./CartProducts";
import CartCheckout from "./CartCheckout";
import { SanityProduct } from "@/app/Cart/page";
import { client } from "../../sanity/lib/client";

const fetchImages = async (id: string) => {
  const res: SanityProduct[] = await client.fetch(`*[_type=='dress' && _id=='${id}']{
    title,
    type,
    images,
  }`);
  return res[0];
};

type ItemsCo = {
  quantity: number;
  price: number;
  name: string;
  description?: string | undefined;
  image: any;
};

export default function CartFilled({ data, userID }: { data: any; userID: any }) {
  const [items, setItems] = useState<ItemsCo[]>([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      let quantity = 0;
      let price = 0;
      const itemsData: ItemsCo[] = [];

      for (const item of data.data) {
        const res = await fetchImages(item.product_id);
        const productDetails = {
          quantity: item.quantity,
          price: item.price,
          name: res.title,
          description: res.type,
          image: res.images[0],
        };
        itemsData.push(productDetails);
        quantity += item.quantity;
        price += item.price;
      }

      setItems(itemsData);
      setTotalQuantity(quantity);
      setTotalPrice(price);
    };

    fetchData();
  }, [data.data]);

  return (
    <div className="p-10 md:p-20">
      <div className="scroll-m-20 text-3xl font-semibold tracking-tighter md:tracking-wider transition-colors first:mt-0">
        Shopping Cart
      </div>
      <div className="flex flex-col md:flex-row justify-center ">
       <div className='flex flex-col'> 
        {items.length > 0 &&
          data.data.map((item: any, index: number) => {
            console.log("II",items)
            return(
            <div key={index}>
              <CartProducts item={item} res={items[index]} userID={userID}/>
            </div>
            );
})}
</div>
        {items.length > 0 && (
          <CartCheckout quantity={totalQuantity} price={totalPrice} apple={items} />
        )}
      </div>
    </div>
  );
}
