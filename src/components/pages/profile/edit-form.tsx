"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
import { updateProfile } from "@/actions/profile.action";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { ROLES } from "@/constants";

/**
 * Props for the ProfileEditForm component.
 */
interface ProfileEditFormProps {
	/** The user's name as currently stored in the database. */
	initialName: string;
	/** The user's primary focus or role. */
	initialRole: string;
	/** The seed for the currently selected DiceBear avatar. */
	currentImage: string;
	/** The user's email address (read-only). */
	email: string;
}

/**
 * Profile Edit Form (Client Component)
 *
 * Provides a form for users to update their display name and primary focus.
 * It handles both the server-side update and the client-side session synchronization.
 */
export function ProfileEditForm({
	initialName,
	initialRole,
	currentImage,
	email,
}: ProfileEditFormProps) {
	const { update } = useSession();
	const router = useRouter();
	const [isSaving, setIsSaving] = useState(false);
	const [displayName, setDisplayName] = useState(initialName);
	const [role, setRole] = useState(initialRole);

	const handleSaveChanges = async () => {
		try {
			setIsSaving(true);

			const result = await updateProfile({
				name: displayName,
				avatar: currentImage,
				role: role,
			});

			if (result.error) {
				toast.error(result.error);
			} else {
				/**
				 * Update the client-side session to ensure the UI reflects changes
				 * immediately across the application without a full page reload.
				 */
				await update({
					name: displayName,
					avatar: currentImage,
					role: role,
				});
				toast.success("Profile updated successfully!");

				// Refresh the current route to fetch updated data from the server.
				router.refresh();
			}
		} catch (e) {
			toast.error("Failed to save changes");
		} finally {
			setIsSaving(false);
		}
	};

	const handleRoleChange = (value: string | null) => {
		if (value) {
			setRole(value);
		}
	};

	return (
		<Card>
			<CardHeader>
				<CardTitle>Edit Profile</CardTitle>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="grid gap-2">
					<Label htmlFor="displayName">Display Name</Label>
					<Input
						id="displayName"
						value={displayName}
						onChange={(e) => setDisplayName(e.target.value)}
						placeholder="How should we call you?"
						autoComplete="off"
					/>
				</div>

				<div className="grid gap-2">
					<Label htmlFor="email">Email Address</Label>
					<Input
						id="email"
						value={email}
						disabled
						className="bg-muted/50 cursor-not-allowed"
					/>
					<p className="text-xs text-muted-foreground">
						{email?.includes("@")
							? "Connected via OAuth"
							: "Email is read-only"}
					</p>
				</div>

				<div className="grid gap-2">
					<Label htmlFor="role">Primary Focus</Label>
					<Select value={role} onValueChange={handleRoleChange}>
						<SelectTrigger id="role">
							<SelectValue placeholder="Select your focus area" />
						</SelectTrigger>
						<SelectContent>
							{ROLES.map((role) => (
								<SelectItem key={role} value={role}>
									{role}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</CardContent>
			<CardFooter>
				<Button
					onClick={handleSaveChanges}
					disabled={isSaving}
					className="w-full md:w-auto"
				>
					{isSaving ? "Saving..." : "Save Changes"}
				</Button>
			</CardFooter>
		</Card>
	);
}
