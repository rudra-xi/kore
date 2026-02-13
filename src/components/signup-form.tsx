import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { signUpAction } from "@/actions/auth-action";
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
	FieldGroup,
	FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

/**
 * SignupForm - Client Component
 *
 * Renders a form for new user account creation. It integrates with React's
 * `useActionState` hook to manage the state of the `signUpAction` Server Action.
 * This component handles user input for name, email, password, and password confirmation,
 * providing immediate feedback on success or error via toasts and redirecting upon successful signup.
 *
 * @param props - Inherits props from the `Card` component, allowing for customization of its appearance and behavior.
 */
export function SignupForm({ ...props }: React.ComponentProps<typeof Card>) {
	const [state, formAction] = useActionState(signUpAction, null);

	/**
	 * Effect hook to manage side effects based on the signup action state.
	 * - If `state.success` is true, a success toast is shown, and the user is redirected to the dashboard.
	 * - If `state.error` is present, an error toast is displayed with the error message.
	 *
	 * @dependency state - The effect re-runs whenever the `state` object changes, ensuring UI updates reflect the latest action result.
	 */
	useEffect(() => {
		if (state?.success) {
			toast.success("Account Created! Redirecting...");
			// Use this for a clean break from the Landing Page Modal
			window.location.href = "/dashboard";
		}
		if (state?.error) {
			toast.error(state.error);
		}
	}, [state]);

	return (
		<Card {...props}>
			<CardHeader>
				<CardTitle>Create an account</CardTitle>
				<CardDescription>
					Enter your information below to create your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form action={formAction}>
					<FieldGroup>
						<Field>
							<FieldLabel htmlFor="name">Full Name</FieldLabel>
							<Input
								name="name"
								id="name"
								type="text"
								placeholder="John Doe"
								required
							/>
						</Field>
						<Field>
							<FieldLabel htmlFor="email">Email</FieldLabel>
							<Input
								name="email"
								id="email"
								type="email"
								placeholder="m@example.com"
								required
							/>
							<FieldDescription>
								We&apos;ll use this to contact you. We will not
								share your email with anyone else.
							</FieldDescription>
						</Field>
						<Field>
							<FieldLabel htmlFor="password">Password</FieldLabel>
							<Input
								name="password"
								id="password"
								type="password"
								required
							/>
							<FieldDescription>
								Must be at least 8 characters long.
							</FieldDescription>
						</Field>
						<Field>
							<FieldLabel htmlFor="confirm-password">
								Confirm Password
							</FieldLabel>
							<Input
								name="confirm-password"
								id="confirm-password"
								type="password"
								required
							/>
							<FieldDescription>
								Please confirm your password.
							</FieldDescription>
						</Field>
						<FieldGroup>
							<Field>
								<Button type="submit">Create Account</Button>
							</Field>
						</FieldGroup>
					</FieldGroup>
				</form>
			</CardContent>
		</Card>
	);
}
