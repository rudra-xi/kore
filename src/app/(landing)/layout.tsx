// src/app/(landing)/layout.tsx
import { Footer, Navigation } from "@/components/layout";
import type { ReactNode } from "react";

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      {/* Added pt-16 or mt-16 to account for the fixed Navigation height */}
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}