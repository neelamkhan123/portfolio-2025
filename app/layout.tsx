import type { Metadata } from "next";
import Navbar from "./components/Navigation/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Neelam Khan",
  description: "This is Neelam Khan's personal portfolio site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-950 h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
