'use client'

import { Button } from "../ui/button";
import { useState } from "react";
import getStripe from "@/lib/stripe";

export default function CartCheckout(props: any) {
  let { quantity, price, apple } = props;
  console.log("Fara",apple);
  const [loading, setLoading] = useState(false);
  // const [item, setItem] = useState({
  //   name: "All Items",
  //   description: "Clothes",
  //   image:
  //     "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
  //   quantity: quantity,
  //   price: price,
  // });


 
  const createCheckOutSession = async () => {
    
    setLoading(true);
    const stripe = await getStripe();

    const checkoutSession = await fetch(
      "/api/create-stripe-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: apple,
        }),
      }
    );

      console.log("Result------------- in prod page==========",  checkoutSession);

    const sessionID= await checkoutSession.json();
    const result = await stripe?.redirectToCheckout({
      sessionId: sessionID,
    });
    if (result?.error) {
      alert(result.error.message);
    }
    setLoading(false);
  };

  return (
    <div>
      <div
        className="py-8 md:px-8 bg-[#fbfcff] flex flex-col gap-8"
        style={{ flex: "1 1" }}
      >
        <h3 className="text-2xl font-bold" >Order Summary</h3>
        <div className="flex justify-between gap-16">
          <p className="font-bold">Quantity</p>
          <span>{quantity} Product</span>
        </div>
        <div className="flex justify-between gap-16">
               <p className="font-bold">Sub Total</p>
               <span>${price}</span>
        </div>
        <div className="flex md:justify-between md:gap-16">
            <Button onClick={createCheckOutSession} className="w-full">Proceed to Checkout</Button>
       </div>
      </div>
    </div>
  );
}
