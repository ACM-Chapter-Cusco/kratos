import clsx from "clsx";

export const TitleTeams = ({ children, color, title }) => {
  const iconClasses = clsx(
    "ml-3 flex h-[60px] w-[60px] rotate-45 transform items-center justify-center rounded-lg",
    {
      "bg-blue": color === "blue",
      "bg-icpc": color === "icpc",
      "bg-dev": color === "dev",
      "bg-ai": color === "ai",
    },
  );

  const textClasses = clsx({
    "text-blue": color === "blue",
    "text-icpc": color === "icpc",
    "text-dev": color === "dev",
    "text-ai": color === "ai",
  });

  return (
    <div className="flex items-center justify-start gap-x-7 text-[30px] font-extrabold md:text-[40px]">
      <div className={iconClasses}>
        <div className="-rotate-45 transform">{children}</div>
      </div>
      <h3>
        acm.<span className={textClasses}>{title}</span>
      </h3>
    </div>
  );
};
