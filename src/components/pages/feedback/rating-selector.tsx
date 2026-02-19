"use client";

import { Frown, Meh, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Client Component: RatingSelector
 *
 * Renders a 5-star rating selector using emoji icons to represent
 * satisfaction levels. The component uses color-coded buttons to
 * visually distinguish between negative (red), neutral (yellow), and
 * positive (green) ratings.
 *
 * @param {Object} props - Component props
 * @param {number} props.value - Currently selected rating value
 * @param {function} props.onChange - Callback to handle rating changes
 */
export const RatingSelector = ({
	value,
	onChangeAction,
}: {
	value?: number;
	onChangeAction: (value: number) => void;
}) => {
	return (
		<div className="flex items-center gap-2">
			{[1, 2, 3, 4, 5].map((rating) => (
				<Button
					key={rating}
					size={"icon"}
					type="button" // Important: stop form submission on click
					onClick={() => onChangeAction(rating)}
					className={`p-2 rounded-full transition-colors cursor-pointer text-secondary-foreground ${
						value === rating
							? rating <= 2
								? "bg-chart-4 hover:bg-chart-4/90"
								: rating === 3
									? "bg-chart-3 hover:bg-chart-3/90"
									: "bg-chart-2 hover:bg-chart-2/90"
							: "bg-muted hover:bg-muted/80"
					}`}
				>
					{rating <= 2 && <Frown className="h-6 w-6" />}
					{rating === 3 && <Meh className="h-6 w-6" />}
					{rating >= 4 && <Smile className="h-6 w-6" />}
				</Button>
			))}
		</div>
	);
};
