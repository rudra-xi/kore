import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQS } from "@/constants";

export const HelpFaq = () => (
	<section>
		<h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
		<Accordion className="w-full">
			{FAQS.map((faq, idx) => (
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
