import { ChevronRight, LucideGithub, Rocket } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
	return (
		<section className="relative pt-16 pb-24 lg:pt-32">
			{/* Decorative background glow */}
			<div className="absolute top-0 -z-10 h-full w-full bg-background animate-pulse">
				<div className="absolute bottom-auto left-auto right-0 top-0 h-115 w-155 -translate-x-[10%] translate-y-[40%] rounded-full bg-primary/30 opacity-60 blur-[100px]"></div>
			</div>

			<div className="container px-4 mx-auto text-center md:text-left">
				<div className="max-w-4xl space-y-6">
					<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
						<Rocket className="size-4" />
						<span className="uppercase tracking-widest">
							Code snippets, organized
						</span>
					</div>

					<h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-14 md:leading-21 lg:leading-21 tracking-tighter">
						Stop searching. <br />
						<span className="text-primary/40">Start shipping.</span>
					</h1>

					<p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
						Store, tag, and reuse the code you actually ship. Kore
						is the second brain for your development workflow.
					</p>

					<div className="flex flex-col sm:flex-row gap-4 pt-4">
						<Link
							href="https://github.com/rudra-xi/kore"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="View project's source code on GitHub"
							className=""
						>
							<Button
								variant="default"
								size="lg"
								className="h-12 px-8 text-md font-bold group transition-all duration-300 w-full sm:w-auto cursor-pointer"
							>
								Support On Github
								<LucideGithub className="ml-2 size-5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-muted" />
							</Button>
						</Link>
						<Link href="#how-it-works">
							<Button
								variant="outline"
								size="lg"
								className="h-12 px-8 text-md font-bold group border-primary/20 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300 w-full sm:w-auto cursor-pointer"
							>
								How It Works
								<ChevronRight className="ml-2 size-5 transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary" />
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
