
export const hero = {
    title: 'Hero',
    name: 'hero',
    type: 'document',
	fields: [
		{
            name: 'title',
            title: 'Title',
            type: 'text',
        },
		{
            name: 'subtitle',
            title: 'Subtitle',
            type: 'text',

        },
        {
            name: 'discount',
            title: 'Discount',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
        },
        {
            name:"brand",
            title:"Brands",
            type:"array",
            of:[
                {
                    name:'images',
                    title:'images',
                    type:'image'
                }
            ]

        }
	],
};
