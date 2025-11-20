import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Baystone Partners | Premier Landscape Design & Outdoor Living Spaces",
  description: "Transform your outdoor space with Baystone Partners. Award-winning landscape design that elevates your property's beauty and value. Book your free consultation today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
