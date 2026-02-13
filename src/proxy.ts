import { auth } from "@/lib/auth";

/**
 * Middleware Authentication Wrapper.
 * Intercepts requests to protect application routes by ensuring only
 * authenticated users can access specific segments.
 */
export default auth((req) => {
	const isLoggedIn = !!req.auth;

	const isAuthPage =
		req.nextUrl.pathname.startsWith("/dashboard") ||
		req.nextUrl.pathname.startsWith("/snippet") ||
		req.nextUrl.pathname.startsWith("/library") ||
		req.nextUrl.pathname.startsWith("/collections");

	/**
	 * Redirects unauthenticated users to the root page when attempting to
	 * access restricted application routes.
	 */
	if (isAuthPage && !isLoggedIn) {
		return Response.redirect(new URL("/", req.nextUrl));
	}
});

/**
 * Middleware Matcher Configuration.
 * Excludes static assets and API routes to ensure public resources
 * and internal APIs remain accessible without middleware overhead.
 */
export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
