import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shavin.dev"),
  title: "Shavin Dilsara Fernando — Software Engineer & Visiting Lecturer",
  description:
    "Senior Software Engineer at IFS R&D International. Visiting Lecturer at IIT. Photographer. IEEE published researcher. Based in Sri Lanka.",
  keywords: [
    "Shavin Fernando",
    "Shavin Dilsara Fernando",
    "Software Engineer",
    "IFS Cloud",
    "PL/SQL",
    "TypeScript",
    "Java",
    "Visiting Lecturer",
    "IIT",
    "Sri Lanka",
    "Portfolio",
  ],
  authors: [{ name: "Shavin Dilsara Fernando" }],
  creator: "Shavin Dilsara Fernando",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shavin.dev",
    title: "Shavin Dilsara Fernando — Software Engineer & Visiting Lecturer",
    description:
      "Senior Software Engineer at IFS R&D International. Visiting Lecturer at IIT. IEEE published researcher.",
    siteName: "Shavin Fernando",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shavin Fernando — Software Engineer & Visiting Lecturer",
    description:
      "Senior Software Engineer at IFS R&D International. Visiting Lecturer at IIT. IEEE published researcher.",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased bg-black text-white">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
