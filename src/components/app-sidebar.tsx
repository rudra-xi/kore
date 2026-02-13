"use client";

import Image from "next/image";
import Link from "next/link";
import type * as React from "react";
import { logo } from "@/assets";
import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "@/components/ui/sidebar";
import { APP_SIDEBAR_DATA } from "@/constants";

/**
 * AppSidebar component renders the main sidebar navigation for the application.
 *
 * This is a Client Component that includes user interaction elements such as navigation menus and user profile.
 *
 * @param props - Props for the Sidebar component extended with a user object.
 * @param props.user - The current authenticated user object, used to display user-specific information in the sidebar footer.
 *
 * The sidebar contains:
 * - A header with the application logo linking to the home page.
 * - Main navigation menus for primary app sections and projects.
 * - Secondary navigation menus for additional links.
 * - A footer displaying user information and actions.
 */
export function AppSidebar({
	user,
	...props
}: React.ComponentProps<typeof Sidebar> & { user: any }) {
	return (
		<Sidebar variant="sidebar" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							size="lg"
							render={<Link href="/dashboard" />}
						>
							<div className="bg-sidebar-accent-foreground flex aspect-square size-10 items-center justify-center rounded-lg">
								<Image
									src={logo}
									alt="logo"
									className="size-8"
								/>
							</div>
							<div className="grid flex-1 text-left text-sm leading-tight">
								<span className="truncate font-medium text-2xl">
									Kore
								</span>
							</div>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={APP_SIDEBAR_DATA.navMain} />
				<NavProjects projects={APP_SIDEBAR_DATA.projects} />
				<NavSecondary
					items={APP_SIDEBAR_DATA.navSecondary}
					className="mt-auto"
				/>
			</SidebarContent>
			<SidebarFooter>
				{/* NOTE: This is a FALLBACK/DEVELOPMENT user only coming from
					import { APP_SIDEBAR_DATA } from "@/constants"; */}
				{/* <NavUser user={APP_SIDEBAR_DATA.user} /> */}
				<NavUser user={user} />
			</SidebarFooter>
		</Sidebar>
	);
}
