
/**
 * Zod schemas for authentication forms
 * 
 * Server Component - Defines validation rules for login and signup forms
 * Used to validate user input before processing authentication requests
 */
import * as z from "zod";

/**
 * Login form validation schema
 * 
 * Validates email format and ensures password is provided
 * Used for user login authentication
 */


export const loginSchema = z.object({
	email: z.string().email("Please enter a valid email address"),
	password: z.string().min(1, "Password is required"),
});

export const signUpSchema = z
	.object({
		name: z
			.string()
			.min(2, "Name must be at least 2 characters.")
			.max(50, "Name is too long"),
		email: z.string().email("Please enter a valid email address."),
		password: z.string().min(8, "Password must be at least 8 characters."),
		confirmPassword: z.string().min(1, "Please confirm your password."),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match.",
		path: ["confirmPassword"], // This attaches the error to the confirmPassword field
	});

export type LoginForm = z.infer<typeof loginSchema>;
export type SignUpForm = z.infer<typeof signUpSchema>;
