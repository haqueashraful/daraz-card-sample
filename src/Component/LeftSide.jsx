import ImageZoom from "./ImageZoom";
import Slider from "./Slider";

const LeftSide = () => {
  return <div>
    <div className=" w-full">
    <ImageZoom/>
    </div>
    <div className=" mt-5">
      <Slider />
    </div>
  </div>;
};

export default LeftSide;
