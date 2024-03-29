
import  { useState } from "react";
import ImageZoom from "./ImageZoom";
import Slider from "./Slider";

const LeftSide = () => {
  const [zoomedImageUrl, setZoomedImageUrl] = useState(null);

  const handleImageSelect = (imageUrl) => {
    setZoomedImageUrl(imageUrl);
  };

  return (
    <div>
      <div className="w-full">
        <ImageZoom imageUrl={zoomedImageUrl} />
      </div>
      <div className="mt-5">
        <Slider onImageSelect={handleImageSelect} />
      </div>
    </div>
  );
};

export default LeftSide;
