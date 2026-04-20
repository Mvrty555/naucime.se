import { NextResponse } from "next/server";
import { auth } from "@/auth";

export default auth((req) => {
  if (!req.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.next();
  }
  if (!req.auth) {
    const url = new URL("/prihlaseni", req.nextUrl.origin);
    url.searchParams.set("callbackUrl", req.nextUrl.pathname);
    return NextResponse.redirect(url);
  }
  if (req.auth.user?.role !== "ADMIN") {
    return NextResponse.redirect(new URL("/ucet", req.nextUrl.origin));
  }
  return NextResponse.next();
});

export const config = {
  matcher: ["/admin/:path*"],
};
