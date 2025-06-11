"use client";

import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";

import useModalFormSchema, {
  ModalFormSchema,
} from "@/schemas/useModalFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import ButtonOrLink from "../../shared/button/ButtonOrLink ";
import FormField from "../../shared/formField/FormField";

interface IModalFormProps {
  buttonText: string;
  priceText?: string;
  closeDialog: () => void;
}

const ModalForm = ({ buttonText, closeDialog, priceText }: IModalFormProps) => {
  const t = useTranslations("form");

  const validationSchema = useModalFormSchema();

  const methods = useForm<ModalFormSchema>({
    resolver: zodResolver(validationSchema),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: ModalFormSchema) => {
    console.log("Форма отправлена", data);
    reset();
    closeDialog();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex w-full flex-col"
      >
        <div className="mb-8 flex flex-col gap-4">
          <FormField
            name="name"
            type="text"
            placeholder={t("formPlaceholder.name")}
            variant="basic"
          />

          <FormField
            name="phone"
            type="tel"
            placeholder={`* ${t("formPlaceholder.tel")}`}
            required
            variant="basic"
          />
        </div>

        {priceText && (
          <span className="mb-5 leading-[20px] max-md:text-center">
            {t("price")}: {priceText} грн
          </span>
        )}

        <ButtonOrLink className="bg-dark" type="submit">
          {buttonText}
        </ButtonOrLink>

        {/* <button
      type="submit"
      disabled={isSubmitting}
      className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
    >
      {isSubmitting ? "Отправка..." : buttonText}
    </button> */}
      </form>
    </FormProvider>
  );
};

export default ModalForm;
