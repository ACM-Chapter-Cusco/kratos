import React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

const buttonVariants = {
  default:
    "bg-[#0A84FF] text-blue-git shadow hover:bg-[#0A84FF]/50 border-none font-[500]",
  outline:
    "border-2 border-[#0A84FF] bg-transparent shadow-sm hover:bg-gray-100 hover:bg-[#0A84FF] hover:text-blue-git",
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
            "focus-visible:ring-ring text-blue inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap transition-colors duration-300 focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
            "rounded-full px-3 py-[0.5rem] text-[16px] font-bold md:px-10 md:py-2 md:text-[20px] xl:border-4 xl:px-[3rem] xl:py-[0.5rem] xl:text-[1.87rem] xl:font-[600]",
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
