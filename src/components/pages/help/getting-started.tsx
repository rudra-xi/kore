import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
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

export const GettingStarted = () => (
	<section>
		<h2 className="text-2xl font-bold mb-6">Getting Started</h2>
		<div className="grid sm:grid-cols-2 gap-4">
			{steps.map((step) => (
				<Card key={step.title} className="bg-card/50">
					<CardHeader className="pb-2">
						<CardTitle className="text-sm flex items-center gap-2">
							<CheckCircle2 className="size-4 text-primary" />{" "}
							{step.title}
						</CardTitle>
					</CardHeader>
					<CardContent className="text-sm text-muted-foreground">
						{step.desc}
					</CardContent>
				</Card>
			))}
		</div>
	</section>
);
