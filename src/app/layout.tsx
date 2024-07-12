import { Metadata, Viewport } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import { FC, ReactNode } from "react";
import localFont from "next/font/local";

const inter = localFont({
  src: [
    { path: "./fonts/inter/medium.woff2", weight: "500" },
    { path: "./fonts/inter/regular.woff2", weight: "400" },
  ],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 2,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#121212" },
    { media: "(prefers-color-scheme: dark)", color: "#E5E5E5" },
  ],
};

export const metadata: Metadata = {
  title: { default: "Harsh Singh", template: "%s — Harsh Singh" },
  creator: "Harsh Singh",
  publisher: "Harsh Singh",
  description: "Software and design consultant.",
  keywords: ["Harsh Singh", "harshhhdev"],
  authors: [{ name: "Harsh Singh", url: "https://harshsingh.xyz" }],
  openGraph: {
    title: "Harsh Singh",
    description: "Software and design consultant.",
    url: "https://harshsingh.xyz",
    siteName: "Harsh Singh",
    images: [
      {
        url: "https://harshsingh.xyz/og.png",
        width: 1200,
        height: 630,
        alt: "",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harsh Singh",
    description: "Software and design consultant.",
    siteId: "harshhhdev",
    creator: "@harshhhdev",
    creatorId: "harshhhdev",
    images: {
      url: "https://harshsingh.xyz/og.png",
      alt: "",
    },
  },
  verification: {
    google: "VWhTtgTikPqvWIY4n2rlUj6Fe9YgkfFMEET3TM7Rce0",
    yandex: "cfc27cbb03eb0a9c",
    yahoo: "yahoo",
    other: { me: ["hi.harsh@pm.me"] },
  },
  alternates: {
    canonical: "https://harshsingh.xyz",
    types: { "application/rss": "https://harshsingh.xyz/rss" },
  },
  assets: ["https://harshsingh.xyz/assets.zip"],
  category: "technology",
};

export default (({ children }) => (
  <html lang="en">
    <body className={inter.className}>
      <div className="flex justify-center">
        <div className="sm:w-content-lg mb-36 mt-16 w-content">{children}</div>
      </div>
      <Nav />
      <div
        className="fixed top-[-10px] z-40 h-10 w-screen bg-white opacity-90 blur backdrop-blur-lg dark:bg-neutral-900"
        aria-hidden
      />
      <div
        className="fixed bottom-[-10px] z-40 h-10 w-screen bg-white opacity-90 blur backdrop-blur-lg dark:bottom-[-20px] dark:bg-neutral-900"
        aria-hidden
      />
    </body>
  </html>
)) as FC<{ children: ReactNode }>;
