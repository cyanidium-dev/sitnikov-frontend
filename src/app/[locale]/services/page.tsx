import { Metadata } from "next";
import { Locale } from "next-intl";
import { getTranslations } from "next-intl/server";

import HomeBottomCTA from "@/components/homepage/HomeBottomCTA";
import JsonLd from "@/components/seo/JsonLd";
import { SECTION_NAMES, pageSchema } from "@/components/seo/seo";
import ServicesDirection from "@/components/servicespage/ServicesDirection";
import ServicesFaq from "@/components/servicespage/ServicesFaq";
import ServicesHero from "@/components/servicespage/ServicesHero";
import ServicesProcess from "@/components/servicespage/ServicesProcess";
import { ROUTES } from "@/constants/routes";
import { generatePageMetadata } from "@/utils/generatePageMetaData";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;

  return generatePageMetadata({
    locale,
    namespace: "servicepage",
    path: ROUTES.SERVICES,
  });
}

const ServicesPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicepage" });
  const directions = t.raw("directions") as {
    id: string;
    title: string;
    short: string;
  }[];
  const ld = pageSchema({
    locale,
    path: ROUTES.SERVICES,
    name: SECTION_NAMES.services[locale],
    description: t("hero.metaDescr"),
    crumbs: [{ name: SECTION_NAMES.services[locale], path: ROUTES.SERVICES }],
    extra: [
      {
        "@type": "OfferCatalog",
        name: SECTION_NAMES.services[locale],
        itemListElement: directions.map(d => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: d.title,
            description: d.short,
            serviceType: d.title,
            areaServed: { "@type": "Country", name: "Україна" },
            provider: { "@id": "https://sitnikov.com.ua/#organization" },
            url: `https://sitnikov.com.ua/${locale}${ROUTES.SERVICES}#${d.id}`,
          },
        })),
      },
    ],
  });

  return (
    <>
      <JsonLd data={ld} />
      <ServicesHero />
      <ServicesDirection index={0} />
      <ServicesDirection index={1} />
      <ServicesDirection index={2} />
      <ServicesProcess />
      <ServicesFaq />
      <HomeBottomCTA />
    </>
  );
};

export default ServicesPage;
