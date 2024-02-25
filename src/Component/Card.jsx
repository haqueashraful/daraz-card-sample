import LeftSide from "./LeftSide";
import MiddlePart from "./MiddlePart";
import RightSide from "./RightSide";

const Card = () => {
  return (
    <div className="lg:grid grid-cols-7 gap-4 w-full justify-center p-2 ">
      <div className=" lg:col-span-2 w-full">
        <LeftSide />
      </div>
      <div className=" lg:col-span-3 w-full">
        <MiddlePart />
      </div>
      <div className=" lg:col-span-2 w-full">
        <RightSide />
      </div>
    </div>
  );
};

export default Card;
