import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { feedbackSchema } from "@/schema/feedback.schema";

// Define the handlers for the feedback API route.
export const feedbackHandlers = {
	/**
	 * @description Handles POST requests to the feedback endpoint.
	 * It expects a JSON payload conforming to the feedbackSchema, validates it,
	 * and saves the feedback to the database.
	 *
	 * @param {Request} request - The incoming request object.
	 * @returns {Promise<NextResponse>} A JSON response indicating success or failure.
	 * - 200 OK: If feedback is successfully saved.
	 * - 400 Bad Request: If the incoming data is invalid according to feedbackSchema.
	 * - 500 Internal Server Error: If there's a database error.
	 */
	async POST(request: Request) {
		try {
			const body = await request.json();

			// Validate the incoming request body against the feedbackSchema.
			const validated = feedbackSchema.parse(body);

			// Save the validated feedback data to the database using Prisma.
			const feedback = await prisma.feedback.create({
				data: {
					type: validated.type,
					title: validated.title,
					description: validated.description,
					email: validated.email || null, // Use null if email is not provided
					rating: validated.rating || null, // Use null if rating is not provided
				},
			});

			// Return a success response with the created feedback data.
			return NextResponse.json({
				success: true,
				data: feedback,
			});
		} catch (error) {
			// Handle Zod validation errors.
			if (error instanceof z.ZodError) {
				return NextResponse.json(
					{
						error: "Invalid form data",
						details: error.issues.map((issue) => ({
							path: issue.path.join("."),
							message: issue.message,
							code: issue.code,
						})),
					},
					{ status: 400 },
				);
			}

			// Log and handle other potential errors (e.g., database errors).
			console.error("Database Error:", error);
			return NextResponse.json(
				{ error: "Failed to save feedback to database" },
				{ status: 500 },
			);
		}
	},
};
