"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { AppSidebar } from "@/components/app-sidebar";
import { Footer, Navigation } from "@/components/layout";
import { ThemeProvider } from "@/components/theme-provider";
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/sonner";
import { AppProvider } from "@/context";

export default function LayoutProvider({ children }: { children: ReactNode }) {
	const pathname: string = usePathname();

	// Define paths that should NOT show the Sidebar
	const noSidebarPaths = ["/", "/login", "/register"];
	const hideSidebar = noSidebarPaths.includes(pathname);

	return (
		<AppProvider>
			<ThemeProvider attribute="class" defaultTheme="dark">
				{hideSidebar ? (
					/* Landing / Auth Layout (No Sidebar) */
					<div className="flex min-h-screen flex-col">
						<Navigation />
						<main className="flex-1 mt-16">{children}</main>
						<Footer />
					</div>
				) : (
					/* Dashboard/App Layout (With Sidebar) */
					<SidebarProvider>
						<AppSidebar />
						<SidebarInset>
							<header className="flex h-16 shrink-0 items-center gap-2 px-4">
								<SidebarTrigger className="-ml-2 -mt-2" />
							</header>
							<div className="flex flex-1 flex-col gap-4 p-4 pt-0">
								{children}
							</div>
							<Footer />
						</SidebarInset>
					</SidebarProvider>
				)}
				<Toaster position="top-center"/>
			</ThemeProvider>
		</AppProvider>
	);
}
