import {
  faBangladeshiTakaSign,
  faHeart,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import img1 from "../assets/Rectangle 1.png";
import img2 from "../assets/Rectangle 5.png";
import { useState } from "react";

const MiddlePart = () => {

    const [count, setCount] = useState(0)
    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        
        if (count > 0 ) {
            setCount(count - 1);
        }
    }
  return (
    <div>
      <div className=" py-3 px-2 space-y-4">
        <h1 className=" text-2xl font-medium text-black">
          Foraji short sleeve T-shirt For Men
        </h1>
        <div className="flex  justify-between items-center">
          <div>
            <div className="flex  items-center gap-3">
              <div className="rating rating-sm">
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-6"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <h1 className=" text-sky-300">186 Ratings</h1>
            </div>
            <h2 className=" text-sky-300">
              <span className=" text-gray-500">Brand</span> No Brand | More Men
              from No Brand
            </h2>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <FontAwesomeIcon className=" mr-6" icon={faShareNodes} />
            </div>
            <div>
              {" "}
              <FontAwesomeIcon icon={faHeart} />
            </div>
          </div>
        </div>
      </div>

      <div className=" border-t-2 border-b-2 py-4 px-2 flex items-center gap-2">
        <FontAwesomeIcon className="text-3xl" icon={faBangladeshiTakaSign} />
        <h1 className=" text-3xl font-medium">99</h1>
      </div>

      <div className=" flex gap-10 my-8">
        <div className=" w-24">
          <h2>Color Family</h2>
        </div>
        <div>
          <h3 className=" mb-2 text-black">Navy Blue</h3>
          <div className=" flex justify-center items-center gap-4">
            <img className=" w-16 h-16" src={img1} alt="" />
            <img className=" w-16 h-16" src={img2} alt="" />
          </div>
        </div>
      </div>

      <div className=" flex gap-10 my-8">
        <div className=" w-24">
          <h2>Size</h2>
        </div>
        <div>
          <h3 className=" mb-2 text-black">Int</h3>
          <div className=" flex justify-center items-center gap-4">
            
            <button className=" bg-transparent border border-black px-3 hover:border-orange-400 hover:text-orange-400">M</button>
            <button className=" bg-transparent border border-black px-3 hover:border-orange-400 hover:text-orange-400">L</button>
            <button className=" bg-transparent border border-black px-3 hover:border-orange-400 hover:text-orange-400">XL</button>

          </div>
        </div>
      </div>

      <div className=" flex gap-10 my-8">
        <div className=" w-24">
          <h2>Quantity</h2>
        </div>
        <div>
          <h3 className=" mb-2 text-black">Int</h3>
          <div className=" flex justify-center items-center gap-1">
            <button onClick={decrement} disabled={count === 0} className={`bg-${count === 0 ? 'gray-50' : 'gray-200'} text-2xl m-0 py-0 px-3 flex justify-center items-center `}>-</button>
            <h1 className="border border-gray-200 text-2xl py-0 px-3 m-0">{count}</h1>
           <button onClick={increment} disabled={count === 5} className={`bg-${count === 5 ? 'gray-50' : 'gray-200'}  text-2xl m-0 py-0 px-3 flex justify-center items-center `}>+</button>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center gap-5 px-2">
        <button className=" bg-sky-400 w-full text-3xl text-white py-2">Buy Now</button>
        <button className=" w-full text-3xl text-white py-2 bg-orange-400">Add to Cart</button>
      </div>
    </div>
  );
};

export default MiddlePart;
