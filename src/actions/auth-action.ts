"use server";
import { redirect } from "next/navigation";
import { AuthError } from "next-auth";
import { signIn, signOut } from "@/lib/auth";
import { createAuthUser, getUserByEmail } from "@/services/auth.service";
import type { ActionState } from "@/types/actions";

// Define TypeScript interfaces for better type safety
interface SignUpFormData {
	name: string;
	email: string;
	password: string;
}

interface LoginFormData {
	email: string;
	password: string;
}

/**
 * signUpAction
 * @description Server action that handles user registration.
 * Creates a new user in the database and establishes an authentication session.
 * @param {ActionState} state - Current action state
 * @param {SignUpFormData} formData - Form data containing user registration details
 * @returns {Promise<ActionState>} The updated action state with success or error information
 */
export async function signUpAction(
	state: ActionState,
	formData: FormData,
): Promise<ActionState> {
	const name = formData.get("name") as string;
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	if (!email || !password) return { error: "Missing fields." };

	try {
		/**
		 * Check if user already exists to prevent duplicate registrations
		 * This validation happens before creating the user to maintain data integrity
		 */
		const existingUser = await getUserByEmail(email);
		if (existingUser) return { error: "User already exists." };

		/**
		 * Create the new user in the database
		 * This operation is wrapped in a try/catch to handle database errors
		 */
		await createAuthUser({ name, email, password });

		/**
		 * Log the user in to establish the session cookie
		 * We use redirect: false to prevent automatic navigation
		 * The redirect happens after successful authentication
		 */
		await signIn("credentials", {
			email,
			password,
			redirect: false,
		});

		// Redirect must happen OUTSIDE the try/catch to avoid catching redirect errors
	} catch (err) {
		// If it's a redirect error from Auth.js, we must re-throw it
		if (err instanceof Error && err.message === "NEXT_REDIRECT") throw err;
		return { error: "Database error. Please try again.", err };
	}

	// Redirect to dashboard after successful registration and login
	redirect("/dashboard");
}

/**
 * loginAction
 * @description Server action that handles user login.
 * Authenticates the user and establishes an authentication session.
 * @param {ActionState} state - Current action state
 * @param {LoginFormData} formData - Form data containing user login credentials
 * @returns {Promise<ActionState>} The updated action state with success or error information
 */
export async function loginAction(
	state: ActionState,
	formData: FormData,
): Promise<ActionState> {
	const email = formData.get("email") as string;
	const password = formData.get("password") as string;

	if (!email || !password) return { error: "Please fill in all fields." };

	try {
		/**
		 * Authenticate the user using NextAuth.js
		 * We use redirect: false to prevent automatic navigation
		 * This allows the client-side form to handle the success state
		 */
		await signIn("credentials", {
			email,
			password,
			redirect: false, // <--- STOP automatic redirect
		});

		return { success: true }; // <--- NOW your LoginForm's useEffect will fire!
	} catch (error) {
		if (error instanceof AuthError) {
			return { error: "Invalid email or password." };
		}
		throw error;
	}
}

/**
 * logoutAction
 * @description Server action that handles user logout.
 * Terminates the user session and redirects to the homepage.
 * @returns  Resolves when logout is complete
 */
export async function logoutAction() {
	await signOut({ redirectTo: "/" });
}
