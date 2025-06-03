import { getMessages, getTranslations } from "next-intl/server";

import ContactFeedbackForm from "./ContactFeedbackForm";

type FieldKey = "name" | "tel" | "mes";

export type FormPlaceholderMap = Record<FieldKey, string>;

const ContactsFeedback = async () => {
  const t = await getTranslations("contactsPage.feedback");

  const messages = await getMessages();

  const formPlaceholder = messages.contactsPage.feedback
    .formPlaceholder as FormPlaceholderMap;

  const btnText = messages.contactsPage.feedback.button as string;

  return (
    <section className="relative overflow-hidden pb-[120px] xl:pb-[163px]">
      <div className="container max-w-[1280px]">
        <div className="max-w-[400px] max-xl:mx-auto max-xl:text-center xl:ml-auto xl:max-w-[602px]">
          <h2 className="mb-3 font-micra text-[24px] uppercase leading-[1.4] xl:mb-4 xl:text-[40px]">
            {t("title")}
          </h2>
          <p className="mb-[52px] text-[18px] font-light leading-[1.6] text-dark-light xl:mb-9">
            {t("descr")}
          </p>

          <ContactFeedbackForm
            formPlaceholder={formPlaceholder}
            btnText={btnText}
          />
        </div>
      </div>

      <div className="absolute -bottom-[120px] right-0 h-[315px] w-[241px] max-xl:bg-[url('/images/contactsPage/contacts-feedback-decor-mob.webp')] xl:hidden" />
    </section>
  );
};

export default ContactsFeedback;
