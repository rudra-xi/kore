import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: "Information",
};

export default function InformationLayout({ children }: { children: ReactNode }) {
	return (
		<>
			{children}
		</>
	);
}
