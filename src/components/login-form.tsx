import Link from "next/link";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { loginAction } from "@/actions/auth-action";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

/**
 * LoginForm - Client Component
 *
 * Renders a form for user login. It leverages React's `useActionState` hook
 * to manage the state of the `loginAction` Server Action. This component
 * handles user input for email and password, displays appropriate toasts
 * for success or error messages, and redirects the user to the dashboard upon successful login.
 * It also includes a link for password recovery.
 *
 * @param props - Accepts standard HTML div attributes and a `className` prop for custom styling.
 */
export function LoginForm({
	className,
	...props
}: React.ComponentProps<"div">) {
	const [state, formAction] = useActionState(loginAction, null);

	/**
	 * Effect hook to handle side effects based on the login action state.
	 * - If `state.success` is true, a success toast is shown, and the user is redirected to the dashboard.
	 * - If `state.error` is present, an error toast is displayed with the error message.
	 *
	 * @dependency state - The effect re-runs whenever the `state` object changes, ensuring UI updates reflect the latest action result.
	 */
	useEffect(() => {
		if (state?.success) {
			toast.success("Login Successfully! Redirecting...");
			// Use this for a clean break from the Landing Page Modal
			window.location.href = "/dashboard";
		}
		if (state?.error) {
			toast.error(state.error);
		}
	}, [state]);

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
					<form action={formAction}>
						<FieldGroup>
							<Field>
								<FieldLabel htmlFor="email">Email</FieldLabel>
								<Input
									name="email"
									id="email"
									type="email"
									placeholder="m@example.com"
									required
								/>
							</Field>
							<Field>
								<div className="flex items-center">
									<FieldLabel htmlFor="password">
										Password
									</FieldLabel>
									<Link
										href="#"
										className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
									>
										Forgot your password?
									</Link>
								</div>
								<Input
									name="password"
									id="password"
									type="password"
									required
								/>
							</Field>
							<Field>
								<Button type="submit">Login</Button>
							</Field>
						</FieldGroup>
					</form>
				</CardContent>
			</Card>
		</div>
	);
}
