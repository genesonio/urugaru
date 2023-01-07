import { router } from "../trpc";
import { authRouter } from "./auth";
import { printResource } from "./printResource";

export const appRouter = router({
  print: printResource,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
