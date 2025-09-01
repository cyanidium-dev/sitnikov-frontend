"use client";

import { useTranslations } from "next-intl";

import { z } from "zod";

import { nameRegex, phoneRegex } from "@/regex/regex";

const useFeedbackFormSchema = () => {
  const t = useTranslations("form.formValidation");

  const feedbackFormSchema = z.object({
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
    message: z.string().max(1000, t("messageValidation")),
  });

  return feedbackFormSchema;
};

export type FeedbackFormSchema = z.infer<
  ReturnType<typeof useFeedbackFormSchema>
>;

export default useFeedbackFormSchema;
