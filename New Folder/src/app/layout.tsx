import Navbar from "./components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const revalidate = 0;

export const metadata: Metadata = {
  title: "Awesome Image Gallery",
  description: "Super Optimised Dynamic Image Gallery",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto">{children}</main>
      </body>
    </html>
  );
}