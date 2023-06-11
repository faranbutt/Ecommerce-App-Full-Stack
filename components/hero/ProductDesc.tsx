export default function ProductDesc({ products }: { products: any }) {
  return (
    <div>
      {products.map((item: any) => (
        <div
          key={item._id}
          className="flex flex-col mt-16 pt-4 md:pt-8 px-10 md:px-40 pb-24 gap-8"
        >
          <div className="flex z-20 border-b-2 border-b-[#c4c4c4] relative">
            <div className="flex z-10 font-extrabold text-5xl md:text-9xl text-[#f2f3f7] opacity-70">
              Overview
            </div>
            <h2 className="scroll-m-20 text-xl font-bold tracking-wide transition-colors first:mt-0 absolute z-30 top-2/4 pb-12">
              Product Information
            </h2>
          </div>
          <div className="flex flex-col md:flex-row z-20">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-wider flex flex-grow flex-shrink text-[#666] leading-5">
              PRODUCT DETAILS
            </h4>
            <h4
              className="leading-7 text-base md:text-lg [&:not(:first-child)]:mt-6 text-[#212121] tracking-wider break-all"
              style={{ flex: "2 1" }}
            >
              {item.details}
            </h4>
          </div>
          <div className="flex flex-col md:flex-row z-20">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-wider flex flex-grow flex-shrink text-[#666] leading-5">
              PRODUCT CARE
            </h4>
            <ul className="list-disc pl-5 md:pl-14" style={{ flex: "2 1" }}>
              {item.care.map((list: any, index: number) => (
                <li
                  key={index}
                  className="font-semibold tracking-wider text-base leading-6 text-justify text-[#212121]"
                >
                  {list}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
