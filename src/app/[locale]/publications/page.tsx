import PublicationsContent from "@/components/publicationsPage/PublicationsContent";
import PublicationsHero from "@/components/publicationsPage/PublicationsHero";
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
