export const TitleTeams = ({ children, color, title }) => {
  return (
    <div className="flex items-center justify-between font-extrabold text-[41px] ">
      <div
        className="ml-3 h-[60px] w-[60px] transform rotate-45 rounded-lg flex justify-center items-center"
        style={{ backgroundColor: `#${color}` }}
      >
        <div className="transform rotate-50">
          {children}
        </div>
      </div>
      <h3 >
        acm.<span style={{ color: `#${color}` }}>{title}</span>
      </h3>
    </div>
  )
}
