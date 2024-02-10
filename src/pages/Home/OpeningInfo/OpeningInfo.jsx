import {  FaRegClock } from "react-icons/fa";
import { FaLocationDot, FaPhone } from 'react-icons/fa6';
const OpeningInfo = () => {
  return (
    <div className="mt-10 flex justify-around">
      <div className="flex max-w-fit shadow-lg p-10 gap-3 rounded-lg bg-[#E8F7FC]">
        <FaRegClock className="text-4xl primary-color" />
        <div>
          <h2 className="text-3xl font-bold mb-2 ">Opening Hours</h2>
          <p className="text-[#505C63]">
            Open 10.00 am to 8.00 pm <br /> <span className="font-semibold">Everyday</span>
          </p>
        </div>
      </div>
      <div className="flex max-w-fit shadow-lg p-10 gap-3 rounded-lg bg-[#E8F7FC]">
        <FaLocationDot className="text-4xl primary-color" />
        <div>
          <h2 className="text-3xl font-bold mb-2 ">Our Location</h2>
          <p className="text-[#505C63]">
            Milon Bazar, Madarganj, Post Code:2010<br /> <span className="font-semibold">Jamalpur</span>
          </p>
        </div>
      </div>
      <div className="flex max-w-fit shadow-lg p-10 gap-3 rounded-lg bg-[#E8F7FC]">
        <FaPhone className="text-4xl primary-color" />
        <div>
          <h2 className="text-3xl font-bold mb-2 ">Contact Us</h2>
          <p className="text-[#505C63]">
            +8801734942558 <br /> 
            +8801937020620
          </p>
        </div>
      </div>
    </div>
  );
};

export default OpeningInfo;
