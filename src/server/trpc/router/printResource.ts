import { z } from "zod"

import { router, publicProcedure } from "../trpc"

export const printResource = router({
  upload: publicProcedure
    .input(z.object({
      name: z.string(),
      url: z.string(),
      price: z.number().optional(),
      description: z.string(),
      dimension: z.string(),
      toShop: z.boolean(),
      toGallery: z.boolean()

    }))
    .mutation(async ({ ctx, input }) => {
      const { name, url, price, description, dimension, toShop, toGallery } = input
      await ctx.prisma.print.create({
        data: {
          name,
          url,
          price,
          description,
          dimension,
          toShop,
          toGallery
        }
      })
    }),
  list: publicProcedure.query(async ({ ctx }) => {
    const prints = await ctx.prisma.print.findMany()
    return prints
  }),
  getOne: publicProcedure.input(z.object({ id: z.string() })).query(async ({ ctx, input }) => {
    const item = await ctx.prisma.print.findUnique({ where: { id: input.id } })
    return item
  }),
  update: publicProcedure.input(z.object({
    id: z.string(),
    name: z.string(),
    price: z.number().optional(),
    description: z.string(),
    dimension: z.string(),
    toShop: z.boolean(),
    toGallery: z.boolean()
  })).mutation(async ({ ctx, input }) => {
    const { id, name, price, description, dimension, toShop, toGallery } = input
    await ctx.prisma.print.update({
      data: {
        name,
        price,
        description,
        dimension,
        toShop,
        toGallery
      },
      where: {
        id
      }
    })
  }),
  delete: publicProcedure.input(z.object({ id: z.string() })).mutation(async ({ ctx, input }) => {
    await ctx.prisma.print.delete({ where: { id: input.id } })
  })
})
