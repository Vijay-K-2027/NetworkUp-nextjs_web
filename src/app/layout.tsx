import type { Metadata } from "next";
import Script from "next/script";
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
  keywords: [
    "LinkedIn outreach automation",
    "LinkedIn outreach automation tool",
    "LinkedIn automation tool",
    "LinkedIn automation software",
    "automated LinkedIn outreach",
    "LinkedIn outreach platform",
    "LinkedIn lead generation tool",
    "B2B LinkedIn outreach",
    "cloud LinkedIn automation",
    "B2B lead generation platform",
    "LinkedIn prospecting software",
    "automated LinkedIn connection requests",
    "automated LinkedIn messages",
    "LinkedIn drip campaigns",
    "LinkedIn follow-up automation",
    "sales engagement platform",
    "LinkedIn growth tool",
    "AI outreach message writer",
    "residential proxy LinkedIn automation",
    "safe LinkedIn automation without extension",
    "anti-detection LinkedIn automation",
    "multi account LinkedIn inbox",
    "multi-account LinkedIn outreach",
    "Convobox unified inbox",
    "LinkedIn campaign builder",
    "B2B prospect discovery",
    "LinkedIn automation for sales teams",
    "LinkedIn automation for recruiters",
    "LinkedIn automation for agencies",
    "Waalaxy alternative",
    "Heyreach competitor",
    "Expandi alternative",
    "Dripify alternative",
    "Lemlist alternative",
    "PhantomBuster alternative",
    "Meet Alfred alternative",
    "Skylead alternative",
    "Octopus CRM alternative",
    "AI campaign optimizer",
    "LinkedIn lead scoring",
    "NetworkUp",
    "NetworkUp.io",
    "networkup linkedin"
  ],
  authors: [{ name: "NetworkUp Team", url: "https://networkup.io" }],
  creator: "NetworkUp.io",
  publisher: "NetworkUp.io",
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://networkup.io"),
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": "https://networkup.io/feed.xml",
      "text/markdown": "https://networkup.io/llms.txt",
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || undefined,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://networkup.io",
    title: "NetworkUp.io - AI-Powered LinkedIn Growth & Outreach Automation",
    description: "Automate your LinkedIn outreach and grow your professional network with precision. Find high-intent leads, optimize campaigns with AI, and manage conversations in a unified inbox.",
    siteName: "NetworkUp.io",
    images: [
      {
        url: "https://networkup.io/seo/og-home.jpg",
        width: 1200,
        height: 630,
        alt: "NetworkUp.io - AI-Powered LinkedIn Growth & Outreach Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NetworkUp.io - AI-Powered LinkedIn Growth & Outreach Automation",
    description: "Automate your LinkedIn outreach and grow your professional network with precision. Find high-intent leads, optimize campaigns with AI, and manage conversations in a unified inbox.",
    creator: "@networkup",
    images: ["https://networkup.io/seo/og-home.jpg"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const rootJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://networkup.io/#organization",
        "name": "NetworkUp",
        "url": "https://networkup.io",
        "logo": {
          "@type": "ImageObject",
          "url": "https://networkup.io/brand/Logo.svg",
          "caption": "NetworkUp Logo"
        },
        "knowsAbout": [
          "LinkedIn Outreach Automation",
          "LinkedIn Outreach Automation Tool",
          "B2B Lead Generation",
          "Sales Engagement Software",
          "Recruiting Sourcing Automation",
          "Cloud LinkedIn Proxy Security",
          "AI Personalization and Follow-ups",
          "Multi-Account LinkedIn Inbox Management",
          "Automated LinkedIn Connection Requests",
          "LinkedIn Drip Campaigns"
        ],
        "sameAs": [
          "https://www.linkedin.com/company/networkup",
          "https://twitter.com/networkup_io",
          "https://github.com/networkup-io",
          "https://www.crunchbase.com/organization/networkup"
        ],
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "customer support",
          "url": "https://networkup.io/company/contact-us"
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://networkup.io/#website",
        "url": "https://networkup.io",
        "name": "NetworkUp.io",
        "description": "AI-Powered LinkedIn Growth & Outreach Automation Platform",
        "publisher": {
          "@id": "https://networkup.io/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://networkup.io/resources/blog?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ]
      }
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${neueMontreal.variable} ${comfortaa.variable} h-full antialiased`}
      style={{ colorScheme: "light" }}
    >
      <body className="min-h-full flex flex-col bg-white text-[#171717]">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NGBCPBDW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NGBCPBDW');`,
          }}
        />
        {/* End Google Tag Manager */}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

