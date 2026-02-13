"use client";

import type * as React from "react";
import { LoginForm } from "../login-form";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

/**
 * LoginDialog component
 * @description A client component that renders a login dialog with a trigger element.
 * @param {LoginDialogProps} props - Component props
 * @param {React.ReactElement | ((props: any) => React.ReactElement)} props.trigger - The element or function that triggers the dialog
 * @returns A dialog containing the LoginForm component
 */
interface LoginDialogProps {
	trigger: React.ReactElement | ((props: any) => React.ReactElement);
}

export const LoginDialog = ({ trigger }: LoginDialogProps) => {
	return (
		<div>
			<Dialog>
				<DialogTrigger render={trigger} />
				<DialogContent showCloseButton={false}>
					<LoginForm />
				</DialogContent>
			</Dialog>
		</div>
	);
};
