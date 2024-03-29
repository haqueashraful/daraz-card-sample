import { useEffect, useState } from "react";
import img1 from "../assets/Rectangle 1.png";
import img2 from "../assets/Rectangle 3.png";
import img3 from "../assets/Rectangle 4.png";
import img4 from "../assets/Rectangle 5.png";
import img5 from "../assets/Rectangle 6.png";
import img6 from "../assets/Rectangle 7.png";
import img7 from "../assets/Rectangle 8.png";
import img8 from "../assets/Rectangle6.png";

const Slider = ({ onImageSelect }) => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    handleImageSelect(images[0]);
    console.log('loaded')
  }, []);

  const handleImageSelect = (imageUrl) => {
    onImageSelect(imageUrl);
  };

  const showLeftArrow = currentIndex !== 0;
  const showRightArrow = currentIndex + 4 < images.length;

  return (
    <div className="relative flex items-center gap-1">
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-l ${!showLeftArrow ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={() => setCurrentIndex(prevIndex => prevIndex - 1)}
        disabled={!showLeftArrow}
      >
        ❮
      </button>
      <div className="flex items-center justify-center gap-2 overflow-hidden flex-1">
        {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
          <div key={index} className="inline-block">
            <img
              src={image}
              alt={`Slide ${currentIndex + index + 1}`}
              className="w-20 h-20 cursor-pointer"
              onClick={() => handleImageSelect(image)}
              onMouseEnter={() => handleImageSelect(image)}
            />
          </div>
        ))}
      </div>
      <button
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-r ${!showRightArrow ? 'cursor-not-allowed opacity-50' : ''}`}
        onClick={() => setCurrentIndex(prevIndex => prevIndex + 1)}
        disabled={!showRightArrow}
      >
        ❯
      </button>
    </div>
  );
};

export default Slider;
