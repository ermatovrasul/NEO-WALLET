import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
// @ts-ignore
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: {
    template: "%s | NeoExchange - Коопсуз Крипто Капчык",
    default: "NeoExchange  | Криптовалютаны коопсуз сактоо",
  },
  description: "NeoExchange  - бул сиздин санариптик активдериңизди сактоо, жөнөтүү жана алуу үчүн эң ишенимдүү децентралдаштырылган крипто-капчык. Bitcoin, Ethereum жана башка токендерди колдойт.",
  keywords: ["крипто капчык", "bitcoin wallet kygyzstan", "криптовалюта сактоо", "blockchain", "NeoExchange", "коопсуз крипто"],
  authors: [{ name: "NeoExchange Team" }],
  metadataBase: new URL("https://neo-exchange.kg"), 
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NeoExchange - Сиздин ишенимдүү крипто өнөктөшүңүз",
    description: "Активдериңизди децентралдаштырылган дүйнөдө коопсуз башкарыңыз.",
    url: "https://neo-exchange.kg",
    siteName: "NeoExchange",
    images: [
      {
        url: "/og-image.jpg", 
        width: 1200,
        height: 630,
        alt: "NeoExchange Interface",
      },
    ],
    locale: "ky_KG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NeoExchange | Коопсуз Крипто Капчык",
    description: "Криптовалютаны оңой жана коопсуз башкаруу.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ky">
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" type="image/svg+xml" />
        <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16.png" sizes="16x16" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/favicon.svg" color="#07B2A6" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#07B2A6" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}