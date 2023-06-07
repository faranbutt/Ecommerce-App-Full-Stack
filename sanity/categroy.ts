import { defineField, defineType } from "sanity";
export const category = defineType({
  name: "category",
  title: "Product Category",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
    }),
  ],
});
