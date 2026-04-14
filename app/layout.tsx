import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "33 First Street | Premium Apartments — Cornwall, Ontario",
  description: "Discover refined apartment living at 33 First Street East, Cornwall. 13 modern suites, prime downtown location, professionally managed. Inquire today.",
  keywords: "apartments Cornwall Ontario, rentals Cornwall, 33 First Street Cornwall, downtown Cornwall apartments, units for rent Cornwall",
  openGraph: {
    title: "33 First Street | Premium Apartments — Cornwall, Ontario",
    description: "Modern apartment living in the heart of downtown Cornwall. 13 suites available. Inquire today.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
