import { FileQuestion } from "lucide-react";

export function Problem() {
	return (
		<>
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
				ourselves, and Notion pages that we never actually visit. As AI
				became part of my workflow, the problem got worse. Helpful
				snippets were buried in thousands of lines of chat history, and
				finding that one specific `useEffect` cleanup or regex pattern
				felt like digital archeology.
			</p>
		</>
	);
}
