import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  // Token will exist if user is logged in
  const token = await getToken({ req, secret: process.env.JWT_SECRET });

  const { pathname } = req.nextUrl;
  console.log(pathname);

  // Redirect if token exists
  if (pathname == "/login" && token) {
    return NextResponse.redirect("/");
  }

  // Allow request if the following is true
  // 1) Request from next-auth session & provider fetching
  // 2) If token exist
  if (pathname.includes("api/auth") || token) {
    return NextResponse.next();
  }

  // Redirect if no token but requesting a protected route
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}
