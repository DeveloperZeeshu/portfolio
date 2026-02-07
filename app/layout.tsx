import type { Metadata } from "next";
import "./globals.css";
import AppShell from "@/src/components/AppShell";
import { getMetaData } from "./metadata/metadata";

export async function generateMetadata(): Promise<Metadata> {
  return getMetaData()
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
