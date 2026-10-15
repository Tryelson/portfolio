import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import LiveBackground from "@/components/background/LiveBackground";
import { getDictionary, isLocale, locales } from "@/content";
import "../globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const bricolage = Bricolage_Grotesque({ variable: "--font-bricolage", subsets: ["latin"] });

const siteUrl = "https://tryelsonmarques.vercel.app";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const { meta } = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `/${locale}`, languages: { "pt-BR": "/pt", en: "/en" } },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `/${locale}`,
      siteName: "Tryelson Marques",
      locale: locale === "pt" ? "pt_BR" : "en_US",
      type: "website",
    },
    twitter: { card: "summary_large_image", title: meta.title, description: meta.description },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={locale === "pt" ? "pt-BR" : "en"}>
      <body className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} font-sans antialiased`}>
        <LiveBackground />
        {children}
      </body>
    </html>
  );
}
