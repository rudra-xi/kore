import {
	BadgeInfoIcon,
	BookOpenIcon,
	Code2,
	Code2Icon,
	Edit3,
	FolderGit2Icon,
	GitFork,
	Grid2X2Icon,
	LayoutDashboardIcon,
	LogIn,
	type LucideIcon,
	Save,
	Search,
	SendIcon,
	Settings2Icon,
	SparklesIcon,
	Star,
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

export const FEEDBACK_TYPES = {
	BUG: "Bug Report",
	FEATURE: "Feature Request",
	UI_UX: "UI/UX Feedback",
	PERFORMANCE: "Speed & Performance",
	SECURITY: "Security Concern",
	DOCUMENTATION: "Docs & Tutorials",
	DX: "Developer Experience",
	INTEGRATION: "API & Integrations",
	OTHER: "Other",
};

export const LORELEI_GALLERY = [
	"Kane",
	"Derek",
	"Zoie",
	"Amie",
	"Andrea",
	"Felix",
	"Aneka",
	"Kingston",
	"Nolan",
	"Leah",
	"Eliza",
	"Luis",
];

export const ROLES = [
	"Frontend",
	"Backend",
	"Fullstack",
	"Mobile",
	"DevOps",
	"UI/UX",
	"Other",
] as const;

export const ACTIVITY_ICONS = {
	create: Code2,
	update: Edit3,
	favorite: Star,
	fork: GitFork,
};

export const ACTIVITY_COLORS = {
	create: "text-blue-500",
	update: "text-green-500",
	favorite: "text-yellow-500",
	fork: "text-purple-500",
};
