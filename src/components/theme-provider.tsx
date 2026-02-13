"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";

/**
 * ThemeProvider - Client Component
 *
 * Orchestrates theme management (light, dark, system) for the application.
 * By wrapping the third-party `next-themes` provider, it centralizes theme
 * configuration and ensures consistent attribute application across the DOM
 * while preventing hydration mismatches.
 *
 * @param props - Inherits all configuration props from `next-themes`, such as
 * `attribute`, `defaultTheme`, and `enableSystem`.
 */
export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
