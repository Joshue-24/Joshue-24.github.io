
import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.string(),
    author: z.string(),
    featuredImage: z.object({
      src: z.string(),
      alt: z.string(),
    }),
  }),
});

export const collections = {
  'blog': blogCollection,
};
