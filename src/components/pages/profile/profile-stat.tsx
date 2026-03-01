import { Clock, Code2, FolderGit2, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

/**
 * Profile Stats (Server Component)
 *
 * Displays a summary of the user's activity metrics, including total snippets,
 * favorites, and collections. Currently uses mock data intended to be replaced
 * with database-driven stats.
 */
export function ProfileStats() {
	/**
	 * Mock data for user activity statistics.
	 * TODO: Replace with real data fetching from the database.
	 */
	const stats = [
		{
			label: "Total Snippets",
			value: "24",
			icon: Code2,
			change: "+3 this month",
		},
		{
			label: "Favorites",
			value: "12",
			icon: Heart,
			change: "2 new",
		},
		{
			label: "Collections",
			value: "5",
			icon: FolderGit2,
			change: "3 public",
		},
	];

	return (
		<Card>
			<CardHeader>
				<CardTitle>Activity Overview</CardTitle>
			</CardHeader>
			<CardContent className="space-y-4">
				<div className="grid gap-3">
					{stats.map((stat) => (
						<div
							key={stat.label}
							className="flex items-center justify-between"
						>
							<div className="space-y-1">
								<p className="text-sm text-muted-foreground">
									{stat.label}
								</p>
								<div className="flex items-baseline gap-2">
									<p className="text-2xl font-bold">
										{stat.value}
									</p>
									<span className="text-xs text-muted-foreground">
										{stat.change}
									</span>
								</div>
							</div>
							<div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
								<stat.icon className="h-4 w-4 text-primary" />
							</div>
						</div>
					))}
				</div>

				{/* Last Active */}
				<div className="pt-4 border-t">
					<div className="flex items-center gap-2 text-muted-foreground mb-2">
						<Clock className="h-4 w-4" />
						<span className="text-xs font-medium">LAST ACTIVE</span>
					</div>
					<p className="text-sm">
						2 hours ago{" "}
						<span className="text-muted-foreground">
							edited "Auth Middleware"
						</span>
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
