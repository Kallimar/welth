import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

export const runtime = "experimental-edge";

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
  matcher: [
    "/((?!_next|favicon.ico|assets|.*\\.(png|jpg|jpeg|svg|ico|css|js)).*)",
  ],
};
