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
  metadataBase: new URL('https://www.manzoclothing.com'),
  title: "Manzo - Leading Wholesale Mens Fashion Manufacturers",
  description: "Manzo is a premier wholesale mens fashion manufacturer, providing high-quality wholesale male clothing and mens wear. Your trusted partner for mens wholesale clothing and modern fashion.",
  keywords: [
    "wholesale mens fashion manufacturers",
    "wholesale male clothing",
    "wholesale mens wear",
    "mens wholesale clothing",
    "wholesale mens fashion",
    "Manzo Fashion India",
    "premium mens apparel"
  ],
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Manzo - Leading Wholesale Mens Fashion Manufacturers",
    description: "Premium wholesale mens fashion for retailers. High-quality male clothing and mens wear at wholesale prices.",
    url: 'https://www.manzoclothing.com',
    siteName: 'Manzo',
    images: [
      {
        url: '/234.jpg.jpeg',
        width: 1200,
        height: 630,
        alt: 'Manzo Wholesale Mens Fashion',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Manzo - Leading Wholesale Mens Fashion Manufacturers",
    description: "Premium wholesale mens fashion for retailers. High-quality male clothing and mens wear at wholesale prices.",
    images: ['/234.jpg.jpeg'],
  },
  icons: {
    icon: "/app-icon-192.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Manzo",
  },
};

import WhatsAppButton from "@/components/WhatsAppButton";
import PWAInstall from "@/components/PWAInstall";
import SmoothScrolling from "@/components/SmoothScrolling";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ClothingStore",
              "name": "Manzo Official",
              "alternateName": "Manzo Wholesale India",
              "url": "https://www.manzoclothing.com",
              "logo": "https://www.manzoclothing.com/logo-black.webp",
              "description": "Leading wholesale mens fashion manufacturers specializing in high-quality male clothing, mens wear, and modern apparel manufacturing.",
              "brand": {
                "@type": "Brand",
                "name": "Manzo"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Wholesale District",
                "addressLocality": "Surat",
                "addressRegion": "Gujarat",
                "postalCode": "395003",
                "addressCountry": "IN"
              },
              "keywords": "wholesale mens fashion manufacturers, wholesale male clothing, wholesale mens wear, mens wholesale clothing, wholesale mens fashion, Indian clothing manufacturer, premium mens apparel",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9645675565",
                "contactType": "Sales"
              },
              "sameAs": [
                "https://www.instagram.com/manzo_clothing_india_/"
              ]
            })
          }}
        />
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
        <WhatsAppButton />
        <PWAInstall />
      </body>
    </html>
  );
}
