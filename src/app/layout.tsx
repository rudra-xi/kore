import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import LayoutProvider from "./provider";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Kore | Code Snippets Manager",
	description:
		"Kore is a fast, modern platform for developers to store, organize, and reuse their favorite code snippets. Built with Next.js 15.",
	icons: {
		icon: [
			{
				url: "/icon.svg",
				type: "image/svg+xml",
			},
			{
				url: "/favicon.ico",
				sizes: "any",
			},
		],
		apple: "/apple-icon.png",
	},
	authors: [{ name: "rudra-xi", url: "https://rudra-geek-nook.vercel.app/" }],
	creator: "rudra-xi",
	keywords: [
		"Kore snippets",
		"code snippets manager",
		"developer snippets",
		"code storage",
		"Next.js snippets",
		"code organization tool",
		"snippet sharing",
	],
	openGraph: {
		title: "Kore — Your Code Snippets, Organized",
		description:
			"Store, organize, and quickly access your frequently used code snippets with a clean, focused interface featuring syntax highlighting, search, and favorites.",
		url: "https://kore.vercel.app/", // WARN: will change after deploy
		type: "website",
		siteName: "Kore",
		images: [
			{
				url: "https://kore.vercel.app/og-image.jpg", // WARN: will change after deploy
				width: 1200,
				height: 630,
				alt: "Kore – Clean code editor interface with syntax highlighted snippets",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Kore | Code Snippets Manager",
		description:
			"Your personal code snippets vault. Organize, search, and favorite the snippets you use the most.",
		creator: "rudra-xi",
		images: ["https://kore.vercel.app/og-image.jpg"], // WARN: will change after deploy
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistMono.variable} antialiased`}>
				<LayoutProvider>{children}</LayoutProvider>
			</body>
		</html>
	);
}
