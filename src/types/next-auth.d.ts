import type { DefaultSession } from "next-auth";

/**
 * @fileoverview Type definitions for extending NextAuth.js session and user objects.
 * This file augments the default NextAuth types to include custom user properties
 * such as id, avatar, and role, which are essential for personalized user experiences
 * and authorization logic within the application.
 */


declare module "next-auth" {
	/**
	 * @description Extends the default NextAuth Session interface to include custom user properties.
	 * These properties are available on the session object after successful authentication.
	 */
	interface Session {
		user: {
			id?: string;
			avatar?: string | null;

			role?: string;
		} & DefaultSession["user"];
	}

	/**
	 * @description Extends the default NextAuth User interface to include custom properties.
	 * These properties are associated with the user object during the authentication process.
	 */
	interface User {
		avatar?: string | null;
		role?: string | null;
	}
}

/**
 * @description Augments the @auth/core/adapters AdapterUser interface to include custom properties.
 * This ensures consistency when custom user data is persisted through database adapters.
 */
declare module "@auth/core/adapters" {
	interface AdapterUser {
		avatar?: string | null;
		role?: string | null;
	}
}
