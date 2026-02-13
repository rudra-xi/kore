import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { prisma } from "@/lib/prisma";

/**
 * Auth.js Configuration.
 * Handles authentication flows, provider registration, and session management.
 * Prisma is used as the database adapter for persisting user accounts.
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
	adapter: PrismaAdapter(prisma),
	/**
	 * Intent: The JWT strategy is required when using the Credentials provider,
	 * as Auth.js does not support database-backed sessions for this provider type.
	 */
	session: { strategy: "jwt" },
	pages: {
		signIn: "/", // Redirect destination for unauthenticated access attempts
	},
	providers: [
		Credentials({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},
			/**
			 * Server-Side Authentication Logic.
			 * Validates the user's email and password against records in the database.
			 * @returns User object if credentials are valid, otherwise returns null.
			 */
			async authorize(credentials) {
				if (!credentials?.email || !credentials?.password) return null;

				const user = await prisma.user.findUnique({
					where: { email: credentials.email as string },
				});

				if (!user || !user.password) return null;

				const isValid = await bcrypt.compare(
					credentials.password as string,
					user.password,
				);

				return isValid ? user : null;
			},
		}),
	],
});
