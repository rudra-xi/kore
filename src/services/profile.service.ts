import { prisma } from "@/lib/prisma";

/**
 * @description Updates user information in the database.
 * This is a server-side function that interacts with the database to modify user records.
 *
 * @param {string} email - The email address of the user to update.
 * @param {object} data - An object containing the user data to update.
 * @param {string} [data.name] - The new name for the user.
 * @param {string} [data.avatar] - The new avatar URL for the user.
 * @param {string} [data.role] - The new role for the user.
 * @returns {Promise<object>} A promise that resolves to the updated user object, including id, name, email, avatar, and role.
 */

export async function updateUserService(
	email: string,
	data: {
		name?: string;
		avatar?: string;
		role?: string;
	},
) {
	// Business logic like validation or third-party sync goes here
	// Prisma query to update the user record in the database.
	// Returns the updated user object if successful.
	return await prisma.user.update({
		where: { email },
		data: {
			name: data.name,
			avatar: data.avatar,
			role: data.role,
		},
		select: {
			id: true,
			name: true,
			email: true,
			avatar: true,
			role: true,
		},
	});
}
