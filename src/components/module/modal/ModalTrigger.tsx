"use client";

import { useRef } from "react";

import ButtonOrLink from "@/components/shared/button/ButtonOrLink ";

import { Modal } from "./Modal";

type Variant = "newsletter" | "checkout" | "consultation" | "download";

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
  newsletter: {
    buttonText: "Подписаться",
    title: "Подпишитесь на новости",
    description: "Узнавайте первым о новинках и скидках",
    modalButton: "Отправить",
    priceText: undefined,
    buttonClass: "bg-blue-600 text-white",
  },
  checkout: {
    buttonText: "Оформить заказ",
    title: "Готовы к покупке?",
    description: "Заполните форму и мы с вами свяжемся",
    modalButton: "Заказать",
    priceText: "99₴",
    buttonClass: "bg-green-600 text-white",
  },
  consultation: {
    buttonText: "Получить консультацию",
    title: "Бесплатная консультация",
    description: "Ответим на любые ваши вопросы",
    modalButton: "Оставить заявку",
    priceText: undefined,
    buttonClass: "bg-purple-600 text-white",
  },
  download: {
    buttonText: "Скачать гайд",
    title: "Получите бесплатный гайд",
    description: "Введите свои данные для скачивания",
    modalButton: "Скачать",
    priceText: undefined,
    buttonClass: "bg-gray-800 text-white",
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
        {config.buttonText}
      </ButtonOrLink>
      {/* <button
        onClick={openDialog}
        className={`rounded px-4 py-2 text-sm font-medium ${config.buttonClass}`}
      >
        {config.buttonText}
      </button> */}

      <Modal
        title={config.title}
        description={config.description}
        buttonText={config.modalButton}
        priceText={config.priceText}
        dialogRef={dialogRef}
        onClose={closeDialog}
      />
    </>
  );
};

export default ModalTrigger;
