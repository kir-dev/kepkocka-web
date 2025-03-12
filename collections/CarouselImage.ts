import type { CollectionConfig } from "payload";

export const CarouselImage: CollectionConfig = {
  slug: "carousel-image",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
    },
    {
      name: "picture",
      label: "Picture",
      type: "upload",
      relationTo: "media",
      maxDepth: 1,
      required: true,
    },
    {
      name: "subtitle",
      label: "Subtitle",
      type: "text",
    },
    {
      name: "date",
      label: "Date",
      type: "date",
      required: true,
    },
  ],
};
