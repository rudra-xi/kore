import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		q: "What are common snippets?",
		a: "Common snippets are pre-made utility codes available to everyone. You can copy or favorite them to your own library.",
	},
	{
		q: "How do tags work?",
		a: "Tags help categorize code. You can filter your entire library by clicking a tag in the sidebar or search bar.",
	},
	{
		q: "Can I edit a snippet?",
		a: "Yes. Open any snippet you own and click the 'Edit' button to update the code, title, or language.",
	},
	{
		q: "Is Kore free to use?",
		a: "Yes, Kore is completely free for individual developers. We believe in giving back to the community that builds the web.",
	},
];

export const HelpFaq = () => (
	<section className="space-y-4">
		<h2 className="text-xl font-bold">Frequently Asked Questions</h2>
		<Accordion className="w-full">
			{faqs.map((faq, idx) => (
				<AccordionItem key={faq.q} value={`item-${idx}`}>
					<AccordionTrigger className="text-sm">
						{faq.q}
					</AccordionTrigger>
					<AccordionContent className="text-muted-foreground text-sm">
						{faq.a}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	</section>
);
