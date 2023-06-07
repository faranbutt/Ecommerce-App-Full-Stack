export const products = {
    name: "product",
    title:"Products",
    type:"document",
    fields:[
        {
            name:"title",
            title:"Product title",
            type:"string"
        },
        {
            name: 'description',
            title: "Product description",
            type: 'string'
        },
        {
            name: "price",
            title: "Product Price",
            type: "number",
        },
        {
            name: "image",
            title: "Product image",
            type: "image"
        },
        {
            name: "category",
            title: "Product category",
            type: "reference",
            to: {type: "category"}
        }

    ]

}