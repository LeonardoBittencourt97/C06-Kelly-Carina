import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import { SITE } from "@/lib/constants";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} | Direito Previdenciário em Curitiba`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    title: `${SITE.name} | Direito Previdenciário`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    locale: SITE.locale,
    type: "website",
    images: [
      {
        url: SITE.ogImage,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    images: [SITE.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" data-theme="light" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'dark') {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  } else {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'light');
                }
              })();
            `,
          }}
        />
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              name: SITE.name,
              image: SITE.ogImage,
              description: SITE.description,
              url: SITE.url,
              telephone: "+5541998702590",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rua das Carmelitas 586, Sala 04",
                addressLocality: "Curitiba",
                addressRegion: "PR",
                postalCode: "81650-000",
                addressCountry: "BR",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              areaServed: "BR",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Direito Previdenciário",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aposentadorias" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auxílio-Doença" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pensão por Morte" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "BPC/LOAS" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Salário-Maternidade" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Auxílio-Acidente" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Benefício por Incapacidade" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Revisão de Benefícios" } },
                ],
              },
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${playfair.variable} antialiased`}
        style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
      >
        {children}
      </body>
    </html>
  );
}
