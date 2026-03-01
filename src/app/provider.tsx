"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { AppProvider } from "@/context";
import { SessionProviders } from "./session-provider";

export default function LayoutProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SessionProviders>
			<AppProvider>
				<ThemeProvider attribute="class" defaultTheme="dark">
					{children}
					<Toaster position="top-center" />
				</ThemeProvider>
			</AppProvider>
		</SessionProviders>
	);
}
