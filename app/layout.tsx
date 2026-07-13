import type { Metadata } from "next";
import { headers } from "next/headers";
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

export async function generateMetadata(): Promise<Metadata> {
  const host = (await headers()).get("host") ?? "localhost:3000";
  const baseUrl = new URL(`https://${host}`);

  return {
    metadataBase: baseUrl,
    title: "Mara Vale | Product Designer",
    description:
      "A portfolio website for product designer Mara Vale, featuring selected work, design principles, and contact details.",
    icons: {
      icon: "/favicon.svg",
      shortcut: "/favicon.svg",
    },
    openGraph: {
      title: "Mara Vale | Product Designer",
      description:
        "Selected product design work, process notes, and contact details.",
      url: "/",
      siteName: "Mara Vale",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "Mara Vale portfolio preview" }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Mara Vale | Product Designer",
      description:
        "Selected product design work, process notes, and contact details.",
      images: ["/og.png"],
    },
  };
}

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
        {children}
      </body>
    </html>
  );
}
