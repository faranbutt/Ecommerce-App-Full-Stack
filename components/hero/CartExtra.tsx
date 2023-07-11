'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import use from 'react';
import CartFilled from './CartFilled';
import EmptyCart from './EmptyCart';
import { RootState } from '@/store/store';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';


type fetchData = {
  data:[]
}

const fetchProducts = async (user:any) => {
    console.log("INISde FETCH",user)
    const res = await axios.get(`https://dine-three.vercel.app/api/cart?user_id=${user}`);
    return {res:res};
  };


export default function CartExtra({user}:{user:any}) {  
  const router = useRouter()
    const [datas,setData] = useState<fetchData>({data:[]});
    const [random,setRandom] = useState(false);
    const quantity = useSelector((state:RootState)=>state.reducer.totalQuantity);
    router.refresh();
    console.log(user)

 useEffect(()=>{
    const data = async ()=> {
        const { res } =await  fetchProducts(user);
        const { data } = res;
        setData(data);
        console.log("Inside useeffect",data)
    }
    data();
 },[quantity])
   console.log("FEAR IN MMMM",datas);
    return (
    <div>
         {datas.data.length ? (
        <CartFilled data={datas} userID = {user} />
        
      ) : (
        <EmptyCart  />
      )}
    </div>
  )
}
