import {
	BadgeInfoIcon,
	BookOpenIcon,
	Code2Icon,
	FolderGit2Icon,
	Grid2X2Icon,
	LayoutDashboardIcon,
	Lightbulb,
	LogIn,
	type LucideIcon,
	Save,
	Search,
	SendIcon,
	Settings2Icon,
	SparklesIcon,
	Star,
	Tags,
	WrenchIcon,
} from "lucide-react";

export interface StepHIW {
	title: string;
	description: string;
	icon?: LucideIcon;
}

export const STEPS_HIW = [
	{
		title: "Sign In",
		description: "Create a secure account in seconds.",
		icon: <LogIn className="size-8 text-primary" />,
	},
	{
		title: "Save Snippets",
		description:
			"Add tags, select languages, and set visibility with a powerful editor.",
		icon: <Save className="size-8 text-primary" />,
	},
	{
		title: "Find Instantly",
		description:
			"Use global search and favorites to grab your code and get back to work.",
		icon: <Search className="size-8 text-primary" />,
	},
];

export interface User {
	name: string;
	email: string;
	avatar: string;
}

export interface NavSubItem {
	title: string;
	url: string;
}

export interface NavMainItem {
	title: string;
	url: string;
	icon: LucideIcon;
	isActive?: boolean;
	items?: NavSubItem[];
}

export interface NavSecondaryItem {
	title: string;
	url: string;
	icon: LucideIcon;
}

export interface ProjectItem {
	name: string;
	url: string;
	icon: LucideIcon;
}

export interface AppData {
	user: User;
	navMain: NavMainItem[];
	navSecondary: NavSecondaryItem[];
	projects: ProjectItem[];
}

export const APP_SIDEBAR_DATA = {
	// NOTE: This is a FALLBACK/DEVELOPMENT user only
	// NOTE: In production, this is overridden by the actual logged-in user from the database
	user: {
		name: "rudra-xi",
		email: "m@example.com",
		avatar: "/avatars/rudra.jpg",
	},

	navMain: [
		{
			title: "Dashboard",
			url: "/dashboard",
			icon: <LayoutDashboardIcon />,
			isActive: true,
			items: [
				{
					title: "Overview",
					url: "/dashboard",
				},
				{
					title: "Recent",
					url: "/dashboard/recent",
				},
				{
					title: "Favorites",
					url: "/dashboard/favorites",
				},
			],
		},
		{
			title: "Snippets",
			url: "/snippets",
			icon: <Code2Icon />,
			items: [
				{
					title: "My Snippets",
					url: "/snippets",
				},
				{
					title: "Common Snippets",
					url: "/snippets/common",
				},
				{
					title: "Tags",
					url: "/snippets/tags",
				},
			],
		},
		{
			title: "Library",
			url: "/library",
			icon: <FolderGit2Icon />,
			items: [
				{
					title: "Collections",
					url: "/collections",
				},
				{
					title: "Templates",
					url: "/templates",
				},
				{
					title: "Archive",
					url: "/archive",
				},
			],
		},
		{
			title: "Settings",
			url: "/settings",
			icon: <Settings2Icon />,
			items: [
				{
					title: "General",
					url: "/settings",
				},
				{
					title: "Editor",
					url: "/settings/editor",
				},
				{
					title: "Appearance",
					url: "/settings/appearance",
				},
			],
		},
	],

	navSecondary: [
		{
			title: "Information",
			url: "/info",
			icon: <BadgeInfoIcon />,
		},
		{
			title: "Help & Docs",
			url: "/help",
			icon: <BookOpenIcon />,
		},
		{
			title: "Feedback",
			url: "/feedback",
			icon: <SendIcon />,
		},
	],

	projects: [
		{
			name: "React Snippets",
			url: "/collections/react",
			icon: <Grid2X2Icon />,
		},
		{
			name: "Next.js Snippets",
			url: "/collections/nextjs",
			icon: <SparklesIcon />,
		},
		{
			name: "Utilities",
			url: "/collections/utils",
			icon: <WrenchIcon />,
		},
	],
};

export interface FooterLink {
	title: string;
	href: string;
}

export const FOOTER_LINK_DATA: FooterLink[] = [
	{ title: "Dashboard", href: "/dashboard" },
	{ title: "Snippets", href: "/snippets" },
	{ title: "Library", href: "/library" },
	{ title: "Collections", href: "/collections" },
];

export interface GettingStartedSteps {
	title: string;
	desc: string;
}

export const GETTING_STARTED_STEPS: GettingStartedSteps[] = [
	{
		title: "Create",
		desc: "Open Kore → New Snippet → choose language → save.",
	},
	{
		title: "Common",
		desc: "Browse community code and add them to your favorites.",
	},
	{
		title: "Search",
		desc: "Use the global search bar or click tags to filter instantly.",
	},
	{
		title: "Dashboard",
		desc: "Pinned snippets automatically appear on your overview.",
	},
];

export interface Faqs {
	q: string;
	a: string;
}

export const FAQS: Faqs[] = [
	{
		q: "What are common snippets?",
		a: "Common snippets are pre-made utility codes available to everyone. You can copy or favorite them to your own library.",
	},
	{
		q: "How do tags work?",
		a: "Tags help categorize code. You can filter your entire library by clicking a tag in the sidebar or search bar.",
	},
	{
		q: "Can I edit a snippet?",
		a: "Yes. Open any snippet you own and click the 'Edit' button to update the code, title, or language.",
	},
];

export interface ShortcutTable {
	action: string;
	key: string;
}

export const TIPS = [
	{
		icon: <Star className="size-4 text-yellow-500" />,
		title: "Pin your daily code",
		desc: "Favorite your most-used snippets to keep them on your dashboard for instant copy-pasting.",
	},
	{
		icon: <Tags className="size-4 text-blue-500" />,
		title: "Smart Tagging",
		desc: "Use tags like #prod or #utility to filter your library faster than searching.",
	},
	{
		icon: <Lightbulb className="size-4 text-primary" />,
		title: "Common Snippets",
		desc: "Don't reinvent the wheel. Check 'Common' for standardized boilerplate code.",
	},
];