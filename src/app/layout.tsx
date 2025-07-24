import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tango Puzzle Solver - Free Online LinkedIn Tango Game Solver",
  description: "Free online Tango puzzle solver inspired by LinkedIn's daily puzzle game. Solve Tango puzzles with suns and moons, supports multiple grid sizes (4x4, 5x5, 6x6). Interactive solver with step-by-step solutions.",
  keywords: ["tango puzzle", "linkedin tango", "puzzle solver", "brain games", "logic puzzles", "tango game", "puzzle game", "free online puzzles"],
  authors: [{ name: "Cankat Saraç", url: "https://linkedin.com/in/cankatsarac" }],
  creator: "Cankat Saraç",
  publisher: "Cankat Saraç",
  robots: "index, follow",
  openGraph: {
    title: "Tango Puzzle Solver - Free Online LinkedIn Tango Game Solver",
    description: "Free online Tango puzzle solver inspired by LinkedIn's daily puzzle game. Solve puzzles with suns ☀️ and moons 🌙!",
    url: "https://linkedin-tango-puzzle-solver.vercel.app",
    siteName: "Tango Puzzle Solver",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tango Puzzle Solver - Solve puzzles with suns and moons",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tango Puzzle Solver - Free Online LinkedIn Tango Game Solver",
    description: "Free online Tango puzzle solver inspired by LinkedIn's daily puzzle game. Solve puzzles with suns ☀️ and moons 🌙!",
    images: ["/og-image.png"],
    creator: "@cankatsarac",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/favicon-16x16.png?v=2", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png?v=2", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=2",
  },
  manifest: "/site.webmanifest",
  category: "Games",
  classification: "Puzzle Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png?v=2" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png?v=2" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <div suppressHydrationWarning>
          {children}
        </div>
      </body>
    </html>
  );
}
