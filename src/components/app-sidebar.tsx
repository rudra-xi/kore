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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
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
				<NavUser user={APP_SIDEBAR_DATA.user} />
			</SidebarFooter>
		</Sidebar>
	);
}
