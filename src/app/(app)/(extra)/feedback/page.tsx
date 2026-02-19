import { SupportHeader } from "@/components/layout";
import { FormFeedback } from "@/components/pages";

/**
 * FeedbackPage
 *
 * Server Component that renders the feedback submission page.
 * It provides a header with context and a form for users to submit feedback.
 */
export default function FeedbackPage() {
	return (
		<section>
			<SupportHeader
				head="Share Your"
				extra="Feedback."
				para="Tell me what's working, what's broken, or what Kore should do next."
			/>
			<div className="max-w-2xl mx-auto space-y-12 pb-20">
				<FormFeedback />
			</div>
		</section>
	);
}
