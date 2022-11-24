import { router } from "../trpc";
import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { postRouter } from "./post/post";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  post: postRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
