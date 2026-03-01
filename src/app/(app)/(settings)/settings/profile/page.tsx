import type { Metadata } from "next";
import { MainHeader } from "@/components/layout";
import { ProfileClientWrapper } from "@/components/pages";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

/**
 * Generates dynamic metadata for the profile page.
 * Fetches the current session to personalize the page title with the user's name.
 */
export async function generateMetadata(): Promise<Metadata> {
	const session = await auth();

	return {
		title: `${session?.user?.name ?? "User"}'s Profile | Kore`,
		description: `Manage your profile and view your activity across Kore.`,
	};
}

/**
 * Profile Settings Page (Server Component)
 *
 * Renders the user profile management interface. This component fetches extended user
 * details from the database to provide a complete profile state for the client wrapper.
 */
export default async function Profile() {
	const session = await auth();

	/**
	 * Fetch fresh user data from the database.
	 * This ensures we have access to fields like 'role' and 'avatar' that might
	 * not be fully populated or up-to-date within the session cookie.
	 */
	const dbUser = await prisma.user.findUnique({
		where: { email: session?.user?.email ?? "" },
		select: {
			name: true,
			email: true,
			avatar: true,
			role: true,
		},
	});

	const userData = {
		name: dbUser?.name ?? session?.user?.name ?? "",
		email: dbUser?.email ?? session?.user?.email ?? "",
		avatar: dbUser?.avatar ?? "kane",
		role: dbUser?.role ?? "",
	};

	return (
		<section className="container max-w-6xl py-10">
			<MainHeader
				title="Profile"
				description="Manage how you show up in Kore."
			/>

			<ProfileClientWrapper user={userData} />
		</section>
	);
}
