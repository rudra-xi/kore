import Link from "next/link";
import {
	FeatureTips,
	GettingStarted,
	HelpFaq,
	HelpHero,
} from "@/components/pages";
import { Button } from "@/components/ui/button";

/**
 * Help page component that renders the main help interface for users.
 * This is a Server Component that displays various help sections and
 * provides a feedback option for users who can't find what they need.
 */
export default function Help() {
	return (
		<div className="max-w-4xl mx-auto space-y-12 pb-20">
			<HelpHero />

			<div className="grid gap-12">
				<GettingStarted />

				<div className="grid md:grid-cols-2 gap-8 items-start">
					<HelpFaq />
					<FeatureTips />
				</div>

				<section className="bg-muted/50 rounded-xl p-8 text-center border">
					<h3 className="text-lg font-semibold mb-2">
						Didn't find what you're looking for?
					</h3>
					<Button
						nativeButton={false}
						render={
							<Link href="/feedback">
								Send Feedback
							</Link>
						}
					/>
				</section>
			</div>
		</div>
	);
}