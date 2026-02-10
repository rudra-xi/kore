import { Button } from "@/components/ui/button";
import { ArrowRight, History, MessageSquareQuote, SearchX } from "lucide-react";
import Link from "next/link";

export function AboutKore() {
	return (
		<section className="pt-24">
			<div className="container px-4 mx-auto">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
							<History className="size-4" />
							<span className="uppercase tracking-widest">
								The Origin Story
							</span>
						</div>

						<h2 className="text-4xl md:text-5xl font-black uppercase leading-tight">
							Tired of Digging <br />
							Through the{" "}
							<span className="text-primary">
								Digital Graveyard?
							</span>
						</h2>

						<div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
							<p>
								Kore wasn’t born in a boardroom. It was born out
								of 2:00 AM frustration.
							</p>
							<p>
								I found myself constantly lost—scrolling through
								endless GitHub repos, scouring old AI chat
								histories, and digging into forgotten projects
								just to find that{" "}
								<span className="text-foreground font-medium italic">
									one specific
								</span>{" "}
								middleware or regex I knew I’d written before.
							</p>
							<p className="font-medium text-foreground">
								I didn't need another complex project manager. I
								needed a second brain for my code.
							</p>
						</div>

						<Link href="/info" className="inline-block pt-4">
							<Button
								variant="link"
								className="px-0 text-md group hover:no-underline"
							>
								Read the full making-of story
								<ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
							</Button>
						</Link>
					</div>

					{/* Visual Representation of the "Lost" feeling */}
					<div className="grid grid-cols-2 gap-4 opacity-70 lg:opacity-100">
						<div className="space-y-4 mt-8">
							<div className="p-6 rounded-2xl bg-muted/50 border border-border flex flex-col items-center text-center gap-3">
								<SearchX className="size-8 text-primary" />
								<p className="text-sm font-medium italic">
									"Where did I put that auth helper?"
								</p>
							</div>
							<div className="p-6 rounded-2xl bg-primary/5 border border-primary/20 flex flex-col items-center text-center gap-3">
								<MessageSquareQuote className="size-8 text-primary" />
								<p className="text-sm font-medium italic">
									Lost in ChatGPT history...
								</p>
							</div>
						</div>
						<div className="space-y-4">
							<div className="p-8 h-full rounded-2xl bg-muted/30 border border-muted-foreground/50 flex flex-col justify-center items-center text-center gap-3">
								<div className="size-12 rounded-full bg-foreground/10 flex items-center justify-center">
									<span className="text-primary font-bold text-xl">
										K
									</span>
								</div>
								<p className="font-bold">The Solution: Kore</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
