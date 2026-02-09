"use client";

import { LoginForm } from "../login-form";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogTrigger,
} from "../ui/dialog";

export const LoginDialog = () => {
	return (
		<div>
			<Dialog>
				<DialogTrigger>Login</DialogTrigger>
				<DialogContent showCloseButton={false}>
					<DialogDescription>
						<LoginForm />
					</DialogDescription>
				</DialogContent>
			</Dialog>
		</div>
	);
};
