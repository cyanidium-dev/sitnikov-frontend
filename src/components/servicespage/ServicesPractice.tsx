import { getMessages, getTranslations } from "next-intl/server";

import ModalTrigger from "../module/modal/ModalTrigger";
import ServiceList from "./ServiceList";

const ServicesPractice = async () => {
  const t = await getTranslations("servicepage.practice");
  const messages = await getMessages();

  const practiceList = messages.servicepage.practice.practiceList as string[];

  return (
    <section className="relative pb-[120px] pt-[188px] xl:py-[88px]">
      <div className="container max-w-[400px] md:max-w-[1280px]">
        <h2 className="mb-[52px] font-micra text-[24px] xl:mb-12 xl:text-[40px]">
          {t("title")}
        </h2>

        <div className="mb-10 flex flex-col gap-4 md:flex-row md:justify-between">
          <ServiceList
            data={practiceList.slice(0, 4)}
            className="md:min-w-[365px]"
          />
          <ServiceList
            data={practiceList.slice(4)}
            className="md:max-w-[474px]"
          />
        </div>

        <ModalTrigger
          variant="service"
          buttonClassName="md:mr-auto md:w-[343px]"
        />
      </div>

      <div className="absolute bottom-0 right-0 hidden bg-[url('/images/servicespage/services-practice-decor-desk.webp')] xl:block xl:h-[206px] xl:w-[251px]" />
    </section>
  );
};

export default ServicesPractice;
