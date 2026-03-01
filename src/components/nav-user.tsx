"use client";

import { ChevronsUpDownIcon, LogOutIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast } from "sonner";
import { logoutAction } from "@/actions/auth.action";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuGroup,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "@/components/ui/sidebar";

export function NavUser({
	user: initialUser,
}: {
	user: {
		name: string;
		email: string;
		avatar: string;
	};
}) {
	const { isMobile } = useSidebar();
	const router = useRouter();
	const [isLoggingOut, setIsLoggingOut] = useState(false);

	// Get session data for real-time updates
	const { data: session, status } = useSession();

	// Use session data if available (it updates after profile changes), otherwise fall back to props
	const user = session?.user || initialUser;

	const initials =
		user.name
			?.split(" ")
			.map((n) => n[0])
			.join("")
			.toUpperCase()
			?.slice(0, 2) || "U";

	const handleLogout = async () => {
		try {
			setIsLoggingOut(true);

			toast.loading("Logging out...", {
				id: "logout-toast",
			});

			await logoutAction();

			toast.success("Logged out successfully!", {
				id: "logout-toast",
				description: "See you next time!",
			});

			router.push("/");
			router.refresh();
		} catch (error) {
			toast.error("Failed to log out", {
				id: "logout-toast",
				description: "Please try again.",
			});
		} finally {
			setIsLoggingOut(false);
		}
	};

	const avatarUrl = user.avatar
		? `https://api.dicebear.com/9.x/lorelei/svg?seed=${user.avatar}&radius=50`
		: `https://api.dicebear.com/9.x/lorelei/svg?seed=Kane&radius=50`;

	return (
		<SidebarMenu>
			<SidebarMenuItem>
				<DropdownMenu>
					<DropdownMenuTrigger
						render={
							<SidebarMenuButton
								size="lg"
								className="aria-expanded:bg-muted"
							/>
						}
					>
						<Avatar>
							<AvatarImage src={avatarUrl} alt={user.name} />
							<AvatarFallback>{initials}</AvatarFallback>
						</Avatar>
						<div className="grid flex-1 text-left text-sm leading-tight">
							<span className="truncate font-medium">
								{user.name}
							</span>
							<span className="truncate text-xs text-muted-foreground">
								{user.email}
							</span>
						</div>
						<ChevronsUpDownIcon className="ml-auto size-4" />
					</DropdownMenuTrigger>
					<DropdownMenuContent
						className="min-w-56 rounded-lg"
						side={isMobile ? "bottom" : "right"}
						align="end"
						sideOffset={4}
					>
						<DropdownMenuGroup>
							<DropdownMenuLabel className="p-0 font-normal">
								<div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
									<Avatar>
										<AvatarImage
											src={avatarUrl}
											alt={user.name}
										/>
										<AvatarFallback>
											{initials}
										</AvatarFallback>
									</Avatar>
									<div className="grid flex-1 text-left text-sm leading-tight">
										<span className="truncate font-medium">
											{user.name}
										</span>
										<span className="truncate text-xs text-muted-foreground">
											{user.email}
										</span>
									</div>
								</div>
							</DropdownMenuLabel>
						</DropdownMenuGroup>

						<DropdownMenuSeparator />

						<DropdownMenuGroup>
							<DropdownMenuItem
								render={
									<Link
										href="/settings/profile"
										className="flex items-center"
									>
										<User2Icon className="mr-2 size-4" />
										<span>Profile</span>
									</Link>
								}
							/>
						</DropdownMenuGroup>

						<DropdownMenuSeparator />

						<DropdownMenuItem
							className="text-destructive focus:text-destructive data-disabled:opacity-50"
							onClick={handleLogout}
							disabled={isLoggingOut}
						>
							<LogOutIcon className="mr-2 size-4" />
							<span>
								{isLoggingOut ? "Logging out..." : "Log out"}
							</span>
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</SidebarMenuItem>
		</SidebarMenu>
	);
}
