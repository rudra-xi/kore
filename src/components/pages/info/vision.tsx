import { Zap } from "lucide-react";

export function Vision() {
	return (
		<>
			<h2 className="text-3xl font-bold mt-20 mb-6 flex items-center group">
				<Zap className="mr-3 text-primary/60 group-hover:text-primary transition-colors" />
				The Vision
			</h2>
			<p className="text-lg text-foreground bg-primary/5 p-8 rounded-3xl border border-primary/10 shadow-inner">
				The ultimate goal of Kore is simple:{" "}
				<span className="font-black italic">
					Give time back to the developer.
				</span>{" "}
				By reducing the cognitive load of finding or rewriting code from
				scratch, Kore allows you to focus on the{" "}
				<strong>architectural challenges</strong> and{" "}
				<strong>creative logic</strong> that actually matter. It’s about
				moving from "Where did I write that?" to "It's right here" in
				less than 2 seconds.
			</p>
		</>
	);
}
