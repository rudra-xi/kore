import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Snippets",
};

export default function SnippetLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
