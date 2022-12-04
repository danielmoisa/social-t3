import { Prisma } from "@prisma/client";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { router, publicProcedure } from "../../trpc";

const defaultUserSelect = Prisma.validator<Prisma.UserSelect>()({
    id: true,
    name: true,
    email: true,
    username: true,
    posts: true,
    image: true,
    following: true,
    followers: true,
});

export const userRouter = router({
  byId: publicProcedure
  .input(
    z.object({
      id: z.string(),
    }),
  )
  .query(async ({ input, ctx }) => {
    const { id } = input;
    const user = await ctx.prisma.user.findUnique({
      //@TODO: refactor
      where: { id },
      select: {
         posts: { select: {
          author: {
            select: {
               name: true,
               image: true,
               username: true,
            }
          },
          authorId: true,
          content: true,
          createdAt: true,
          id: true,
        }
      },
         following: true,
         followers: true,
         bio: true,
         email: true,
         id: true,
         username: true,
         image: true,
         name: true,
      }
    });
    if (!user) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `No user with id '${id}'`,
      });
    }
    return user;
  }),

});
