"use client";

import { RefObject, useEffect } from "react";

import ModalForm from "./ModalForm";

type ModalProps = {
  title: string;
  description: string;
  buttonText: string;
  priceText?: string;
  onClose: () => void;
  dialogRef: RefObject<HTMLDialogElement | null>;
};

export function Modal({
  title,
  description,
  buttonText,
  priceText,
  dialogRef,
  onClose,
}: ModalProps) {
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    dialog?.addEventListener("close", onClose);
    return () => {
      dialog?.removeEventListener("close", onClose);
    };
  }, [dialogRef, onClose]);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const rect = dialog.getBoundingClientRect();
    const clickX = e.clientX;
    const clickY = e.clientY;

    const isInDialog =
      clickX >= rect.left &&
      clickX <= rect.right &&
      clickY >= rect.top &&
      clickY <= rect.bottom;

    if (!isInDialog) {
      dialog.close();
      onClose();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      onClick={handleBackdropClick}
      aria-labelledby="modal-title"
      className="rounded-lg backdrop:bg-black/50"
    >
      <div className="relative w-full max-w-[350px] rounded-lg bg-light px-6 py-10 md:max-w-[511px] md:px-[68px] md:py-12">
        <div className="mb-8 text-center md:mb-[51px]">
          <h2
            id="modal-title"
            className="mb-4 font-micra text-[24px] uppercase md:mb-[18px] md:text-[32px]"
          >
            {title}
          </h2>
          <p className="text-[14px] font-light">{description}</p>
        </div>

        <ModalForm
          buttonText={buttonText}
          priceText={priceText}
          closeDialog={onClose}
        />
      </div>
    </dialog>
  );
}
