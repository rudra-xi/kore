
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { submitFeedbackAction } from "@/actions/feedback.action";
import { RatingSelector } from "@/components/pages";
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
import {
	type FeedbackForm as FeedbackFormType,
	feedbackSchema,
} from "@/schema/feedback.schema";

export function FormFeedback() {
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<FeedbackFormType>({
		resolver: zodResolver(feedbackSchema),
		defaultValues: {
			type: "BUG",
			title: "",
			description: "",
			email: "",
			rating: undefined,
		},
		mode: "onChange",
	});

	async function onSubmit(data: FeedbackFormType) {
		setIsSubmitting(true);

		try {
			// Convert the data object to FormData
			const formData = new FormData();
			formData.append("type", data.type);
			formData.append("title", data.title);
			formData.append("description", data.description);
			if (data.email) formData.append("email", data.email);
			if (data.rating) formData.append("rating", data.rating.toString());

			// Call the server action with initial state (matching auth pattern)
			const result = await submitFeedbackAction(
				{ error: null },
				formData,
			);

			// Handle the response (matching your loginAction pattern)
			if (result?.error) {
				toast.error(result.error);
			} else {
				toast.success("Thanks for the feedback!", {
					description: "It has been saved to our database.",
				});
				form.reset();
			}
		} catch (err) {
			// Handle unexpected errors (matching your loginAction pattern)
			toast.error(
				err instanceof Error ? err.message : "Failed to send feedback.",
			);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<Card>
			<CardContent className="pt-6">
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-8"
				>
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
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

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
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

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
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

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
									onChangeAction={field.onChange}
								/>
							</Field>
						)}
					/>

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
							{isSubmitting ? "Submitting..." : "Submit feedback"}
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
