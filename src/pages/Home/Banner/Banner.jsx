import Lottie from "lottie-react";
import banner from "../../../assets/Smile Dental Care Logo.jpg";
import youtubePlay from "../../../assets/Animation - 1707378912442.json";
import logo from "../../../assets/2.png";
import { MdOutlinePhoneInTalk } from "react-icons/md";
const Banner = () => {
  return (
    <div className="flex justify-center items-center gap-5 my-8">
      <div className="w-1/2">
        <h2 className="text-6xl font-bold">
          Get Ready For Your Best Ever Dental Experience!
        </h2>
        <p className="text-lg my-3 text-[#A2A8B2]">
          We used only the best quality materials on the market in order to
          provide the best products to our patients, So do not worry about
          anything and book yourself.
        </p>
        <div className="flex justify-around items-center -ml-12">
          <button className="btn bg-primary text-white">
            Book Appointment
          </button>
          <p className="flex justify-center items-center font-bold">
            <Lottie className="w-20" animationData={youtubePlay} loop={true} />
            See How to Work
          </p>
        </div>
        <div className="flex justify-center items-center mt-6 ">
          <img src={logo} alt="" className="w-24" />
          <p className="-ml-4 font-semibold">
            We are able to restore <span className="text-[#22B7D3]">dental health issue</span>
          </p>
        </div>
      </div>
      <div className="relative">
        <img className="max-h-screen " src={banner} alt="" />
        <div className="shadow-md w-fit p-2 flex items-center gap-3 absolute -right-10 bottom-8 rounded-md">
            <button className="btn bg-[#A8E2EE] text-[#22B2D8] text-3xl"><MdOutlinePhoneInTalk/></button>
            <p className="font-bold">
                <h6 className="text-[#22B7D3] font-bold text-lg">Dental 24H Emergency </h6>
                <span>+8801734942558</span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
