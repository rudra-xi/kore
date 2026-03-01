import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ACTIVITY_COLORS, ACTIVITY_ICONS } from "@/constants";

/**
 * Represents a single user activity record.
 */
interface Activity {
	/** Unique identifier for the activity. */
	id: string;
	/** The category of action performed by the user. */
	type: "create" | "update" | "favorite" | "fork";
	/** The display name of the object affected by the activity. */
	item: string;
	/** Relative timestamp for when the activity occurred. */
	timestamp: string;
}

/**
 * Mock data for the activity feed.
 * TODO: Fetch real activity logs from the database.
 */
const mockActivities: Activity[] = [
	{
		id: "1",
		type: "create",
		item: "Auth Middleware",
		timestamp: "2 hours ago",
	},
	{
		id: "2",
		type: "update",
		item: "useLocalStorage Hook",
		timestamp: "yesterday",
	},
	{
		id: "3",
		type: "favorite",
		item: "Debounce Function",
		timestamp: "2 days ago",
	},
	{
		id: "4",
		type: "create",
		item: "Button Component",
		timestamp: "3 days ago",
	},
];

/**
 * Recent Activity (Client Component)
 *
 * Displays a chronological list of recent user actions, such as creating,
 * updating, or favoriting snippets. It uses consistent iconography and
 * coloring to distinguish between different activity types.
 */
export function RecentActivity() {
	return (
		<Card>
			<CardHeader className="pb-3">
				<CardTitle className="text-sm font-medium text-muted-foreground">
					Recent Activity
				</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				{mockActivities.map((activity) => {
					const Icon = ACTIVITY_ICONS[activity.type];
					const color = ACTIVITY_COLORS[activity.type];

					return (
						<div
							key={activity.id}
							className="flex items-start gap-3"
						>
							<div className={`mt-0.5 ${color}`}>
								<Icon className="h-4 w-4" />
							</div>
							<div className="flex-1 space-y-1">
								<p className="text-sm">
									<span className="capitalize">
										{activity.type}
									</span>{" "}
									<span className="font-medium">
										"{activity.item}"
									</span>
								</p>
								<p className="text-xs text-muted-foreground">
									{activity.timestamp}
								</p>
							</div>
						</div>
					);
				})}

				{mockActivities.length === 0 && (
					<p className="text-sm text-muted-foreground text-center py-4">
						No recent activity
					</p>
				)}
			</CardContent>
		</Card>
	);
}
