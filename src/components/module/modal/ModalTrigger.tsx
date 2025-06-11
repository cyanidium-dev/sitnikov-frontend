"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";

import ButtonOrLink from "@/components/shared/button/ButtonOrLink ";

import { Modal } from "./Modal";

type Variant = "course" | "consultation" | "service";

const modalVariants: Record<
  Variant,
  {
    buttonText: string;
    title: string;
    description: string;
    modalButton: string;
    priceText?: string;
    buttonClass?: string;
  }
> = {
  course: {
    buttonText: "course.triggerButton",
    title: "course.title",
    description: "course.description",
    modalButton: "course.modalButton",
    // priceText: undefined,
    // buttonClass: "bg-blue-600 text-white",
  },
  consultation: {
    buttonText: "consultation.triggerButton",
    title: "consultation.title",
    description: "consultation.description",
    modalButton: "consultation.modalButton",
  },
  service: {
    buttonText: "service.triggerButton",
    title: "service.title",
    description: "service.description",
    modalButton: "service.modalButton",
  },
};

interface IModalTriggerProps {
  variant: Variant;
  buttonVariant?: "dark" | "light" | "transparent" | "light-gradient";
  buttonClassName?: string;
}

const ModalTrigger = ({
  variant,
  buttonVariant = "dark",
  buttonClassName,
}: IModalTriggerProps) => {
  const t = useTranslations("modal");
  const config = modalVariants[variant];

  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openDialog = () => {
    dialogRef.current?.showModal();
    document.body.style.overflow = "hidden";
  };

  const closeDialog = () => {
    dialogRef.current?.close();
    document.body.style.overflow = "";
  };

  return (
    <>
      <ButtonOrLink
        onClick={openDialog}
        variant={buttonVariant}
        className={buttonClassName}
      >
        {t(config.buttonText)}
      </ButtonOrLink>

      <Modal
        title={t(config.title)}
        description={t(config.description)}
        buttonText={t(config.modalButton)}
        priceText={config.priceText}
        dialogRef={dialogRef}
        onClose={closeDialog}
      />
    </>
  );
};

export default ModalTrigger;
