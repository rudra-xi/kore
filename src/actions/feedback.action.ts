"use server";

import { revalidatePath } from "next/cache";
import { type FeedbackForm, feedbackSchema } from "@/schema/feedback.schema";
import { createFeedback } from "@/services/feedback.service";
import type { ActionState } from "@/types/actions";

/**
 * submitFeedbackAction
 * @description Server action that handles feedback submission.
 * Validates the input data and saves it to the database using Prisma.
 * @param {ActionState} state - Previous action state
 * @param {FormData} formData - Form data containing feedback details
 * @returns {Promise<ActionState>} The updated action state with success or error information
 */
export async function submitFeedbackAction(
	state: ActionState,
	formData: FormData,
): Promise<ActionState> {
	
	// Extract form data from the submitted feedback form
	const rawData = {
		type: formData.get("type") as string,
		title: formData.get("title") as string,
		description: formData.get("description") as string,
		email: formData.get("email") as string,
		rating: formData.get("rating")
			? Number(formData.get("rating"))
			: undefined,
	};

	try {
	
// Validate with Zod schema to ensure data integrity and security
	const validatedData = feedbackSchema.parse(rawData);

		// Save to database using Prisma service
		await createFeedback(validatedData);

		// Revalidate any pages that might display feedback data
		revalidatePath("/feedback");
		revalidatePath("/dashboard");

		// Return success state (matching your auth action pattern)
		return {
			success: true,
			error: null, // Explicitly set error to null on success
		};
	} catch (error) {
		// Handle Zod validation errors
		if (error instanceof Error && error.name === "ZodError") {
			return {
				error: "Validation failed. Please check your input.",
			};
		}

		// Handle database errors
		console.error("Feedback submission error:", error);
		return {
			error: "Database error. Please try again.",
		};
	}
}
