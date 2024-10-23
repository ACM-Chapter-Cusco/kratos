import H2 from "../common/H2";
import LeftLine from "../common/LeftLine";
import Slider from "./Slider";

const Events = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-16">
      <div className="flex w-full justify-center text-white-azul">
        <H2 title="events" />
      </div>

      <div className="my-2 flex w-full items-center justify-center lg:justify-between">
        <div className="hidden lg:block">
          <LeftLine color="0A84FF" />
        </div>
        <div className="flex w-[90%] flex-col items-center justify-center">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Events;
