import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/home/ScrollToTop";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Daily Media Casino | Top-Rated US Online Casinos Compared 2026",
    template: "%s | Daily Media Casino",
  },
  description:
    "Compare the best US online casinos in 2026. Expert reviews, licensed operators, exclusive bonuses, fast payouts for US players aged 21+.",
  metadataBase: new URL("https://www.dailymediacasino.com"),
  openGraph: {
    siteName: "Daily Media Casino",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.png",
  },
  other: {
    google: "notranslate",
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
      className={`${inter.variable} ${bebasNeue.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Fan Leads Inc",
                  url: "https://www.dailymediacasino.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "1180 N Town Center Dr, Suite 100",
                    addressLocality: "Las Vegas",
                    addressRegion: "NV",
                    postalCode: "89144",
                    addressCountry: "US",
                  },
                },
                {
                  "@type": "WebSite",
                  name: "Daily Media Casino",
                  url: "https://www.dailymediacasino.com",
                  publisher: {
                    "@type": "Organization",
                    name: "Fan Leads Inc",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTop />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
