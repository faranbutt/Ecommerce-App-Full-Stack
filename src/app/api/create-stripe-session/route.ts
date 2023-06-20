import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: "2022-11-15",
});


export  async function POST(req: any, res: NextResponse){
    const {item}= await req.json();

    const transformedItem = {
         price_data: {
          currency: 'usd',
          product_data:{
            name: item.name,
            description: item.description,
            metadata:{},

          },
          unit_amount: item.price,

        },
        quantity: item.quantity,
        
      };
      const redirectURL =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://dine-three.vercel.app/';

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [transformedItem],
        mode: 'payment',
        success_url: redirectURL + '/payment/success',
        cancel_url: redirectURL + '/Cart',
        metadata: {
          images: item.image,
          name:"some additional info",
          task:"Faran created a task"
        },
      });

    //    console.log("response-------------------",await session);
    return NextResponse.json(session?.id) ;
  };