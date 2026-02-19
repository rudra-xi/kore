"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { loginAction } from "@/actions/auth.action";
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
	FieldContent,
	FieldError,
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
	type LoginForm as LoginFormType,
	loginSchema,
} from "@/schema/auth.schema";

/**
 * LoginForm - Client Component
 *
 * Renders a form for user login. It leverages React Hook Form with Zod validation
 * for real-time validation and error display.
 */
export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);

	const form = useForm<LoginFormType>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		mode: "onChange", // Enables real-time validation
	});

	async function onSubmit(data: LoginFormType) {
		setIsSubmitting(true);

		try {
			// Convert the data object to FormData
			const formData = new FormData();
			formData.append("email", data.email);
			formData.append("password", data.password);

			// Call the server action
			const result = await loginAction({ error: null }, formData);

			// Handle the response
			if (result?.error) {
				toast.error(result.error);
			} else {
				toast.success("Login Successfully! Redirecting...");
				// Use router for client-side navigation
				router.push("/dashboard");
			}
		} catch (err) {
			toast.error(
				err instanceof Error ? err.message : "Failed to login.",
			);
		} finally {
			setIsSubmitting(false);
		}
	}

	return (
		<div className={cn("flex flex-col gap-6", className)} {...props}>
			<Card>
				<CardHeader>
					<CardTitle>Login to your account</CardTitle>
					<CardDescription>
						Enter your email below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form
						onSubmit={form.handleSubmit(onSubmit)}
						className="space-y-6"
					>
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
									{fieldState.invalid && (
										<FieldError
											errors={[fieldState.error]}
										/>
									)}
								</Field>
							)}
						/>

						<Controller
							name="password"
							control={form.control}
							render={({ field, fieldState }) => (
								<Field data-invalid={fieldState.invalid}>
									<div className="flex items-center justify-between">
										<FieldLabel htmlFor={field.name}>
											Password
										</FieldLabel>
										<Link
											href="#"
											className="text-sm underline-offset-4 hover:underline"
										>
											Forgot your password?
										</Link>
									</div>
									<Input
										{...field}
										id={field.name}
										type="password"
										aria-invalid={fieldState.invalid}
										autoComplete="current-password"
									/>
									{fieldState.invalid && (
										<FieldError
											errors={[fieldState.error]}
										/>
									)}
								</Field>
							)}
						/>

						<Button
							type="submit"
							disabled={isSubmitting || !form.formState.isValid}
							className="w-full"
						>
							{isSubmitting ? "Logging in..." : "Login"}
						</Button>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
