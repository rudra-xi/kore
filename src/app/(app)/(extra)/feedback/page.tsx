"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Frown, Meh, Smile } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { FeedHero } from "@/components/pages";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	Field,
	FieldContent,
	FieldDescription,
	FieldError,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FEEDBACK_TYPES } from "@/constants";
import type { FeedbackForm } from "@/lib/feedback";
import { feedbackSchema } from "@/lib/feedback";

/**
 * Client Component: RatingSelector
 *
 * Renders a 5-star rating selector using emoji icons to represent
 * satisfaction levels. The component uses color-coded buttons to
 * visually distinguish between negative (red), neutral (yellow), and
 * positive (green) ratings.
 *
 * @param {Object} props - Component props
 * @param {number} props.value - Currently selected rating value
 * @param {function} props.onChange - Callback to handle rating changes
 */
function RatingSelector({
	value,
	onChange,
}: {
	value?: number;
	onChange: (value: number) => void;
}) {
	return (
		<div className="flex items-center gap-2">
			{[1, 2, 3, 4, 5].map((rating) => (
				<Button
					key={rating}
					size={"icon"}
					type="button" // Important: stop form submission on click
					onClick={() => onChange(rating)}
					className={`p-2 rounded-full transition-colors cursor-pointer text-muted-foreground ${
						value === rating
							? rating <= 2
								? "bg-destructive text-destructive-foreground hover:bg-destructive/90"
								: rating === 3
									? "bg-primary/50 text-secondary-foreground hover:bg-primary/60"
									: "bg-primary text-secondary-foreground hover:bg-primary/90"
							: "bg-muted hover:bg-muted/80"
					}`}
				>
					{rating <= 2 && <Frown className="h-6 w-6" />}
					{rating === 3 && <Meh className="h-6 w-6" />}
					{rating >= 4 && <Smile className="h-6 w-6" />}
				</Button>
			))}
		</div>
	);
}

/**
 * Client Component: FeedbackPage
 *
 * Main feedback submission form page that handles user feedback collection.
 * Uses React Hook Form with Zod validation for type-safe form handling and
 * displays real-time validation feedback to users.
 */
export default function FeedbackPage() {
	// State to track form submission status for UI feedback
	const [isSubmitting, setIsSubmitting] = useState(false);

	// Form configuration with Zod validation schema
	const form = useForm<FeedbackForm>({
		resolver: zodResolver(feedbackSchema),
		defaultValues: {
			type: "BUG",
			title: "",
			description: "",
			email: "",
			rating: undefined,
		},
		mode: "onChange", // Validate on every input change
	});

	/**
	 * Handles form submission by sending feedback data to the API endpoint.
	 * Provides user feedback through toast notifications and resets the form
	 * on successful submission.
	 *
	 * @param {FeedbackForm} data - Validated form data
	 */
	async function onSubmit(data: FeedbackForm) {
		setIsSubmitting(true);

		try {
			const response = await fetch("/api/feedback", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});

			const result = await response.json();

			if (!response.ok) {
				throw new Error(result.error || "Something went wrong");
			}

			toast.success("Thanks for the feedback!", {
				description: "It has been saved to our database.",
			});

			form.reset();
		} catch (err) {
			toast.error(
				err instanceof Error ? err.message : "Failed to send feedback.",
			);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<div className="max-w-2xl mx-auto space-y-12 pb-20">
			<FeedHero />

			<Card>
				<CardContent className="pt-6">
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-8"
					>
						{/* Feedback Type Selector */}
						<Controller
							name="type"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field
									orientation="vertical"
									data-invalid={fieldState.invalid}
								>
									<FieldContent>
										<FieldLabel htmlFor="feedback-type">
											Feedback Type
										</FieldLabel>
										{fieldState.invalid && (
											<FieldError
												errors={[fieldState.error]}
											/>
										)}
									</FieldContent>
									<Select
										name={field.name}
										value={field.value}
										onValueChange={field.onChange}
									>
										<SelectTrigger
											id="feedback-type"
											aria-invalid={fieldState.invalid}
										>
											<SelectValue placeholder="Select feedback type" />
										</SelectTrigger>
										<SelectContent>
											{Object.entries(FEEDBACK_TYPES).map(
												([value, label]) => (
													<SelectItem
														key={value}
														value={value}
													>
														{label}
													</SelectItem>
												),
											)}
										</SelectContent>
									</Select>
								</Field>
							)}
						/>

						{/* Feedback Title Input */}
						<Controller
							name="title"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name}>
										Title
									</FieldLabel>
									<Input
										{...field}
										id={field.name}
										aria-invalid={fieldState.invalid}
										placeholder="Brief summary"
										autoComplete="off"
									/>
									<FieldDescription>
										A concise subject.
									</FieldDescription>
									{fieldState.invalid && (
										<FieldError
											errors={[fieldState.error]}
										/>
									)}
								</Field>
							)}
						/>

						{/* Feedback Description Textarea */}
						<Controller
							name="description"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name}>
										Description
									</FieldLabel>
									<Textarea
										{...field}
										id={field.name}
										aria-invalid={fieldState.invalid}
										placeholder="Tell us more details..."
										className="min-h-30"
									/>
									{fieldState.invalid && (
										<FieldError
											errors={[fieldState.error]}
										/>
									)}
								</Field>
							)}
						/>

						{/* Email Input (Optional) */}
						<Controller
							name="email"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<FieldLabel htmlFor={field.name}>
										Email{" "}
										<span className="text-muted-foreground text-xs">
											(optional)
										</span>
									</FieldLabel>
									<Input
										{...field}
										id={field.name}
										type="email"
										aria-invalid={fieldState.invalid}
										placeholder="your@email.com"
									/>
									{fieldState.invalid && (
										<FieldError
											errors={[fieldState.error]}
										/>
									)}
								</Field>
							)}
						/>

						{/* Rating Selector */}
						<Controller
							name="rating"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field
									orientation="vertical"
									data-invalid={fieldState.invalid}
								>
									<FieldContent>
										<FieldLabel>
											How satisfied are you?{" "}
											<span className="text-muted-foreground text-xs">
												(optional)
											</span>
										</FieldLabel>
										{fieldState.invalid && (
											<FieldError
												errors={[fieldState.error]}
											/>
										)}
									</FieldContent>
									<RatingSelector
										value={field.value}
										onChange={field.onChange}
									/>
								</Field>
							)}
						/>

						{/* Form Actions and Security Notice */}
						<div className="space-y-4 pt-2">
							<p className="text-xs text-muted-foreground">
								Please don't paste secrets or API keys in your
								feedback.
							</p>
							<Button
								type="submit"
								disabled={isSubmitting}
								className="w-full sm:w-auto"
							>
								{isSubmitting
									? "Submitting..."
									: "Submit feedback"}
							</Button>
						</div>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
