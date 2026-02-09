"use client";

import { SignupForm } from "../signup-form";
import {
	Dialog,
	DialogContent,
	DialogDescription, DialogTrigger
} from "../ui/dialog";

export const SignUpDialog = () => {
	return (
		<div>
			<Dialog>
				<DialogTrigger>SignUp</DialogTrigger>
				<DialogContent showCloseButton={false}>
					<DialogDescription>
						<SignupForm />
					</DialogDescription>
				</DialogContent>
			</Dialog>
		</div>
	);
};
