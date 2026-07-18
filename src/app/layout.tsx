import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const neueMontreal = localFont({
  src: [
    {
      path: "./homepage/assets/fonts/NeueMontreal-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./homepage/assets/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./homepage/assets/fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./homepage/assets/fonts/NeueMontreal-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./homepage/assets/fonts/NeueMontreal-Italic.otf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-neue-montreal",
});

const comfortaa = localFont({
  src: [
    {
      path: "./homepage/assets/fonts/Comfortaa-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./homepage/assets/fonts/Comfortaa-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./homepage/assets/fonts/Comfortaa-Bold.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-comfortaa",
});

export const metadata: Metadata = {
  title: {
    default: "NetworkUp.io - AI-Powered LinkedIn Growth & Outreach Automation",
    template: "%s | NetworkUp.io"
  },
  description: "Automate your LinkedIn outreach and grow your professional network with precision. Find high-intent leads, optimize campaigns with AI, and manage conversations in a unified inbox.",
  keywords: ["LinkedIn outreach", "outreach automation", "LinkedIn growth tool", "AI campaign optimizer", "lead generation", "sales engagement", "NetworkUp"],
  authors: [{ name: "NetworkUp Team", url: "https://networkup.io" }],
  creator: "NetworkUp.io",
  publisher: "NetworkUp.io",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://networkup.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://networkup.io",
    title: "NetworkUp.io - AI-Powered LinkedIn Growth & Outreach Automation",
    description: "Automate your LinkedIn outreach and grow your professional network with precision. Find high-intent leads, optimize campaigns with AI, and manage conversations in a unified inbox.",
    siteName: "NetworkUp.io",
  },
  twitter: {
    card: "summary_large_image",
    title: "NetworkUp.io - AI-Powered LinkedIn Growth & Outreach Automation",
    description: "Automate your LinkedIn outreach and grow your professional network with precision. Find high-intent leads, optimize campaigns with AI, and manage conversations in a unified inbox.",
    creator: "@networkup",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${neueMontreal.variable} ${comfortaa.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

