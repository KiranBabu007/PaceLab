import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  openGraph: {
    title: "Internship at Pacelab",
    description: "Join our exciting internship program!",
    url: "https://internship.pacelab.in",
    type: "website",
    images: [
      {
        url: "https://internship.pacelab.in/thumbnail.png",// Optional
        alt: "Event Logo",
        height:"2100",
        width:"3600"
      },
    ],
  },
  icons: {
    icon: "/paclab.png", // Favicon added here
  },
};

import Script from 'next/script'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/paclab.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-F6XRLEJGP4`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F6XRLEJGP4');
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
