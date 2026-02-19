"use client";

interface HeaderProps {
	head: string;
	para: string;
	extra: string
}
export const SupportHeader = ({ head, para, extra }: HeaderProps) => {
	return (
		<div className={"pl-4"}>
			<h1 className="text-6xl md:text-8xl font-black uppercase mb-8 tracking-tighter">
				{head} <span className="text-primary">{extra}</span>
			</h1>

			<p className="text-xl md:text-2xl text-muted-foreground leading-relaxed italic border-l-4 border-primary pl-6 mb-12">
				"{para}"
			</p>
		</div>
	);
};
