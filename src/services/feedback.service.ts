import { prisma } from "@/lib/prisma";
import type { FeedbackForm } from "@/schema/feedback.schema";

/**
 * createFeedback
 * @description Creates a new feedback entry in the database using Prisma
 * @param {FeedbackForm} data - Validated feedback form data
 * @returns {Promise<Feedback>} The created feedback entry
 */
export async function createFeedback(data: FeedbackForm) {
	try {
		const feedback = await prisma.feedback.create({
			data: {
				type: data.type,
				title: data.title,
				description: data.description,
				email: data.email || null,
				rating: data.rating || null,
			},
		});

		return feedback;
	} catch (error) {
		console.error("Failed to create feedback:", error);
		throw new Error("Database error. Please try again.");
	}
}

/**
 * getFeedbackById
 * @description Retrieves a specific feedback entry by ID
 * @param {string} id - Feedback ID
 * @returns {Promise<Feedback | null>} The feedback entry or null if not found
 */
export async function getFeedbackById(id: string) {
	try {
		return await prisma.feedback.findUnique({
			where: { id },
		});
	} catch (error) {
		console.error("Failed to get feedback:", error);
		throw new Error("Database error. Please try again.");
	}
}

/**
 * getAllFeedback
 * @description Retrieves all feedback entries, optionally filtered
 * @param {Object} options - Query options
 * @returns {Promise<Feedback[]>} Array of feedback entries
 */
export async function getAllFeedback(options?: {
	type?: string;
	limit?: number;
	orderBy?: "asc" | "desc";
}) {
	try {
		return await prisma.feedback.findMany({
			where: options?.type ? { type: options.type } : {},
			orderBy: { createdAt: options?.orderBy || "desc" },
			take: options?.limit,
		});
	} catch (error) {
		console.error("Failed to get feedback:", error);
		throw new Error("Database error. Please try again.");
	}
}
