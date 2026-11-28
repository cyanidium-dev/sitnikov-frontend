import { Metadata } from "next";
import { Locale } from "next-intl";

import ContactsView from "@/components/contactsPage/ContactsView";
import JsonLd from "@/components/seo/JsonLd";
import { SECTION_NAMES, pageSchema } from "@/components/seo/seo";
import { ORG_ID } from "@/components/seo/siteSchema";
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
    namespace: "contactsPage",
    path: ROUTES.CONTACTS,
  });
}

const ContactsPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;
  const ld = pageSchema({
    locale,
    type: "ContactPage",
    path: ROUTES.CONTACTS,
    name: SECTION_NAMES.contacts[locale],
    crumbs: [{ name: SECTION_NAMES.contacts[locale], path: ROUTES.CONTACTS }],
    mainEntity: { "@id": ORG_ID },
  });

  return (
    <>
      <JsonLd data={ld} />
      <ContactsView />
    </>
  );
};

export default ContactsPage;
