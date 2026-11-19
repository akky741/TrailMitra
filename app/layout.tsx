import type { Metadata } from "next";
import "./globals.css";
import { brandName } from "./brand";

export const metadata: Metadata = {
  title: `${brandName} | Treks, Camping & Tours in Maharashtra`,
  description:
    "Discover treks, camping, fort trails and adventure trips across Maharashtra. Explore upcoming adventures and enquire about your next journey.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}