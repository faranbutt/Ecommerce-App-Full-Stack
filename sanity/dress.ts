export const dress = {
    name:'dress',
    title:'dress',
    type:'document',
    fields:[
        {
            name:'title',
            title:'Product title',
            type:'string'
        },
        {
            name:'type',
            title:'Product Type',
            type:'text'
        },
        {
            name:'images',
            title:'Product Images',
            type:'array',
            of:[
                {
                name:"image",
                title:'Product image',
                type:'image'
            }
        ]
        },
        {
            name:'price',
            title:"Product price",
            type: 'number',
        },
        {
            name:"details",
            title:"Product Details",
            type:"text"
        },
        {
            name:'care',
            title:'Product Care',
            type:'array',
            of:[
                {
                    name:'point',
                    title:'Care Point',
                    type:'string'
                }
            ]
        },
    ]
}