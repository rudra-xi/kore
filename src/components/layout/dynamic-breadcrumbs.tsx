"use client";

import { usePathname } from "next/navigation";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

/**
 * Client Component: DynamicBreadcrumbs
 *
 * Renders a dynamic breadcrumb navigation system that automatically
 * generates breadcrumb items based on the current URL pathname. The
 * component intelligently handles both active page indicators and
 * clickable navigation links for parent pages.
 *
 * Key Features:
 * - Automatically parses URL segments to create breadcrumb hierarchy
 * - Shows current page as non-clickable with primary styling
 * - Displays parent pages as clickable navigation links
 * - Responsive design with mobile-first approach (hides separators on mobile)
 * - Smooth transitions and hover states for better UX
 */
export function DynamicBreadcrumbs() {
	const pathname = usePathname();

	// Split path into segments: /dashboard/snippets -> ['dashboard', 'snippets']
	// Filter out empty strings from leading/trailing slashes
	const segments = pathname.split("/").filter((item) => item !== "");

	return (
		<header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[data-collapsible=icon]/sidebar-wrapper:h-12">
			<div className="flex items-center gap-2 pl-1">
				<Breadcrumb>
					<BreadcrumbList>
						{segments.map((segment, index) => {
							const href = `/${segments.slice(0, index + 1).join("/")}`;
							const isLast = index === segments.length - 1;
							const title =
								segment.charAt(0).toUpperCase() +
								segment.slice(1);

							return (
								<React.Fragment key={href}>
									<BreadcrumbItem className="text-xs">
										{isLast ? (
											<>
												<BreadcrumbSeparator className="hidden md:block" />
												<BreadcrumbPage
													className={"text-primary"}
												>
													{title}
												</BreadcrumbPage>
											</>
										) : (
											<BreadcrumbLink
												href={href}
												className="hidden md:block"
											>
												{title}
											</BreadcrumbLink>
										)}
									</BreadcrumbItem>
								</React.Fragment>
							);
						})}
					</BreadcrumbList>
				</Breadcrumb>
			</div>
		</header>
	);
}
