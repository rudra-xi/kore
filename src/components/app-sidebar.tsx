"use client";

import {
	BookOpenIcon,
	Code2Icon,
	FolderGit2Icon,
	Grid2X2Icon,
	LayoutDashboardIcon,
	SendIcon,
	Settings2Icon,
	SparklesIcon,
	WrenchIcon,
} from "lucide-react";
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

const data = {
	user: {
		// TODO: wire with auth/user from server/db
		name: "rudra-xi",
		email: "m@example.com",
		avatar: "/avatars/rudra.jpg",
	},

	navMain: [
		{
			title: "Dashboard",
			url: "/dashboard",
			icon: <LayoutDashboardIcon />,
			isActive: true,
			items: [
				{
					title: "Overview",
					url: "/dashboard",
				},
				{
					title: "Recent",
					url: "/dashboard/recent",
				},
				{
					title: "Favorites",
					url: "/dashboard/favorites",
				},
			],
		},
		{
			title: "Snippets",
			url: "/snippets",
			icon: <Code2Icon />,
			items: [
				{
					title: "My Snippets",
					url: "/snippets",
				},
				{
					title: "Common Snippets",
					url: "/snippets/common",
				},
				{
					title: "Tags",
					url: "/snippets/tags",
				},
			],
		},
		{
			title: "Library",
			url: "/library",
			icon: <FolderGit2Icon />,
			items: [
				{
					title: "Collections",
					url: "/collections",
				},
				{
					title: "Templates",
					url: "/templates",
				},
				{
					title: "Archive",
					url: "/archive",
				},
			],
		},
		{
			title: "Settings",
			url: "/settings",
			icon: <Settings2Icon />,
			items: [
				{
					title: "General",
					url: "/settings",
				},
				{
					title: "Editor",
					url: "/settings/editor",
				},
				{
					title: "Appearance",
					url: "/settings/appearance",
				},
			],
		},
	],

	navSecondary: [
		{
			title: "Help & Docs",
			url: "/help",
			icon: <BookOpenIcon />,
		},
		{
			title: "Feedback",
			url: "/feedback",
			icon: <SendIcon />,
		},
	],

	projects: [
		{
			name: "React Snippets",
			url: "/collections/react",
			icon: <Grid2X2Icon />,
		},
		{
			name: "Next.js Snippets",
			url: "/collections/nextjs",
			icon: <SparklesIcon />,
		},
		{
			name: "Utilities",
			url: "/collections/utils",
			icon: <WrenchIcon />,
		},
	],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar variant="sidebar" {...props}>
			<SidebarHeader>
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton size="lg" render={<Link href="#" />}>
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
				<NavMain items={data.navMain} />
				<NavProjects projects={data.projects} />
				<NavSecondary items={data.navSecondary} className="mt-auto" />
			</SidebarContent>
			<SidebarFooter>
				<NavUser user={data.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
