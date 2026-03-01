interface MainHeaderProps {
	title: string;
	description: string;
}

export function MainHeader({ title, description }: MainHeaderProps) {
	return (
		<header className="mb-10 border-b border-border/60 pb-6">
			<div className="flex flex-col gap-1">
				<p className="max-w-3xl text-base italic text-muted-foreground leading-relaxed">
					`<span>{description}</span>`
				</p>
				<div className="flex items-baseline justify-between">
					<h1 className="text-8xl font-black tracking-tighter text-foreground uppercase">
						{title}
						<span className={"text-primary"}>.</span>
					</h1>
				</div>
			</div>
		</header>
	);
}
