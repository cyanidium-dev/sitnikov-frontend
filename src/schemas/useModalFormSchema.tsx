"use client";

import { useTranslations } from "next-intl";

import { z } from "zod";

import { nameRegex, phoneRegex } from "@/regex/regex";

const useModalFormSchema = () => {
  const t = useTranslations("form.formValidation");

  const modalFormSchema = z.object({
    name: z
      .string()
      .min(2, t("nameMinMaxValidation"))
      .max(150, t("nameMinMaxValidation"))
      .regex(nameRegex, t("nameAllowedSymbols")),
    phone: z
      .string()
      .regex(phoneRegex, t("phoneInvalidFormat"))
      .max(25, t("phoneMaxValidation"))
      .refine(val => {
        const digits = val.replace(/\D/g, "");
        return digits.length >= 7 && digits.length <= 15;
      }, t("phoneMinMaxValidation")),
  });

  return modalFormSchema;
};

export type ModalFormSchema = z.infer<ReturnType<typeof useModalFormSchema>>;

export default useModalFormSchema;
