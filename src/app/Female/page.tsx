'use client'
import { Image as IImage } from "sanity";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Link from "next/link";
import Image from "next/image";
import { useEffect,useRef } from "react";
import VanillaTilt from "vanilla-tilt";


export type IProducts = {
  _id: string;
  title: string;
  description: string;
  price: number;
  image: IImage;
  category: {
    name: string;
  };
};
const fetchProducts = async () => {
  const data: IProducts[] =
    await client.fetch(`*[_type=='product' && category -> name == 'Female']{
      _id,
      title,
      description,
      price,
        image,
        category -> {
          name
        }
    }`);
  return data;
};

const options = {
  scale: 1.2,
  speed: 1000,
  max: 30
};

function Tilt(props:any) {
  const { options, ...rest } = props;
  const tilt = useRef(null);

  useEffect(() => {
    VanillaTilt.init(tilt.current, options);
  }, [options]);

  return <div ref={tilt} {...rest} />;
}



export default async function page() {
  const femaleProducts: IProducts[] = await fetchProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 mx-5 md:mx-20 gap-y-10 md:gap-x-20 text-center">
      {femaleProducts.map((item) => (
        <Tilt className="box" options={options} key={item._id} >
        <div key={item._id} className="rounded-3xl border-4 border-secondary">
          <Link href={`/${item.title}`}>
            <Image
              src={urlForImage(item.image).url()}
              alt="person"
              width={400}
              height={400}
            />
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {item.title}
            </h4>
            <p className="scroll-m-20 text-lg font-semibold tracking-tight text-gray-400">
              {item.description}
            </p>
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
              {item.price}$
            </h4>
          </Link>
        </div>
        </Tilt>
      ))}
    </div>
  );
}
