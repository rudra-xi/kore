"use server";

import { revalidatePath } from "next/cache";
import { auth } from "@/lib/auth";
import { updateUserService } from "@/services/profile.service";

/**
 * Server Action: Updates the current user's profile details.
 *
 * @param data - The profile fields to be updated.
 *   - name: User's display name.
 *   - avatar: Identifier for the user's avatar icon.
 *   - role: User's role within the platform.
 *
 * @returns An object containing the updated user data on success, or an
 * error string on failure (e.g., "Unauthorized" or "Failed to update profile").
 */
export async function updateProfile(data: {
	name?: string;
	avatar?: string;
	role?: string;
}) {
	try {
		const session = await auth();

		if (!session?.user?.email) {
			return { error: "Unauthorized" };
		}

		// Call the service layer to perform the database update.
		const updatedUser = await updateUserService(session.user.email, data);

		/**
		 * Revalidate paths to ensure the UI reflects the updated profile
		 * across both the public profile view and the settings management page.
		 */
		revalidatePath("/profile");
		revalidatePath("/settings/profile");

		return { success: true, user: updatedUser };
	} catch (error) {
		console.error("Profile update error:", error);
		return { error: "Failed to update profile" };
	}
}
