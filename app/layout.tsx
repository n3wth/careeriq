import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CareerIQ - AI-Powered Career Intelligence",
  description: "Get promoted faster with data-driven career strategy. Track progress, identify skill gaps, and build the promotion case your manager can't ignore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
