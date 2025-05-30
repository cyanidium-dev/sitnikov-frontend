import { getTranslations } from "next-intl/server";
import Image from "next/image";

const ContactsHero = async () => {
  const t = await getTranslations("contactsPage.hero");

  // background: linear-gradient(188.96deg, #FFFFFF -9.07%, #E0EAFF 56.87%, #FFFFFF 112.06%);

  return (
    <section className="h-[770px] bg-[linear-gradient(188.96deg,_#FFFFFF_-9.07%,_#E0EAFF.87%,_#FFFFFF_112.06%)] pb-[10px] pt-[124px] md:h-[528px] md:pb-0">
      <div className="container h-full max-w-[1280px]">
        <div className="mx-auto flex h-full flex-col justify-between max-md:max-w-[400px] md:flex-row">
          <p className="font-micra md:mt-auto md:max-w-[340px] xl:max-w-[479px] xl:text-[18px] xl:leading-[1.4]">
            {t("descr")}
          </p>

          <div className="flex flex-col max-md:-mx-[22px] md:-mr-[32px] md:mt-auto xl:-mr-[50px] xl:mt-0">
            <h1 className="mb-5 font-micra text-[24px] max-md:mx-[22px] md:ml-auto md:mr-[32px] xl:mb-7 xl:mr-[50px] xl:text-[48px]">
              {t("title")}
            </h1>

            <div className="relative h-[334px] w-full md:w-[480px] xl:w-[680px]">
              <Image
                src="/images/contactsPage/contacts-hero-photo.webp"
                fill
                sizes="(max-width: 768px) 400px, (max-width: 1280px) 480px, 680px"
                alt={t("imgAlt")}
                className="rounded-2xl object-cover md:rounded-l-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsHero;
