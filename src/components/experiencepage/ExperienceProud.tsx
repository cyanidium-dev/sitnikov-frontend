import { getMessages, getTranslations } from "next-intl/server";

import InfoBox from "../shared/InfoBox";

type ProudItem = {
  title: string;
  descr: string;
};

const ExperienceProud = async () => {
  const t = await getTranslations("experiencePage.proud");
  const messages = await getMessages();

  const proudList = messages.experiencePage.proud.proudList as ProudItem[];
  const columns = [
    proudList.slice(0, 2),
    proudList.slice(2, 4),
    proudList.slice(4, 6),
  ];

  return (
    <section className="pb-[120px] pt-[152px] xl:pb-[200px] xl:pt-[100px]">
      <div className="container max-w-[1280px]">
        <h2 className="mx-auto mb-[52px] max-w-[490px] text-center font-micra text-[24px] xl:mb-[60px] xl:text-[40px]">
          {t("title")}
        </h2>

        <div className="mx-auto flex flex-col gap-4 max-md:max-w-[400px] md:flex-row md:justify-between md:gap-6">
          {columns.map((column, colIdx) => (
            <ul key={colIdx} className="flex flex-col gap-4 md:w-[32%]">
              {column.map(({ title, descr }, idx) => (
                <li key={idx} className="h-full">
                  <InfoBox
                    variant="gradient"
                    classname="flex flex-col gap-4 h-full md:pb-[35px] md:pt-8"
                  >
                    <h3 className="font-micra text-[22px] xl:text-[24px]">
                      {title}
                    </h3>
                    <p className="font-light max-xl:text-[14px]">{descr}</p>
                  </InfoBox>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceProud;
