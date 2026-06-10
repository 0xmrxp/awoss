import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AWOSS - Awesome Open Source Hub",
  description: "Discover, curate, and manage the best open source repositories with a focus on licenses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}