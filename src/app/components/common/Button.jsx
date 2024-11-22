import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const buttonVariants = {
  default:
    "bg-[#0A84FF] text-azul-git shadow hover:bg-[#0A84FF]/50 border-none font-[500]",
  outline:
    "border border-[#0A84FF] bg-transparent shadow-sm hover:bg-gray-100 hover:bg-[#0A84FF] hover:text-azul-git",
};

const Button = React.forwardRef(
  (
    {
      children,
      action,
      variant = "default",
      size = "default",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        onClick={action}
        className={twMerge(
          clsx(
            "focus-visible:ring-ring inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-[#0A84FF] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
            "rounded-[1.87rem] px-3 py-1 text-xs md:px-10 md:py-2 md:text-base xl:border-4 xl:px-[2.55rem] xl:py-[1rem] xl:text-[1.87rem] xl:font-[600]",
            buttonVariants[variant],
            className,
          ),
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
