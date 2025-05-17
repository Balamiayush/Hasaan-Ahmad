import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import "./globals.css";





const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "My App",
  description: "This is a Poppins + Tailwind + Next.js setup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`font-poppins `}>
      <body  className="font-poppins antialiased">
        {children}

      </body>
    </html>
  );
}
