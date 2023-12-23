// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (
    request.nextUrl.host === "magic-redirects.achtsamkeitsakademie.de" ||
    request.nextUrl.host === "localhost:3000"
  ) {
    if (request.nextUrl.pathname === "/meditationsexperiment/heute") {
      const now = Math.floor(Date.now() / 1000);
      let path = "https://meditationsexperiment.de/2023/tag-7";
      // Timestamp is second Day of ME 2023
      if (now < 1682389800) {
        path = "https://meditationsexperiment.de/2023/tag-1";
      } else if (now < 1682389800 + 86400) {
        path = "https://meditationsexperiment.de/2023/tag-2";
      } else if (now < 1682389800 + 86400 * 2) {
        path = "https://meditationsexperiment.de/2023/tag-3";
      } else if (now < 1682389800 + 86400 * 3) {
        path = "https://meditationsexperiment.de/2023/tag-4";
      } else if (now < 1682389800 + 86400 * 4) {
        path = "https://meditationsexperiment.de/2023/tag-5";
      } else if (now < 1682389800 + 86400 * 5) {
        path = "https://meditationsexperiment.de/2023/tag-6";
      }
      return NextResponse.redirect(path + request.nextUrl.search);
    }
  } else {
    if (request.nextUrl.host === "magic-redirects.vercel.app") {
      if (request.nextUrl.pathname === "/rauhnachts-zeremonie-live") {
        if ((Math.random() > 0.5)) {
          return NextResponse.redirect("https://zoom.com/1");
        } else {
          return NextResponse.redirect("https://zoom.com/2");
        }
      }
    }
  }
}
