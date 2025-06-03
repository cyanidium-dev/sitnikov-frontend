"use client";

import { useTranslations } from "next-intl";

import { nameRegex, onlyDigitsRegex } from "@/regex/regex";
import { z } from "zod";

const useFeedbackFormSchema = () => {
  const t = useTranslations("formValidation");

  const feedbackFormSchema = z.object({
    name: z
      .string()
      .min(2, t("nameMinMaxValidation"))
      .max(150, t("nameMinMaxValidation"))
      .regex(nameRegex, t("nameAllowedSymbols"))
      .nullable(),
    phone: z
      .string()
      .min(7, t("phoneMinMaxValidation"))
      .max(15, t("phoneMinMaxValidation"))
      .regex(onlyDigitsRegex, t("phoneOnlyDigits")),
    message: z.string().max(1000, t("messageValidation")).nullable(),
  });

  return feedbackFormSchema;
};

export type FeedbackFormSchema = z.infer<
  ReturnType<typeof useFeedbackFormSchema>
>;

export default useFeedbackFormSchema;
