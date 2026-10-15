import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales } from "@/content";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`));
  if (hasLocale) return;

  const accept = request.headers.get("accept-language") ?? "";
  const locale = /^en\b/i.test(accept.trim()) ? "en" : defaultLocale;
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
