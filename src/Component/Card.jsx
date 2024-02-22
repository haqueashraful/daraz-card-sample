import LeftSide from "./LeftSide";
import MiddlePart from "./MiddlePart";
import RightSide from "./RightSide";

const Card = () => {
  return (
    <div className="grid grid-cols-7 gap-4 w-full justify-center p-2 ">
      <div className=" col-span-2 w-full">
        <LeftSide />
      </div>
      <div className=" col-span-3 w-full">
        <MiddlePart />
      </div>
      <div className=" col-span-2 w-full">
        <RightSide />
      </div>
    </div>
  );
};

export default Card;
