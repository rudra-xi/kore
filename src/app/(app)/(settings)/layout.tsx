import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
	title: {
    template: "%s | Settings", // %s is replaced by the child page title
    default: "Settings",
  },
};

export default function SettingLayout({ children }: { children: ReactNode }) {
	return <>{children}</>;
}
