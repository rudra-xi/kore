import { TIPS } from "@/constants";

export const FeatureTips = () => (
	<section className="space-y-4">
		<h2 className="text-xl font-bold">Pro-Tips</h2>
		<div className="grid gap-4">
			{TIPS.map((tip) => (
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
