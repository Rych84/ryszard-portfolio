import { NextRequest, NextResponse } from "next/server";

const PRODUCTION_HOST = "ryszardtomaszewski.com";

export function proxy(request: NextRequest) {
  const host = request.headers.get("host") ?? "";

  if (host !== PRODUCTION_HOST) {
    const response = NextResponse.next();
    response.headers.set("X-Robots-Tag", "noindex");
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
