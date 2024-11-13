export const TitleTeams = ({ children, color, title }) => {
  return (
    <div className="flex items-center justify-start gap-x-5 text-[41px] font-extrabold">
      <div
        className="ml-3 flex h-[60px] w-[60px] rotate-45 transform items-center justify-center rounded-lg"
        style={{ backgroundColor: `#${color}` }}
      >
        <div className="rotate-50 transform">{children}</div>
      </div>
      <h3>
        acm.<span style={{ color: `#${color}` }}>{title}</span>
      </h3>
    </div>
  );
};
