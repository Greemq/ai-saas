import { authMiddleware } from "@clerk/nextjs";
import {NextResponse} from "next/server";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/nextjs/middleware for more information about configuring your middleware
// export default authMiddleware({
//   publicRoutes: ["/", "/api/webhook"],
// });
export default function middleware() {
    return NextResponse.next();
}

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
