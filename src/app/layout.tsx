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
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "icon", url: "/favicon.ico" },
      { rel: "manifest", url: "/site.webmanifest" },
    ],
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
