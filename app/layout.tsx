import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap", style: ["normal", "italic"] });
const sans = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

const title = "Olabiyi Olaleye · Software engineer";
const description =
  "Software engineer in Lagos building React, Next.js and React Native products, with SQL and applied AI on the data side. Open to remote roles.";

export const metadata: Metadata = {
  metadataBase: new URL("https://olabiyi-portfolio.vercel.app"),
  title,
  description,
  openGraph: { title, description, type: "website", images: ["/img/og.jpg"] },
  twitter: { card: "summary_large_image", title, description, images: ["/img/og.jpg"] },
};

export const viewport: Viewport = {
  themeColor: "#f5f1e8",
};

// Runs before paint so there is no flash of the wrong theme. Light is the default.
const themeScript = `try{var t=localStorage.getItem('theme');document.documentElement.dataset.theme=t==='dark'?'dark':'light'}catch(e){document.documentElement.dataset.theme='light'}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="light" className={`${serif.variable} ${sans.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
