
import { client } from "../../../sanity/lib/client";
import { Image as IImage } from "sanity";
import ProductHero from "../../../components/hero/Product-hero";
import ProductDesc from "../../../components/hero/ProductDesc";


export type Items = {
  _id: string;
  title: string;
  type: string;
  images: IImage[];
  price:number;
  care: string[];
  details: string;
};

const fetchItem = async (link: any) => {
  const item = await client.fetch(`*[_type=='dress' && title == '${link}']{
    _id,
    title,
    type,
    images,
    price,
    details,
    care
  }`);
  return item;
};

export default async function Product({ params }: { params: any }) {
    const { title } = params;
    const link = decodeURIComponent(title);
    const items = await fetchItem(link);
  return (
    <div>
     <ProductHero products={...items} />
     <ProductDesc products={items} />
    </div>
  );
}
