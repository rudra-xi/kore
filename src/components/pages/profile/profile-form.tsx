"use client";

import { useState } from "react";
import { ProfileEditForm } from "./edit-form";
import { ProfileUserCard } from "./user-card";

/**
 * Profile Form (Client Component)
 *
 * A simplified wrapper that synchronizes the avatar state between the
 * preview card and the edit form. Used in layouts where the full activity
 * stats are not required.
 */
export function ProfileForm({
	user,
}: {
	/** The user object containing profile information to be displayed and edited. */
	user: {
		name: string;
		email: string;
		avatar: string;
		role: string;
	};
}) {
	const [currentImage, setCurrentImage] = useState(user.avatar || "kane");

	return (
		<>
			<ProfileUserCard
				displayName={user.name}
				email={user.email}
				role={user.role}
				currentImage={currentImage}
				onImageSelect={setCurrentImage}
			/>
			<ProfileEditForm
				initialName={user.name}
				initialRole={user.role}
				currentImage={currentImage}
				email={user.email}
			/>
		</>
	);
}
