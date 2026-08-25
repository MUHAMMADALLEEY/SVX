import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { MotionController } from "@/components/ui/MotionController";
import "./globals.css";

export const metadata: Metadata = {
  title: "SportsVentureX | Premium Sports Goods Manufacturing",
  description:
    "SportsVentureX builds custom footballs, socks, bags, and sports goods programs for growing brands.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <MotionController />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
