"use client";

import {
	FolderIcon,
	MoreHorizontalIcon,
	ShareIcon,
	Trash2Icon,
} from "lucide-react";
import Link from "next/link";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarGroup,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuAction,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";

/**
 * NavProjects - Client Component
 *
 * Renders a list of projects within a sidebar navigation. Each project is displayed
 * with an icon and name, and includes a dropdown menu for additional actions
 * like viewing, sharing, or deleting the project. The component adapts its layout
 * based on the sidebar's mobile state.
 *
 * @param projects - An array of project objects, each containing `name`, `url`, and `icon`.
 */
export function NavProjects({
	projects,
}: {
	projects: {
		name: string;
		url: string;
		icon: React.ReactNode;
	}[];
}) {
	const { isMobile } = useSidebar();
	return (
		<SidebarGroup className="group-data-[collapsible=icon]:hidden">
			<SidebarGroupLabel>Projects</SidebarGroupLabel>
			<SidebarMenu>
				{projects.map((item) => (
					<SidebarMenuItem key={item.name}>
						<SidebarMenuButton render={<Link href={item.url} />}>
							{item.icon}
							<span>{item.name}</span>
						</SidebarMenuButton>
						<DropdownMenu>
							<DropdownMenuTrigger
								render={
									<SidebarMenuAction
										showOnHover
										className="aria-expanded:bg-muted"
									/>
								}
							>
								<MoreHorizontalIcon />
								<span className="sr-only">More</span>
							</DropdownMenuTrigger>
							<DropdownMenuContent
								className="w-48"
								side={isMobile ? "bottom" : "right"}
								align={isMobile ? "end" : "start"}
							>
								<DropdownMenuItem>
									<FolderIcon className="text-muted-foreground" />
									<span>View Project</span>
								</DropdownMenuItem>
								<DropdownMenuItem>
									<ShareIcon className="text-muted-foreground" />
									<span>Share Project</span>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem>
									<Trash2Icon className="text-muted-foreground" />
									<span>Delete Project</span>
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</SidebarMenuItem>
				))}
			</SidebarMenu>
		</SidebarGroup>
	);
}
