"use client";

import { LogIn, User } from "lucide-react";

import Image from "next/image";

import { logo } from "@/assets";
import { LoginDialog, SignUpDialog, ThemeToggle } from "@/components/layout";
import { Button } from "../ui/button";

/**
 * Renders the primary navigation header, fixed at the top of the viewport.
 * This is a 'Client Component' containing branding, theme switching, and navigation to authentication routes.
 */
export const Navigation = () => {
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
				<div className={"space-x-3 md:space-x-5 lg:space-x-5 text-sm"}>
					<ThemeToggle />
					<Button
						variant={"secondary"}
						size={"sm"}
						className={
							"base-transition hover:scale-105 active:scale-95"
						}
					>
						<LogIn className={"mr-1"} />
						<LoginDialog />
					</Button>

					<Button
						size={"sm"}
						className={
							"base-transition hover:scale-105 active:scale-95"
						}
					>
						<User className={"mr-0.5 md::mr-1 lg:mr-1"} />

						<SignUpDialog />
					</Button>
				</div>
			</div>
		</nav>
	);
};
