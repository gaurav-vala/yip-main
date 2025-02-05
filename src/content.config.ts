import { z, defineCollection } from "astro:content";

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        abstract: z.string(),
        cover: z.string(),
    }),
});

export const collections = { books };
