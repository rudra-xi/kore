import { Brush, Code2, Cpu, Database, Layers, Palette } from "lucide-react";

const techStackItems = [
	{
		icon: Code2,
		title: "Next.js & TS",
		description:
			"The foundation. Chosen for Server Components, speed, and strict type safety to prevent production bugs.",
	},
	{
		icon: Palette,
		title: "Shadcn UI",
		description:
			"BaseUI-based primitives that allowed me to build a professional-grade interface without reinventing the wheel.",
	},
	{
		icon: Database,
		title: "Prisma & Supabase",
		description:
			"Type-safe database ORM with Prisma, backed by Supabase's powerful Postgres and real-time capabilities.",
	},
	{
		icon: Layers,
		title: "Lucide React",
		description:
			"A beautiful, consistent icon set that gives Kore its distinct, developer-centric visual language.",
	},
	{
		icon: Brush,
		title: "Tailwind CSS",
		description:
			"For rapid styling and a design system that scales without the CSS bloat.",
	},
] as const;

export function TechStack() {
	return (
		<>
			<h2 className="text-3xl font-bold mt-16 mb-8 flex items-center group">
				<Cpu className="mr-3 text-primary/60 group-hover:text-primary transition-colors" />
				The Tech Stack
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
				{techStackItems.map((item) => (
					<div
						key={item.title}
						className="p-6 rounded-2xl bg-secondary/20 border border-border/50"
					>
						<div className="flex items-center gap-3 mb-2 text-primary">
							<item.icon className="size-5" />
							<h3 className="font-bold">{item.title}</h3>
						</div>
						<p className="text-sm text-muted-foreground">
							{item.description}
						</p>
					</div>
				))}
			</div>
		</>
	);
}
