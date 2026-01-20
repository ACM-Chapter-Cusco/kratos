const WinnerItem = ({ winner }) => {
  return (
    <div
      className="relative h-[16rem] w-[22rem] tablet:h-[20rem] tablet:w-[36rem] desktop:h-[24rem] desktop:w-[37.5rem] lg-desktop:h-[26rem] lg-desktop:w-[47rem] rounded-[1.25rem] bg-[#0F1317]"
    >
      {/* Position and Category (top left) */}
      <div
        className="absolute top-2 left-2 tablet:top-3 tablet:left-3 desktop:top-4 desktop:left-4 lg-desktop:top-6 lg-desktop:left-6 z-20"
      >
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="text-h7 font-OpenSans font-[800] text-[#1492FF]">{winner.position}</span>
            <span className="text-p-xs font-OpenSans font-[600] text-[#1492FF] opacity-70">{winner.category}</span>
          </div>
          <div className="border-l border-[#1492FF]/30 pl-3">
            <h3 className="font-Play text-p-sm tablet:text-p desktop:leading-7 leading-5 font-[700] break-words text-[#646464] max-w-[8rem] tablet:max-w-[12rem]">
              {winner.equipo}
            </h3>
          </div>
        </div>
      </div>
      
      {/* Edition (bottom left, aligned with picture horizontally) */}
      <div
        className="absolute bottom-2 left-2 tablet:bottom-3 tablet:left-3 desktop:bottom-4 desktop:left-4 lg-desktop:bottom-6 lg-desktop:left-6 z-20"
      >
        <div className="text-[#1492FF] opacity-30 font-OpenSans font-[800]">
          <p className="text-p tablet:text-h6">Edición</p>
          <p className="text-h4 tablet:text-h2">{winner.edicion}</p>
        </div>
      </div>
      
      {/* Picture (bottom right) */}
      <img
        style={{ display: 'block' }}
        className="absolute right-6 bottom-1 tablet:right-8 tablet:bottom-2 desktop:right-10 desktop:bottom-2 lg-desktop:right-12 lg-desktop:bottom-2 z-30 w-[10rem] h-[7rem] tablet:w-[12rem] tablet:h-[9rem] desktop:w-[20rem] desktop:h-[14rem] lg-desktop:w-[25rem] lg-desktop:h-[18rem] rounded-2xl object-cover"
        src={winner.image}
        alt={winner.equipo}
      />
      
      <div className="bg-blue/10 desktop:h-[14rem] desktop:w-[32rem] absolute top-1/2 left-1/2 z-10 h-[12rem] w-[12rem] -translate-x-1/2 -translate-y-1/2 rounded-[32rem] blur-[45px]"></div>
    </div>
  );
};

export default WinnerItem;
