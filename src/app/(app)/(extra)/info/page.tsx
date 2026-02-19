import { SupportHeader } from "@/components/layout";
import { Planning, Problem, TechStack, Vision } from "@/components/pages";

/**
 * Info
 *
 * Server Component that renders the project information page.
 * It provides context on the creation of Kore, covering the problem it solves,
 * the planning involved, the tech stack used, and the project's vision.
 */
export default function Info() {
	return (
		<section className="flex flex-col section-padding">
			<div className="flex-1 container max-w-7xl">
				<article className="">
					<SupportHeader
						head="The Making Of"
						extra="Kore."
						para="How a developer's worst nightmare—forgetting their own
					logic—turned into an organized reality"
					/>
					<Problem />
					<Planning />
					<TechStack />
					<Vision />
				</article>
			</div>
		</section>
	);
}
