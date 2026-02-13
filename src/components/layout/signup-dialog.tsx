"use client";

import { SignupForm } from "../signup-form";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

/**
 * SignUpDialog component
 * @description A client component that renders a signup dialog with a trigger element.
 * @param {SignupDialogProps} props - Component props
 * @param {React.ReactElement | ((props: any) => React.ReactElement)} props.trigger - The element or function that triggers the dialog
 * @returns A dialog containing the SignupForm component
 */
interface SignupDialogProps {
	trigger: React.ReactElement | ((props: any) => React.ReactElement);
}

export const SignUpDialog = ({ trigger }: SignupDialogProps) => {
	return (
		<div>
			<Dialog>
				<DialogTrigger render={trigger} />
				<DialogContent showCloseButton={false}>
					<SignupForm />
				</DialogContent>
			</Dialog>
		</div>
	);
};
