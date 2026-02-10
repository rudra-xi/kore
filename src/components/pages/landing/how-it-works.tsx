import { Card, CardContent } from "@/components/ui/card";
import { STEPS_HIW } from "@/constants";

export function HowItWorks() {
	return (
		<section id="how-it-works" className="py-24">
			<div className="container px-4 mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-bold uppercase tracking-tight">
						How it works
					</h2>
					<p className="text-muted-foreground mt-2">
						The fastest path from concept to code.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{STEPS_HIW.map((step, index) => (
						<Card
							key={step.title}
							className="relative overflow-hidden border-none bg-background/50 backdrop-blur-sm hover:-translate-y-1.5 base-transition"
						>
							<CardContent className="pt-8 text-center md:text-left">
								<div className="mb-4 inline-flex p-3 rounded-md bg-primary/10">
									{step.icon}
								</div>
								<h3 className="text-xl font-bold mb-2">
									{step.title}
								</h3>
								<p className="text-muted-foreground">
									{step.description}
								</p>
								<span className="absolute -bottom-4 -right-2 text-8xl font-black text-primary/25 select-none">
									{index + 1}
								</span>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
