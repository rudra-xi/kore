"use client";

import { UserIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { LORELEI_GALLERY } from "@/constants";
import { cn } from "@/lib/utils";

/**
 * Props for the AvatarPicker component.
 */
interface AvatarPickerProps {
	/** The unique seed identifier used to generate the DiceBear avatar image. */
	selectedSeed: string;
	/** Callback function triggered when a user selects a new avatar from the gallery. */
	onSelect: (seed: string) => void;
}

/**
 * AvatarPicker (Client Component)
 *
 * Provides an interactive gallery of avatars using the DiceBear API.
 * Users can preview their current selection and choose a new one from a predefined list.
 */
export function AvatarPicker({ selectedSeed, onSelect }: AvatarPickerProps) {
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-4">
				{/* Current Large Preview using Avatar */}
				<Avatar className="h-20 w-20 border-4 border-primary-foreground/10 shadow-sm">
					<AvatarImage
						src={`https://api.dicebear.com/9.x/lorelei/svg?seed=${selectedSeed}&radius=50`}
						alt="Selected Avatar"
					/>
				</Avatar>

				<div className="space-y-1">
					<p className="text-sm font-semibold">Profile Picture</p>
					<p className="text-xs text-muted-foreground">
						Select an avatar from the gallery below.
					</p>
				</div>
			</div>

			{/* Gallery Grid using Avatar */}
			<div className="flex flex-wrap gap-2 max-w-sm">
				{
					/**
					 * Map through predefined avatar seeds. Using seeds allows for a variety
					 * of avatars without managing multiple static image assets.
					 */
					LORELEI_GALLERY.map((seed) => {
						const isSelected = selectedSeed === seed;
						const avatarUrl = `https://api.dicebear.com/9.x/lorelei/svg?seed=${seed}&radius=50`;

						return (
							<Button
								key={seed}
								type="button"
								variant="ghost"
								size="icon"
								className={cn(
									"relative h-auto w-auto p-0.5 rounded-full hover:bg-transparent",
									isSelected &&
										"ring-2 ring-primary ring-offset-2 ring-offset-background",
								)}
								onClick={() => onSelect(seed)}
								title={"Select"}
							>
								<Avatar className="h-12 w-12">
									<AvatarImage
										src={avatarUrl}
										alt={`Avatar ${seed}`}
									/>
									<AvatarFallback className="bg-muted">
										<UserIcon />
									</AvatarFallback>
								</Avatar>
							</Button>
						);
					})
				}
			</div>
		</div>
	);
}
