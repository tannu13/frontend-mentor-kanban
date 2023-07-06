import type { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  children: ReactNode;
  variant: "primary" | "secondary" | "destructive";
  size?: "small" | "large";
  className?: string;
};

const VariantClasses = {
  primary: "bg-main-purple text-white hover:bg-main-purple-hover",
  secondary:
    "bg-main-purple/10 text-main-purple hover:bg-main-purple/25 dark:bg-white",
  destructive: "bg-red text-white hover:bg-red-hover",
};

const SizeClasses = {
  small:
    "h-10 rounded-[20px] pb-[9px] pl-[17px] pr-[18px] pt-[8px] text-b-lg !font-bold",
  large: "h-12 rounded-3xl pb-[14px] pl-[17px] pr-[18px] pt-[15px] text-h-md",
};

const Button = ({ children, variant, size = "small", className }: Props) => {
  return (
    <button
      className={clsx(VariantClasses[variant], SizeClasses[size], className)}
    >
      {children}
    </button>
  );
};

export default Button;
