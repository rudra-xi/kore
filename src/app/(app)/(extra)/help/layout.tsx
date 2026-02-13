import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Feedback",
};

export default function FeedbackLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
