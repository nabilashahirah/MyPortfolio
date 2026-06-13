import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const syne = Plus_Jakarta_Sans({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

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
      className={`${syne.variable} ${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <body
        className="antialiased overflow-x-hidden"
        style={{ background: "#FFFBEE", color: "#1C1210" }}
      >
        {children}
      </body>
    </html>
  );
}
