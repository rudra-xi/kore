import * as z from "zod";

/**
 * Zod schema for validating feedback form submissions
 *
 * Defines the structure and validation rules for feedback data,
 * including required fields, optional fields, and value constraints.
 */
export const feedbackSchema = z.object({
	/**
	 * Feedback type - categorizes the nature of the feedback
	 * Required field with predefined enum values
	 */
	type: z.enum([
		"BUG",
		"FEATURE",
		"UI_UX",
		"PERFORMANCE",
		"SECURITY",
		"DOCUMENTATION",
		"DX",
		"INTEGRATION",
		"OTHER",
	]),

	/**
	 * Feedback title - brief summary of the issue/feature
	 * Required string between 3-50 characters
	 */
	title: z
		.string()
		.min(3, "Title must be at least 3 characters")
		.max(50, "Title is too long"),

	/**
	 * Detailed feedback description
	 * Required string between 10-500 characters
	 */
	description: z
		.string()
		.min(10, "Description must be at least 10 characters")
		.max(500, "Description is too long"),

	/**
	 * Optional email address for follow-up
	 * Valid email format or empty string allowed
	 */
	email: z.string().email().optional().or(z.literal("")),

	/**
	 * Optional rating from 1-5 stars
	 * Used for satisfaction or priority scoring
	 */
	rating: z.number().min(1).max(5).optional(),
});

/**
 * TypeScript type inferred from the Zod schema
 * Used for type-safe access to validated feedback data
 */
export type FeedbackForm = z.infer<typeof feedbackSchema>;
