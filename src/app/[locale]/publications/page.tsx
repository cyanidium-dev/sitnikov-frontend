import PublicationsContent from "@/components/publicationsPage/PublicationListContent";
import PublicationsHero from "@/components/publicationsPage/PublicationListHero";
import { Locale } from "@/types/locale";

const PublicationsPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;

  return (
    <>
      <PublicationsHero />
      <PublicationsContent lang={locale} />
    </>
  );
};

export default PublicationsPage;
