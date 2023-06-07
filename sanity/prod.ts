export const prod = {
  name: "prod",
  title: "prod",
  type: "document",
  fields: [
    {
        name:"heading",
        title:'Heading',
        type:"string",
    },
    {
        name:'subhead',
        title:"Sub heading",
        type:"string",
    },
    {
      name: "products",
      title: "Products",
      type: "array",
      of: [
        {
          name:"image",
          title:"Product image",
          type: "image",
        },
        {
            name:"description",
            title:'Product description',
            type:"string",
        },
        {
            name:'price',
            title:"Product price",
            type:"number",
        }
      ],
    },
  ],
};
