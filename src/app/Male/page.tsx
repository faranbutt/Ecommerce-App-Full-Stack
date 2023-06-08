import { Image as IImage } from "sanity";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import Image from "next/image";
export type IProducts = {
  _id: string,
  title:string,
  description:string,
  price:number,
  image:IImage,
  category:{
    name:string
  }
}
const fetchProducts =  async () => {
    const data: IProducts[] = await client.fetch(`*[_type=='product' && category -> name == 'Male']{
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

}

export default async function page() {
  const maleProducts:IProducts[] = await fetchProducts();
  
  return (
    <div className="grid grid-cols-4 mx-20 gap-x-20">
      {maleProducts.map((item) => (
      <div key={item._id}>
        <Image src={urlForImage(item.image).url()} alt="person" width={400} height={400} />
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{item.title}</h4>
        <p className="scroll-m-20 text-lg font-semibold tracking-tight text-gray-400">{item.description}</p>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">{item.price}$</h4>

      </div>))}
    </div>
  )
}
