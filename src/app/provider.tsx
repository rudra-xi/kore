import type { ReactNode } from "react";
import { ThemeProvider } from "@/components";

export default function Provider({ children }: { children: ReactNode }) {
	return (
		<div>
			<ThemeProvider
				attribute={"class"}
				defaultTheme="dark"
				disableTransitionOnChange
			>
				{children}
			</ThemeProvider>
		</div>
	);
}
