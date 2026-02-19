import { Lightbulb, Star, Tags } from "lucide-react";

const tips = [
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

export const FeatureTips = () => (
	<section className="space-y-4">
		<h2 className="text-xl font-bold">Pro-Tips</h2>
		<div className="grid gap-4">
			{tips.map((tip) => (
				<div
					key={tip.title}
					className="flex gap-4 p-4 rounded-lg border bg-card/30"
				>
					<div className="mt-1">{tip.icon}</div>
					<div>
						<h3 className="text-sm font-semibold">{tip.title}</h3>
						<p className="text-xs text-muted-foreground mt-1">
							{tip.desc}
						</p>
					</div>
				</div>
			))}
		</div>
	</section>
);
