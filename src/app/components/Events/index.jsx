import H2 from "../common/H2";
import LeftLine from "../common/LeftLine";
import Slider from "./Slider";

const Events = () => {
  return (
    <div className="flex items-center w-full">
      <LeftLine color="0A84FF" className="hidden md:flex" />
      <div className=" flex flex-col flex-grow items-center justify-center my-16">
        <div className="w-full flex justify-center mb-16 text-white-azul">
          <H2 title="eventos" />
        </div>
        <div className=" w-[90%] flex flex-col items-center justify-center">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Events;
