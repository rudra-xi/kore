"use client";

import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { AppProvider } from "@/context";

export default function LayoutProvider({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AppProvider>
			<ThemeProvider attribute="class" defaultTheme="dark">
				{children}
				<Toaster position="top-center" />
			</ThemeProvider>
		</AppProvider>
	);
}
