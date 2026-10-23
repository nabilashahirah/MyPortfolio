import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  variable: "--font-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050306",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nabilashahirah.vercel.app"),
  title: "Nabila Shahirah — AI Engineer & Systems Builder",
  description:
    "Engineering Intelligence. Shaping Experience. AI Engineer, AR Developer, and Full-Stack Systems Builder. UPM Class of 2026.",
  openGraph: {
    title: "Nabila Shahirah — AI Engineer & Systems Builder",
    description:
      "Building intelligent systems at the intersection of AI, augmented reality, and full-stack engineering.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabila Shahirah — AI Engineer & Systems Builder",
    description: "Engineering Intelligence. Shaping Experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
