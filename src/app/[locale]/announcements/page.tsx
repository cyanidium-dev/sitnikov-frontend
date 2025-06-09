import AnnouncementsContent from "@/components/announcementsPage/AnnouncementsContent";
import AnnouncementsHero from "@/components/announcementsPage/AnnouncementsHero";
import { Locale } from "@/types/locale";

const AnnouncementsPage = async ({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) => {
  const { locale } = await params;

  return (
    <>
      <AnnouncementsHero />
      <AnnouncementsContent lang={locale} />
    </>
  );
};

export default AnnouncementsPage;
