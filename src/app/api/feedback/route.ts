import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { feedbackSchema } from "@/schema/feedback.schema";

/**
 * Server Component API Route for handling feedback submissions
 *
 * This endpoint accepts POST requests with feedback data, validates it,
 * and saves it to the database using Prisma. It returns appropriate
 * status codes and error messages for different failure scenarios.
 */
export async function POST(request: Request) {
	try {
		const body = await request.json();

		const validated = feedbackSchema.parse(body);

		const feedback = await prisma.feedback.create({
			data: {
				type: validated.type,
				title: validated.title,
				description: validated.description,
				email: validated.email || null,
				rating: validated.rating || null,
			},
		});

		return NextResponse.json({
			success: true,
			data: feedback,
		});
	} catch (error) {
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

		console.error("Supabase Error:", error);
		return NextResponse.json(
			{ error: "Failed to save feedback to database" },
			{ status: 500 },
		);
	}
}
