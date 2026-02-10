"use client";

import { Copy, Github, Mail } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { FOOTER_LINK_DATA } from "@/constants";
import { Button } from "../ui/button";

/**
 * Renders the application footer containing open-source links, contact information, and site navigation.
 * This is a 'Client Component' to handle interactive elements like email clipboard copying.
 */
export const Footer = () => {
	const currentYear: number = new Date().getFullYear();

	const copyEmail = async () => {
		const email: string = "xi.rudra.code@gmail.com";

		try {
			// Check if the clipboard API is available
			if (navigator.clipboard && window.isSecureContext) {
				await navigator.clipboard.writeText(email);
				toast.success("Email copied to clipboard!");
			} else {
				// Fallback for non-HTTPS or older mobile browsers
				const textArea = document.createElement("textarea");
				textArea.value = email;
				document.body.appendChild(textArea);
				textArea.select();
				document.execCommand("copy");
				document.body.removeChild(textArea);
				toast.success("Email copied to clipboard!");
			}
		} catch (err: any) {
			toast.error("Failed to copy email.", err.message);
		}
	};

	return (
		<footer className="w-full border-t py-12 px-6 bg-background">
			<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
				{/* Left Section: CTA */}
				<div className="space-y-6 max-w-md">
					<div className="space-y-2">
						<h2 className="text-4xl font-black uppercase text-primary">
							Open Source
						</h2>
						<p className="text-muted-foreground text-sm leading-snug">
							Found a bug or want to suggest a feature? Let's
							collaborate on GitHub.
						</p>
					</div>

					<div className="flex flex-col space-y-4 w-full max-w-sm">
						<Button
							variant="default"
							size="lg"
							className="group w-fit px-4 hover:translate-x-1 transition-all duration-300"
						>
							<Link
								href="https://github.com/rudra-xi/kore"
								target="_blank"
								className={"flex items-center justify-center"}
							>
								<Github className="mr-2 size-4" />
								GitHub
							</Link>
						</Button>

						{/* Divider */}
						<div className="flex items-center gap-2">
							<div className="h-px flex-1 bg-border" />
							<span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
								Or Get In Touch
							</span>
							<div className="h-px flex-1 bg-border" />
						</div>

						<Button
							variant="outline"
							size="lg"
							className="group w-full justify-between text-sm cursor-pointer"
							onClick={copyEmail}
						>
							<div className="flex items-center">
								<Mail className="mr-2 h-4 w-4 opacity-60" />
								xi.rudra.code@gmail.com
							</div>
							<Copy className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
						</Button>
					</div>
				</div>

				{/* Right Section: Links */}
				<div className="grid grid-cols-2 gap-16 md:gap-24">
					<nav className="flex flex-col space-y-4">
						<span className="text-sm font-bold text-primary/60 uppercase tracking-widest">
							Quick Links
						</span>
						<ul className="space-y-2 text-sm font-medium">
							{FOOTER_LINK_DATA.map(({ title, href }) => (
								<li key={title}>
									<Link
										href={href}
										className="transition-colors hover:text-primary"
									>
										{title}
									</Link>
								</li>
							))}
						</ul>
					</nav>

					<nav className="flex flex-col space-y-4">
						<span className="text-sm font-bold text-primary/60 uppercase tracking-widest">
							Information
						</span>
						<ul className="space-y-2 text-sm font-medium">
							<li>
								<Link
									href="/terms"
									className="transition-colors hover:text-primary"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href="/privacy"
									className="transition-colors hover:text-primary"
								>
									Privacy Policy
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
			{/* Bottom Section: Copyright and dev info */}
			<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border/40">
				<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-muted-foreground">
					<p>&copy; {currentYear} rudra-xi. All rights reserved.</p>
					<p className="flex items-center gap-1">
						Built for developers by{" "}
						<span className="text-primary hover:underline cursor-pointer">
							rudra-xi
						</span>
					</p>
				</div>
			</div>
		</footer>
	);
};
