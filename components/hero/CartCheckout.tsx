'use client'
import { loadStripe } from "@stripe/stripe-js";

import { Button } from "../ui/button";
import { useState } from "react";

export default function CartCheckout(props: any) {
  let { quantity, price } = props;
  const [loading, setLoading] = useState(false);
  const [item, setItem] = useState({
    name: "All Items",
    description: "Clothes",
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80",
    quantity: quantity,
    price: price,
  });


  const publishableKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string;
  const stripePromise = loadStripe(publishableKey);
  const createCheckOutSession = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    const checkoutSession = await fetch(
      "/api/create-stripe-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item: item,
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
        className="p-8 bg-[#fbfcff] flex flex-col gap-8"
        style={{ flex: "1 1" }}
      >
        <h3>Order Summary</h3>
        <div className="flex justify-between gap-16">
          <p className="font-bold">Quantity</p>
          <span>{quantity} Product</span>
        </div>
        <div className="flex justify-between gap-16">
               <p className="font-bold">Sub Total</p>
               <span>${price}</span>
        </div>
        <div className="flex justify-between gap-16">
            <Button onClick={createCheckOutSession}>Proceed to Checkout</Button>
       </div>
      </div>
    </div>
  );
}
