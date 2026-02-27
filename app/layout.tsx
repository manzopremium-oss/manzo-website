import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.manzoclothing.com"),
  title: {
    default: "Manzo Clothing - Leading Wholesale Mens Fashion Manufacturers India",
    template: "%s | Manzo Clothing",
  },
  description:
    "Manzo Clothing is a premier wholesale mens fashion manufacturer based in Bengaluru, India. We provide high quality wholesale male clothing, mens wear, and modern apparel. Your trusted partner for mens wholesale clothing.",
  keywords: [
    "Manzo",
    "manzo",
    "Manzo Clothing",
    "manzo clothing",
    "Manzo wholesale",
    "wholesale mens fashion manufacturers",
    "wholesale male clothing",
    "wholesale mens wear",
    "mens wholesale clothing",
    "wholesale mens fashion",
    "Manzo Fashion India",
    "Manzo Clothing India",
    "premium mens apparel India",
    "clothing manufacturer Bengaluru",
    "wholesale clothing India",
    "mens fashion manufacturer Karnataka",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Manzo Clothing - Leading Wholesale Mens Fashion Manufacturers India",
    description:
      "Manzo Clothing offers premium wholesale mens fashion for retailers. High-quality male clothing and mens wear at wholesale prices. Based in Bengaluru, India.",
    url: "https://www.manzoclothing.com",
    siteName: "Manzo Clothing",
    images: [
      {
        url: "/234.jpg.jpeg",
        width: 1200,
        height: 630,
        alt: "Manzo Clothing - Wholesale Mens Fashion Manufacturers India",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manzo Clothing - Leading Wholesale Mens Fashion Manufacturers India",
    description:
      "Manzo Clothing offers premium wholesale mens fashion for retailers. High-quality male clothing and mens wear at wholesale prices.",
    images: ["/234.jpg.jpeg"],
    site: "@manzoclothing",
    creator: "@manzoclothing",
  },
  icons: {
    icon: "/app-icon-192.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Manzo Clothing",
  },
  // Helps Google understand the correct brand name
  other: {
    "application-name": "Manzo Clothing",
  },
};

import Script from "next/script";
import WhatsAppButton from "@/components/WhatsAppButton";
import PWAInstall from "@/components/PWAInstall";
import SmoothScrolling from "@/components/SmoothScrolling";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ClothingStore"],
  "@id": "https://www.manzoclothing.com/#organization",
  name: "Manzo Clothing",
  alternateName: ["Manzo", "manzo", "Manzo Clothing India", "Manzo Wholesale India", "Manzo Fashion India"],
  legalName: "Manzo Clothing",
  url: "https://www.manzoclothing.com",
  logo: {
    "@type": "ImageObject",
    url: "https://www.manzoclothing.com/logo-black.webp",
    width: 200,
    height: 60,
  },
  image: "https://www.manzoclothing.com/234.jpg.jpeg",
  description:
    "Manzo Clothing is a leading wholesale mens fashion manufacturer based in Bengaluru, India, specializing in high-quality male clothing, mens wear, and modern apparel manufacturing for retailers.",
  foundingLocation: {
    "@type": "Place",
    name: "Bengaluru, Karnataka, India",
  },
  brand: {
    "@type": "Brand",
    name: "Manzo Clothing",
    alternateName: "Manzo Clothing India",
    logo: "https://www.manzoclothing.com/logo-black.webp",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "krps illam, 258, Bommanahalli",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    postalCode: "560114",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.8981,
    longitude: 77.6268,
  },
  areaServed: {
    "@type": "Country",
    name: "India",
  },
  keywords:
    "Manzo, manzo, Manzo Clothing, manzo clothing, Manzo Clothing India, wholesale mens fashion manufacturers, wholesale male clothing, wholesale mens wear, mens wholesale clothing, wholesale mens fashion, Indian clothing manufacturer, premium mens apparel",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9645675565",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Malayalam"],
    },
  ],
  sameAs: [
    "https://www.instagram.com/manzo_clothing_india_/",
    "https://www.manzoclothing.com",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Manzo Clothing Wholesale Mens Fashion Catalog",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Wholesale Mens Fashion",
          description: "Premium wholesale mens clothing and apparel for retailers",
          brand: { "@type": "Brand", name: "Manzo Clothing" },
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.manzoclothing.com/#website",
  name: "Manzo Clothing",
  alternateName: "Manzo Clothing",
  url: "https://www.manzoclothing.com",
  description: "Manzo Clothing - Leading Wholesale Mens Fashion Manufacturers in India",
  publisher: {
    "@id": "https://www.manzoclothing.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://www.manzoclothing.com/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Canonical brand name meta for Google */}
        <meta name="application-name" content="Manzo Clothing" />
        <meta name="author" content="Manzo Clothing" />
        <meta name="copyright" content="Manzo Clothing" />
        <meta property="og:brand" content="Manzo Clothing" />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ETQLM551E6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ETQLM551E6', {
              custom_map: { 'dimension1': 'brand' }
            });
            gtag('set', { 'brand': 'Manzo Clothing' });
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        {/* Organization Schema - strengthens brand identity for Google */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        <SmoothScrolling>{children}</SmoothScrolling>
        <WhatsAppButton />
        <PWAInstall />
      </body>
    </html>
  );
}