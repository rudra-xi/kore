"use client";

import { AvatarPicker } from "./avatar-picker";

/**
 * Props for the ProfileUserCard component.
 */
interface ProfileUserCardProps {
	displayName: string;
	email: string;
	role: string;
	currentImage: string;
	onImageSelect: (seed: string) => void;
}

/**
 * Profile User Card (Client Component)
 *
 * Displays a summary of the user's profile information, including their
 * name, email, role, and an interactive avatar selection component.
 */
export function ProfileUserCard({
	displayName,
	email,
	role,
	currentImage,
	onImageSelect,
}: ProfileUserCardProps) {
	return (
		<div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 rounded-xl border bg-card">
			<AvatarPicker
				selectedSeed={currentImage}
				onSelect={onImageSelect}
			/>
			<div className="space-y-1 text-left md:text-right lg:text-right">
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
					{displayName || "User"}
				</h2>
				<p className="text-sm text-muted-foreground">{email}</p>
				{role && (
					<div className="mt-2">
						<span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
							{role}
						</span>
					</div>
				)}
			</div>
		</div>
	);
}
