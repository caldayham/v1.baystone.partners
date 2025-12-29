import type { Metadata } from "next";
import { Libre_Caslon_Text } from 'next/font/google';
import "./globals.css";

const libreCaslon = Libre_Caslon_Text({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Quality Landscapes",
  description: "Transform your outdoor space with Baystone Partners. Award-winning landscape design that elevates your property's beauty and value. Book your free consultation today.",
  icons: {
    icon: '/baystone-text-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={libreCaslon.className}>
        {children}
      </body>
    </html>
  );
}
