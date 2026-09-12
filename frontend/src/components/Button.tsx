import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "primaryOutline"
  | "secondary"
  | "secondaryOutline"
  | "gradient";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  icon?: ReactNode;
  children: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary-400 text-neutral-950 shadow-md hover:bg-primary-700 hover:text-white",
  primaryOutline:
    "bg-transparent border border-neutral-900 text-neutral-950 hover:bg-primary-900 hover:text-white hover:border-primary-900",
  secondary:
    "bg-secondary-300 text-neutral-950 shadow-md hover:bg-secondary-700 hover:text-white",
  secondaryOutline:
    "bg-transparent border border-neutral-900 text-neutral-950 hover:bg-secondary-900 hover:text-white hover:border-secondary-900",
  gradient:
    "bg-[linear-gradient(to_right,_var(--color-secondary-500)_-30%,_var(--color-primary-500)_130%)] text-primary-950 shadow-lg hover:brightness-90",
};

export const Button = ({
  variant = "primary",
  icon,
  children,
  className = "",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`flex items-center justify-center gap-2.5 w-full py-2.5 rounded-lg text-center transition-colors ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
};
