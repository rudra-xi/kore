import { LayoutDashboardIcon, LogIn, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { logo } from "@/assets";
import { LoginDialog, SignUpDialog, ThemeToggle } from "@/components/layout";
import { auth } from "@/lib/auth";
import { Button } from "../ui/button";

/**
 * Navigation component
 * @description A server component that renders the primary navigation header, fixed at the top of the viewport.
 * Contains branding, theme switching, and navigation to authentication routes.
 * @returns The navigation header with conditional rendering based on user authentication status.
 */
export const Navigation = async () => {
	/**
	 * Fetches the current user session from the authentication provider.
	 * This async call is necessary to determine whether to show dashboard or login/signup options.
	 * @returns The user session object or null if not authenticated.
	 */
	const session = await auth();
	return (
		<nav
			className={
				"px-4 md:px-8 lg:px-10 py-2 w-full bg-background fixed top-0 left-0 drop-shadow-sm z-40"
			}
		>
			<div className={"flex items-center justify-between"}>
				{/* Left Section: Logo & Name */}
				<div className={"flex items-end space-y-1"}>
					<Image src={logo} alt="Logo" className="size-12" />
					<span className={"text-3xl font-black"}>ore</span>
				</div>
				{/* Right Section: Theme Switch & SignUp Links */}
				<div
					className={
						" flex items-center justify-center space-x-3 md:space-x-5 lg:space-x-5 text-sm"
					}
				>
					<ThemeToggle />
					{session ? (
						<Link href="/dashboard">
							<Button size="sm">
								<LayoutDashboardIcon />
								Dashboard
							</Button>
						</Link>
					) : (
						<div className={"flex space-x-4"}>
							<LoginDialog
								trigger={
									<Button
										variant="secondary"
										size="sm"
										className="cursor-pointer"
									>
										<LogIn className="mr-1" />
										<span>Login</span>
									</Button>
								}
							/>

							<SignUpDialog
								trigger={
									<Button
										size="sm"
										className="cursor-pointer"
									>
										<User className="mr-0.5" />
										<span>Sign Up</span>
									</Button>
								}
							/>
						</div>
					)}
				</div>
			</div>
		</nav>
	);
};
