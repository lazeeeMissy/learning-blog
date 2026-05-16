import type { Metadata } from "next";
import { Header } from "@/components/Header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Learning Blog",
    template: "%s | Learning Blog"
  },
  description: "A personal learning path, blog, and note library."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
