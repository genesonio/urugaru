import { router } from "../trpc";
import { authRouter } from "./auth";
import { printResource } from "./printResource";
import { userResource } from "./userResource";

export const appRouter = router({
  user: userResource,
  print: printResource,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
