"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { signUpAction } from "@/actions/auth.action";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Field,
	FieldDescription,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
	type SignUpForm as SignUpFormType,
	signUpSchema,
} from "@/schema/auth.schema";

/**
 * SignupForm - Client Component
 *
 * Renders a form for new user account creation with real-time validation.
 */
export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<SignUpFormType>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			name: "",
			email: "",
			password: "",
			confirmPassword: "",
		},
		mode: "onChange", // Enables real-time validation
	});

	async function onSubmit(data: SignUpFormType) {
		setIsSubmitting(true);

		try {
			// Convert the data object to FormData
			const formData = new FormData();
			formData.append("name", data.name);
			formData.append("email", data.email);
			formData.append("password", data.password);
			formData.append("confirm-password", data.confirmPassword);

			// Call the server action
			const result = await signUpAction({ error: null }, formData);

			// Handle the response
			if (result?.error) {
				toast.error(result.error);
			} else {
				toast.success("Account Created! Redirecting...");
				router.push("/dashboard");
			}
		} catch (err) {
			toast.error(
				err instanceof Error
					? err.message
					: "Failed to create account.",
			);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<Card {...props}>
			<CardHeader>
				<CardTitle>Create an account</CardTitle>
				<CardDescription>
					Enter your information below to create your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-6"
				>
					<Controller
						name="name"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Full Name
								</FieldLabel>
								<Input
									{...field}
									id={field.name}
									type="text"
									placeholder="John Doe"
									aria-invalid={fieldState.invalid}
									autoComplete="name"
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
									Email
								</FieldLabel>
								<Input
									{...field}
									id={field.name}
									type="email"
									placeholder="m@example.com"
									aria-invalid={fieldState.invalid}
									autoComplete="email"
								/>
								<FieldDescription>
									We&apos;ll use this to contact you.
								</FieldDescription>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Controller
						name="password"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Password
								</FieldLabel>
								<Input
									{...field}
									id={field.name}
									type="password"
									aria-invalid={fieldState.invalid}
									autoComplete="new-password"
								/>
								<FieldDescription className={"text-primary"}>
									Must be at least 8 characters.
								</FieldDescription>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Controller
						name="confirmPassword"
						control={form.control}
						render={({ field, fieldState }) => (
							<Field data-invalid={fieldState.invalid}>
								<FieldLabel htmlFor={field.name}>
									Confirm Password
								</FieldLabel>
								<Input
									{...field}
									id={field.name}
									type="password"
									aria-invalid={fieldState.invalid}
									autoComplete="new-password"
								/>
								<FieldDescription>
									Please confirm your password.
								</FieldDescription>
								{fieldState.invalid && (
									<FieldError errors={[fieldState.error]} />
								)}
							</Field>
						)}
					/>

					<Button
						type="submit"
						disabled={isSubmitting || !form.formState.isValid}
						className="w-full"
					>
						{isSubmitting
							? "Creating Account..."
							: "Create Account"}
					</Button>
				</form>
			</CardContent>
		</Card>
	);
}
