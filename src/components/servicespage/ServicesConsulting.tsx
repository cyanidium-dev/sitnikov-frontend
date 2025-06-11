import { getMessages, getTranslations } from "next-intl/server";

import ModalTrigger from "../module/modal/ModalTrigger";
import ServiceList from "./ServiceList";

const ServicesConsulting = async () => {
  const t = await getTranslations("servicepage.consulting");
  const messages = await getMessages();

  const consultingList = messages.servicepage.consulting
    .consultingList as string[];

  return (
    <section className="relative overflow-hidden pb-[261px] pt-[120px] xl:py-[112px]">
      <div className="container max-w-[400px] md:max-w-[700px] xl:max-w-[1280px]">
        <h2 className="mb-[52px] font-micra text-[24px] xl:mb-12 xl:max-w-[409px] xl:text-[40px]">
          {t("title")}
        </h2>

        <ServiceList
          data={consultingList}
          className="mb-10 xl:mb-[68px] xl:max-w-[409px]"
        />

        <ModalTrigger variant="newsletter" buttonClassName="xl:max-w-[409px]" />
      </div>

      <div className="absolute bottom-0 right-0 xl:-bottom-[50px] xl:h-[726px] xl:w-[827px] xl:bg-[url('/images/servicespage/services-analytics-person-desk.webp')]" />
    </section>
  );
};

export default ServicesConsulting;
