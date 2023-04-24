// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (
    request.nextUrl.host === "magic-redirects.achtsamkeitsakademie.de" ||
    request.nextUrl.host === "localhost:3000"
  ) {
    if (request.nextUrl.pathname === "/heute") {
      const now = Math.floor(Date.now() / 1000);
      if (now < 1682389800) {
        return NextResponse.redirect(
          "https://meditationsexperiment.de/2023/tag-1"
        );
      }
      if (now < 1682389800 + 86400) {
        return NextResponse.redirect(
          "https://meditationsexperiment.de/2023/tag-2"
        );
      }
      if (now < 1682389800 + 86400 * 2) {
        return NextResponse.redirect(
          "https://meditationsexperiment.de/2023/tag-3"
        );
      }
      if (now < 1682389800 + 86400 * 3) {
        return NextResponse.redirect(
          "https://meditationsexperiment.de/2023/tag-4"
        );
      }
      if (now < 1682389800 + 86400 * 4) {
        return NextResponse.redirect(
          "https://meditationsexperiment.de/2023/tag-5"
        );
      }
      if (now < 1682389800 + 86400 * 5) {
        return NextResponse.redirect(
          "https://meditationsexperiment.de/2023/tag-6"
        );
      }
      return NextResponse.redirect(
        "https://meditationsexperiment.de/2023/tag-7"
      );
    }
  }
}
