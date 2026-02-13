import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";

/**
 * Retrieves a user record from the database by their unique email address.
 * Used primarily during authentication flows to verify existence or credentials.
 */
export const getUserByEmail = async (email: string) => {
	return await prisma.user.findUnique({ where: { email } });
};

interface CreateAuthUserData {
	name: string;
	email: string;
	password: string;
}

/**
 * Creates a new user record with a hashed password.
 * @param data - Contains the plaintext password which is hashed before storage.
 * @returns The newly created user object.
 */
export const createAuthUser = async (data: CreateAuthUserData) => {
	const hashedPassword = await bcrypt.hash(data.password, 10);
	return await prisma.user.create({
		data: {
			name: data.name,
			email: data.email,
			password: hashedPassword,
		},
	});
};
