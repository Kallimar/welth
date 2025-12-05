export const runtime = "experimental-edge";

import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtected = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();
  if (!userId && isProtected(req)) {
    return (await auth()).redirectToSignIn();
  }
});

export const config = {
  matcher: ["/((?!_next|.*\\.(png|jpg|jpeg|svg|ico|css|js)).*)"],
};
