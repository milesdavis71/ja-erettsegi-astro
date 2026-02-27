import { defineCollection, z } from 'astro:content'

const teachers = defineCollection({
  type: 'data',
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    subject: z.string(),
    lessonTypes: z.string(),
    image: z.string(),
    thumbnail: z.string(),
    pdf: z.string().optional(),
    bio: z.string().optional(),
  }),
})

const schedule = defineCollection({
  type: 'data',
  schema: z.object({
    teacherSlug: z.string(),
    teacherName: z.string(),
    lessonTypes: z.string().optional(),
    subject: z.string(),
    day: z.string(),
    group: z.string().optional(),
    time: z.string().optional(),
    institution: z.string().optional(),
    room: z.string().optional(),
    location: z.string().optional(),
  }),
})

const news = defineCollection({
  type: 'content',
  schema: z.object({
    id: z.number(),
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    lead: z.string(),
    image: z.string(),
    category: z.string().optional(),
  }),
})

const global = defineCollection({
  type: 'data',
  schema: z.object({
    menu: z.array(
      z.object({
        id: z.string(),
        label: z.string(),
        url: z.string(),
      })
    ),
    site: z.object({
      title: z.string(),
      description: z.string().optional(),
    }),
    footer: z.object({
      logo: z.string(),
      buttons: z.array(
        z.object({
          text: z.string(),
          url: z.string().nullable().optional(),
        })
      ),
      contact: z.object({
        title: z.string(),
        items: z.array(
          z.object({
            text: z.string(),
            linktext: z.string(),
            url: z.string(),
          })
        ),
      }),
      links: z.object({
        title: z.string(),
        items: z.array(
          z.object({
            text: z.string(),
            url: z.string(),
          })
        ),
      }),
      address: z.string().optional(),
      email: z.string().optional(),
    }),
  }),
})

export const collections = {
  teachers,
  schedule,
  news,
  global,
}
