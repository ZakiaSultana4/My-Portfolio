import type { Metadata } from "next";
import { Geist, Geist_Mono, Russo_One } from "next/font/google"; // ✅ Add Russo_One
import "./globals.css";
import { Toaster } from "sonner";

// Existing fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Add Russo One
const russoOne = Russo_One({
  variable: "--font-russo-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Zakia Sultana | Portfolio",
  description: "Zakia Sultana's professional portfolio showcasing skills in front-end development, React, Next.js, and responsive web design.",
  openGraph: {
    title: "Zakia Sultana | Portfolio",
    description: "Zakia Sultana's professional portfolio showcasing skills in front-end development, React, Next.js, and responsive web design.",
    url: "https://zakia-sultana.vercel.app",
    siteName: "Zakia Sultana Portfolio",
    images: [
      {
        url: "https://zakia-sultana.vercel.app/api/og?title=Zakia%20Sultana%20%7C%20Portfolio",
        width: 1200,
        height: 630,
        alt: "Zakia Sultana Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zakia Sultana | Portfolio",
    description: "Zakia Sultana's professional portfolio showcasing front-end development skills.",
    images: ["https://zakia-sultana.vercel.app/api/og?title=Zakia%20Sultana%20%7C%20Portfolio"],
  },
  authors: [
    {
      name: "Zakia Sultana",
      url: "https://zakia-sultana.vercel.app",
    },
  ],
  alternates: {
    canonical: "https://zakia-sultana.vercel.app",
    types: {
      "application/rss+xml": "/feed.xml",
      "application/atom+xml": "/atom.xml",
    },
  },
  icons: {
    icon: "/logo.png",
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#8245ec",
      },
    ],
  },
  manifest: "/site.webmanifest",
  keywords: [
    "Zakia Sultana",
    "Portfolio",
    "Junior Front-End Developer",
    // ... rest of keywords
  ],
};

// Add viewport export with themeColor
export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#8245ec",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${russoOne.variable} antialiased`}
      >
        <Toaster richColors position="top-center" />
        {children}
      </body>
    </html>
  );
}
