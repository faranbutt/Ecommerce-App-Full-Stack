export const describe = {
  name: "describe",
  title: "Describes the products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "text",
    },
    {
        name:'quality',
        title:'Quality',
        type:'array',
        of:[
            {
                name:'heading',
                type:'text',
                title:'Heading'
            },
            {
                name:'subhead',
                type:'text',
                title:'Sub Heading'
            }
        ]
    },
    {
        name: "description",
        title: "Description",
        type: "text"
    },
    {
        name: 'image',
        title: 'Image',
        type: 'image'
    }
  ],
};
