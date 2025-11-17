import { clerkMiddleware } from "@clerk/nextjs/server";

// PROTECTED ROUTES
const protectedRoutes = ["/dashboard", "/account", "/transaction"];

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // Check if the current route should be protected
  const isProtected = protectedRoutes.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  // If not signed in AND route is protected → redirect to sign-in
  if (!userId && isProtected) {
    const { redirectToSignIn } = await auth();
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  return;
});

// Next.js middleware config (unchanged)
export const config = {
  matcher: [
    // Skip Next.js internals and static files
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
