import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { router, publicProcedure } from "../trpc";

const defaultPostSelect = Prisma.validator<Prisma.PostSelect>()({
  author: true,
  authorId: true,
  content: true,
  createdAt: true,
  id: true,
});

export const postsRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.post.findMany({
      select: defaultPostSelect
    });
  }),
  byId: publicProcedure
  .input(
    z.object({
      id: z.string(),
    }),
  )
  .query(async ({ input, ctx }) => {
    const { id } = input;
    const post = await ctx.prisma.post.findUnique({
      where: { id },
      select: defaultPostSelect,
    });
    if (!post) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `No post with id '${id}'`,
      });
    }
    return post;
  }),
});
