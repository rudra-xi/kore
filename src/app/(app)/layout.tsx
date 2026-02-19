import { AppSidebar } from "@/components/app-sidebar";
import { DynamicBreadcrumbs, Footer, ThemeToggle } from "@/components/layout";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

export default async function MainAppLayout({
	children,
}: {
	children: ReactNode;
}) {
	const session = await auth();
	if (!session) {
		redirect("/");
	}
	const user = {
		name: session?.user?.name || "User",
		email: session?.user?.email || "",
		avatar: session?.user?.image || "",
	};
	return (
		<SidebarProvider>
			<AppSidebar user={user} />
			<SidebarInset>
				{/* Sticky header for the dashboard */}
				<header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
					<div className={"flex items-center justify-center"}>
						<SidebarTrigger />
						<div className="h-4 w-px bg-border mx-2" />
						<DynamicBreadcrumbs />
					</div>
					<div className={"flex items-center justify-center"}>
						<div className="h-4 w-px bg-border mx-2" />
						<ThemeToggle />
					</div>
				</header>

				{/* Main Content Area */}
				<main className="flex flex-1 flex-col gap-4 p-4">
					{children}
				</main>

				<Footer />
			</SidebarInset>
		</SidebarProvider>
	);
}
