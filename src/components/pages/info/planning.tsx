import { Target } from "lucide-react";

export function Planning() {
	return (
		<>
			<h2 className="text-3xl font-bold mt-16 mb-6 flex items-center group">
				<Target className="mr-3 text-primary/60 group-hover:text-primary transition-colors" />
				The Planning
			</h2>
			<p className="text-muted-foreground">
				I decided to build Kore with one goal:{" "}
				<span className="text-foreground font-bold underline decoration-primary/40 underline-offset-4">
					Zero Friction.
				</span>{" "}
				I didn't want a tool that felt like work. I wanted a centralized
				"second brain" that felt like an extension of my IDE—accessible,
				fast, and visually clean.
			</p>
		</>
	);
}
