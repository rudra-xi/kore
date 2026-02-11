import {
	Boxes,
	Code2,
	Cpu,
	FileQuestion,
	Layers,
	Palette,
	Target,
	Zap,
} from "lucide-react";

/**
 * Info Page Component
 * 
 * A Server Component that renders the project's background story, technical 
 * architecture, and core philosophy. It utilizes a grid-based layout for 
 * tech stack highlights and consistent Lucide iconography to maintain a 
 * developer-centric aesthetic.
 */
export default function Info() {
	return (
		<section className="flex flex-col section-padding">
			<div className="flex-1 container max-w-7xl">
				<article className="">
					<h1 className="text-6xl md:text-8xl font-black uppercase mb-8 tracking-tighter">
						The Making of <span className="text-primary">Kore</span>
						.
					</h1>

					<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 mb-12">
						"How a developer's worst nightmare—forgetting their own
						logic—turned into an organized reality."
					</p>

					{/* Problem Section */}
					<h2 className="text-3xl font-bold mt-16 mb-6 flex items-center group">
						<FileQuestion className="mr-3 text-primary/60 group-hover:text-primary transition-colors" />
						The Problem
					</h2>
					<p className="text-muted-foreground">
						Every developer has a{" "}
						<span className="text-foreground font-semibold italic">
							"Snippet Graveyard."
						</span>{" "}
						It's that collection of gists, Discord messages sent to
						ourselves, and Notion pages that we never actually
						visit. As AI became part of my workflow, the problem got
						worse. Helpful snippets were buried in thousands of
						lines of chat history, and finding that one specific
						`useEffect` cleanup or regex pattern felt like digital
						archeology.
					</p>

					{/* Planning Section */}
					<h2 className="text-3xl font-bold mt-16 mb-6 flex items-center group">
						<Target className="mr-3 text-primary/60 group-hover:text-primary transition-colors" />
						The Planning
					</h2>
					<p className="text-muted-foreground">
						I decided to build Kore with one goal:{" "}
						<span className="text-foreground font-bold underline decoration-primary/40 underline-offset-4">
							Zero Friction.
						</span>{" "}
						I didn't want a tool that felt like work. I wanted a
						centralized "second brain" that felt like an extension
						of my IDE—accessible, fast, and visually clean.
					</p>

					{/* Tech Stack Section */}
					<h2 className="text-3xl font-bold mt-16 mb-8 flex items-center group">
						<Cpu className="mr-3 text-primary/60 group-hover:text-primary transition-colors" />
						The Tech Stack
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
						<div className="p-6 rounded-2xl bg-secondary/20 border border-border/50">
							<div className="flex items-center gap-3 mb-2 text-primary">
								<Code2 className="size-5" />
								<h3 className="font-bold">Next.js & TS</h3>
							</div>
							<p className="text-sm text-muted-foreground">
								The foundation. Chosen for Server Components,
								speed, and strict type safety to prevent
								production bugs.
							</p>
						</div>
						<div className="p-6 rounded-2xl bg-secondary/20 border border-border/50">
							<div className="flex items-center gap-3 mb-2 text-primary">
								<Palette className="size-5" />
								<h3 className="font-bold">Shadcn UI</h3>
							</div>
							<p className="text-sm text-muted-foreground">
								BaseUI-based primitives that allowed me to build
								a professional-grade interface without
								reinventing the wheel.
							</p>
						</div>
						<div className="p-6 rounded-2xl bg-secondary/20 border border-border/50">
							<div className="flex items-center gap-3 mb-2 text-primary">
								<Layers className="size-5" />
								<h3 className="font-bold">Lucide React</h3>
							</div>
							<p className="text-sm text-muted-foreground">
								A beautiful, consistent icon set that gives Kore
								its distinct, developer-centric visual language.
							</p>
						</div>
						<div className="p-6 rounded-2xl bg-secondary/20 border border-border/50">
							<div className="flex items-center gap-3 mb-2 text-primary">
								<Boxes className="size-5" />
								<h3 className="font-bold">Tailwind CSS</h3>
							</div>
							<p className="text-sm text-muted-foreground">
								For rapid styling and a design system that
								scales without the CSS bloat.
							</p>
						</div>
					</div>

					{/* Vision Section */}
					<h2 className="text-3xl font-bold mt-20 mb-6 flex items-center group">
						<Zap className="mr-3 text-primary/60 group-hover:text-primary transition-colors" />
						The Vision
					</h2>
					<p className="text-lg text-foreground bg-primary/5 p-8 rounded-3xl border border-primary/10 shadow-inner">
						The ultimate goal of Kore is simple:{" "}
						<span className="font-black italic">
							Give time back to the developer.
						</span>{" "}
						By reducing the cognitive load of finding or rewriting
						code from scratch, Kore allows you to focus on the{" "}
						<strong>architectural challenges</strong> and{" "}
						<strong>creative logic</strong> that actually matter.
						It’s about moving from "Where did I write that?" to
						"It's right here" in less than 2 seconds.
					</p>
				</article>
			</div>
		</section>
	);
}
