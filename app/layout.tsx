import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/layout/Navbar";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

  
export const metadata: Metadata = {
  title: {
    default: 'SimpleFolio - Clean Portfolio Template',
    template: '%s | SimpleFolio'
  },
  description: 'A clean and minimal portfolio template built with Next.js. Showcase your work, skills, and experience with a professional and modern design.',
  keywords: [
    'portfolio',
    'template',
    'nextjs',
    'react',
    'developer portfolio',
    'clean design',
    'minimal portfolio',
    'personal website'
  ],
  authors: [{ name: 'Your Name' }],
  creator: 'Your Name',
  publisher: 'Your Name',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://your-domain.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-domain.com',
    title: 'SimpleFolio - Clean Portfolio Template',
    description: 'A clean and minimal portfolio template built with Next.js. Showcase your work, skills, and experience with a professional and modern design.',
    siteName: 'SimpleFolio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SimpleFolio Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SimpleFolio - Clean Portfolio Template',
    description: 'A clean and minimal portfolio template built with Next.js. Showcase your work, skills, and experience.',
    images: ['/og-image.jpg'],
    creator: '@yourusername',
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
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation/>
         
        {children}
      </body>
    </html>
  );
}
