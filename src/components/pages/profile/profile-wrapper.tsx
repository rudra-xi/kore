"use client";

import { useState } from "react";
import { ProfileEditForm } from "./edit-form";
import { ProfileStats } from "./profile-stat";
import { RecentActivity } from "./recent-activity";
import { ProfileUserCard } from "./user-card";

/**
 * Props for the ProfileClientWrapper component.
 */
interface ProfileClientWrapperProps {
	/** User details used to initialize the profile management interface. */
	user: {
		name: string;
		email: string;
		/** The seed for the DiceBear avatar generator. */
		avatar: string;
		role: string;
	};
}

/**
 * Profile Client Wrapper (Client Component)
 *
 * Orchestrates the profile page layout by coordinating state between the
 * interactive avatar picker (within ProfileUserCard) and the ProfileEditForm.
 * This shared state ensures that avatar selections are previewed and correctly
 * bundled for the server action update.
 */
export function ProfileClientWrapper({ user }: ProfileClientWrapperProps) {
	const [currentImage, setCurrentImage] = useState(user.avatar || "kane");

	return (
		<>
			{/* Full width User Card */}
			<div className="mb-8">
				<ProfileUserCard
					displayName={user.name}
					email={user.email}
					role={user.role}
					currentImage={currentImage}
					onImageSelect={setCurrentImage}
				/>
			</div>

			{/* Edit Form and Stats in a 2-column grid */}
			<div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
				{/* Left Column: Edit Profile Form (takes 8 columns) */}
				<div className="lg:col-span-8">
					<ProfileEditForm
						initialName={user.name}
						initialRole={user.role}
						currentImage={currentImage}
						email={user.email}
					/>
				</div>

				{/* Right Column: Stats (takes 4 columns) */}
				<div className="lg:col-span-4">
					<ProfileStats />
				</div>
			</div>

			{/* Recent Activity - Full width below */}
			<div className="mt-8">
				<RecentActivity />
			</div>
		</>
	);
}
