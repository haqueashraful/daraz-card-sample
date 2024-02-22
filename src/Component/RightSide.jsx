import { faMessage } from "@fortawesome/free-regular-svg-icons";
import {
  faCircleInfo,
  faClockRotateLeft,
  faHandHoldingDollar,
  faHandshake,
  faLocationDot,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RightSide = () => {
  return (
    <div className=" h-full w-full">
      <div className=" bg-gray-50 p-5 space-y-3">
        <div className=" flex justify-between items-center ">
          <h1>Delivery</h1>
          <div>
            <FontAwesomeIcon className="" icon={faCircleInfo} />
          </div>
        </div>
        <div className=" flex justify-between items-center  gap-5 px-1 py-2">
          <p>
            <FontAwesomeIcon icon={faLocationDot} className=" text-2xl" />
          </p>
          <p className=" text-xl text-black">
            Dhaka, Dhaka North, Banani, Road no 12-19
          </p>
          <a href="#" className="text-xl text-sky-400 uppercase">
            Change
          </a>
        </div>
        <hr />

        <div className=" space-y-3">
          <div className=" flex justify-between items-center">
            <FontAwesomeIcon icon={faHandshake} className=" text-2xl" />
            <div>
              <div className=" flex justify-center items-center">
                <h2 className="text-2xl text-black font-semibold">
                  FREE DELIVERY
                </h2>
                <p className=" text-lg">26 FEB - 2 MARCH</p>
              </div>
              <h2 className=" text-lg">6-9 day(s)</h2>
            </div>
            <h2 className="text-black font-medium">FREE</h2>
          </div>
          <div className="flex justify-center items-center gap-12">
            <div className="flex-1"></div>
            <div className=" bg-white p-2 shadow-lg">
                <h2 className=" text-xl">Enjoy Free shipping promotion with minimum spend of <span className=" text-3xl">&#2547;</span> 499 From <a href="#" className=" text-sky-500 font-medium ">Foraji Fashion</a></h2>
            </div>
          </div>
          <div className=" flex items-center gap-5">
          <FontAwesomeIcon icon={faHandHoldingDollar} className=" text-3xl" />
          <h2 className="text-xl">Cash on Delivery Available</h2>
          </div>
        </div>

        <hr />

        <div className=" space-y-3">
            <div className=" flex justify-between items-center">
                <h2>Service</h2>
                <FontAwesomeIcon icon={faCircleInfo} />
            </div>

            <div className=" flex items-center gap-5">
            <FontAwesomeIcon icon={faClockRotateLeft} className=" text-2xl"/>
            <div>
                <h2 className=" text-2xl font-medium">7 Days Return</h2>
                <p className=" text-sm">Change of Mind Applicable</p>
            </div>
            </div>

            <div className=" flex items-center gap-5">
            <FontAwesomeIcon icon={faShieldHalved} className=" text-2xl" />
            <p className=" text-xl">Warranty Not Available</p>
            </div>
        </div>
      </div>

      <div className="bg-gray-50  space-y-3 mt-3">
        <div className="p-5">
        <h1>Sold by</h1>
        <div className=" flex justify-between items-center">
            <h1 className=" text-2xl font-semibold">Foraji Fashion</h1>
            <h2 className=" text-sky-500"><FontAwesomeIcon icon={faMessage} /> <span className=" text-xl font-medium">Chat</span></h2>
        </div>
        </div>
        <table className=" border-collapse border w-full">
            <thead>
               <tr>
               <th className=" border p-2">Positive seller Ratings</th>
                <th className=" border p-2">Chat response Rate</th>
                <th className=" border p-2">Ship On time</th>
               </tr>
            </thead>
            <tbody>
                <tr className=" text-center">
                    <td  className=" border p-2 text-xl font-bold"> 77%</td>
                    <td  className=" border p-2 text-xl"> Not enough data </td>
                    <td  className=" border p-2 text-xl font-bold"> 98%</td>
                </tr>
            </tbody>
        </table>

        <div className="flex justify-center items-center">
            <a href="" className=" text-center text-xl text-sky-500"> Visit Store</a>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
