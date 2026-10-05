import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"], display: "swap" });
const serif = Source_Serif_4({
  variable: "--font-serif4",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});
const mono = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"], display: "swap" });

const title = `${site.name} | AI, Agricultural Engineering & Irrigation Research`;
const description =
  "PhD researcher in Biosystems & Agricultural Engineering at Oklahoma State University with a Computer Science background — applying artificial intelligence and machine learning to soil moisture, irrigation scheduling and sustainable agricultural water management.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  applicationName: site.name,
  authors: [{ name: site.fullName, url: site.url }],
  creator: site.name,
  keywords: [
    "Abinava Yeshwanth KJ",
    "Kalayambakam Janardhan",
    "agricultural engineering",
    "irrigation scheduling",
    "soil moisture",
    "machine learning",
    "artificial intelligence",
    "computer science",
    "water management",
    "Oklahoma State University",
    "OASIS irrigation scheduler",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title,
    description,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0d1317" },
  ],
};

/** Runs before paint: marks JS as available and applies the saved / system theme without a flash. */
const boot = `(function(){var d=document.documentElement;d.classList.add('js');try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}d.dataset.theme=t}catch(e){d.dataset.theme='light'}})();`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} ${serif.variable} ${mono.variable} antialiased`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
      </head>
      <body className="min-h-dvh">{children}</body>
    </html>
  );
}
