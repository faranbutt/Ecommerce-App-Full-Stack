import { NextRequest, NextResponse } from "next/server";
import {v4 as uuid} from 'uuid';
import { cookies } from "next/headers";
import { cartTable, db } from "@/lib/drizzle";
import { eq,and } from "drizzle-orm";



export async function GET(request:NextRequest){
    const req = request.nextUrl
    const uid = req.searchParams.get('user_id');
    
    if(!uid){
        return NextResponse.json({data:"Nothing in the cart"})
    }
    try{
        const res = await db.select().from(cartTable).where(eq(cartTable.user_id,uid))
        return NextResponse.json({data:res});
    }catch(error){
        console.log("In error");
        console.log(error);
    }
        
    
}


export async function POST(request:NextRequest){
    const {product_id,quantity,price} = await request.json();
    const uid = uuid();
    const setCookies = cookies();
    const user_id = setCookies.get('user_id');
    if(!user_id){
        setCookies.set('user_id',uid);
    }
    try {
        const res = await db.insert(cartTable).values({
            user_id:setCookies.get('user_id')?.value as string,
            product_id: product_id,
            quantity:quantity,
            price:price
        }).returning();
        return NextResponse.json({data:res});
    } catch (error) {
        return NextResponse.json({data:(error as {message:string}).message})
    }

}

export async function  DELETE(request:NextRequest){
    const product_id = request.nextUrl.searchParams.get('product_id') as string;
    const uid  = request.nextUrl.searchParams.get('user_id') as string ;
    try{
        const res = await db.delete(cartTable)
        .where(
          and(
            eq(cartTable.user_id, uid),
            eq(cartTable.product_id, product_id),
          )
        );
        return NextResponse.json({data:res})
    }catch(error){
        return NextResponse.json({data:(error as {message:string}).message})
    }
}