import { useFormContext } from "react-hook-form";

import { cn } from "@/utils/cn";

interface FormFieldProps {
  name: string;
  type?: "text" | "tel" | "email" | "password";
  variant?: "basic" | "gradient";
  placeholder: string;
  required?: boolean;
  className?: string;
}

const FormField = ({
  name,
  type = "text",
  placeholder,
  variant,
  required = false,
  className = "",
}: FormFieldProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const fieldError = errors?.[name]?.message as string | undefined;

  const wrapperStyles = cn(
    "relative h-full w-full",
    variant === "basic" && "",
    variant === "gradient" &&
      "rounded-md p-[1px] before:absolute before:inset-0 before:z-[-1] before:rounded-md before:bg-gradient-to-br",
    variant === "gradient" &&
      (fieldError
        ? "before:from-red-500 before:to-red-500"
        : "before:from-[#213767] before:to-[#CBDBFF]"),
    className
  );

  return (
    <div className={wrapperStyles}>
      <input
        type={type}
        placeholder={placeholder}
        {...register(name, required ? { required: "Обов’язкове поле" } : {})}
        className="w-full rounded-md px-[20px] py-[13px] focus:outline-none"
      />
      {fieldError && (
        <p className="absolute -bottom-[16px] left-0 text-xs text-red-500">
          {fieldError}
        </p>
      )}
    </div>
  );
};

export default FormField;
