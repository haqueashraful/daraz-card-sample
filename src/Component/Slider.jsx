import { useState } from "react";
import img1 from "../assets/Rectangle 1.png"
import img2 from "../assets/Rectangle 3.png"
import img3 from "../assets/Rectangle 4.png"
import img4 from "../assets/Rectangle 5.png"
import img5 from "../assets/Rectangle 6.png"
import img6 from "../assets/Rectangle 7.png"

const Slider = () => {
  const images = [img1, img2, img3, img4, img5, img6];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = currentIndex + 4 < images.length ? currentIndex + 4 : images.length - 1;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = currentIndex - 4 >= 0 ? currentIndex - 4 : 0;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="relative flex items-center gap-1">
      <button
        className={`absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-l ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={goToPrevSlide}
        disabled={currentIndex === 0}
        style={{ zIndex: 1 }}
      >
        ❮
      </button>
      <div className="flex items-center justify-center gap-2 overflow-hidden flex-1">
        {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
          <div key={index} className="inline-block">
            <img src={image} alt={`Slide ${currentIndex + index + 1}`} className="w-20 h-20" />
          </div>
        ))}
      </div>
      <button
        className={`absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-r ${currentIndex + 4 >= images.length ? 'opacity-50 cursor-not-allowed' : ''}`}
        onClick={goToNextSlide}
        disabled={currentIndex + 4 >= images.length}
        style={{ zIndex: 1 }}
      >
        ❯
      </button>
    </div>
  );
};

export default Slider;
