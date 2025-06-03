"use client";

import { FormProvider, useForm } from "react-hook-form";

import useFeedbackFormSchema, {
  FeedbackFormSchema,
} from "@/schemas/useFeedbackFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import ButtonOrLink from "../shared/button/ButtonOrLink ";
import FormField from "../shared/formField/FormField";
import FormTextarea from "../shared/formField/FormTextarea";
import { FormPlaceholderMap } from "./ContactsFeedback";

interface IContactFeedbackFormProps {
  formPlaceholder: FormPlaceholderMap;
  btnText: string;
}

const ContactFeedbackForm = ({
  formPlaceholder,
  btnText,
}: IContactFeedbackFormProps) => {
  const validationSchema = useFeedbackFormSchema();

  const methods = useForm<FeedbackFormSchema>({
    resolver: zodResolver(validationSchema),
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = (data: FeedbackFormSchema) => {
    console.log(data);
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex w-full flex-col gap-4 xl:gap-5"
      >
        <div className="flex w-full flex-col gap-4 xl:flex-row xl:gap-5">
          <FormField
            name="name"
            type="text"
            placeholder={formPlaceholder.name}
            variant="gradient"
          />

          <FormField
            name="phone"
            type="tel"
            placeholder={`* ${formPlaceholder.tel}`}
            required
            variant="gradient"
          />
        </div>

        <FormTextarea name="message" placeholder="Повідомлення" />

        <ButtonOrLink type="submit">{btnText}</ButtonOrLink>
      </form>
    </FormProvider>
  );
};

export default ContactFeedbackForm;
