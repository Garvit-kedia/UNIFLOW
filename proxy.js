<<<<<<< HEAD
=======

>>>>>>> 7b5c526513bf9a49109cb4ca214e8be553983d00
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/my-events(.*)",
  "/create-event(.*)",
  "/my-tickets(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
<<<<<<< HEAD
  const { userId } = await auth();

  if (!userId && isProtectedRoute(req)) {
    const { redirectToSignIn } = await auth();
=======
  const { userId,redirectToSignIn } = await auth();

  if (!userId && isProtectedRoute(req)) {

>>>>>>> 7b5c526513bf9a49109cb4ca214e8be553983d00
    return redirectToSignIn();
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
