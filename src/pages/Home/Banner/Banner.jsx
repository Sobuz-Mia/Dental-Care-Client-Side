import Lottie from "lottie-react";
import banner from "../../../assets/Smile Dental Care Logo.jpg";
import youtubePlay from '../../../assets/Animation - 1707378912442.json'
const Banner = () => {
  return (
    <div className="flex justify-center items-center gap-5">
      <div className="w-1/2">
        <h2 className="text-6xl font-bold">Get Ready For Your Best Ever Dental Experience!</h2>
        <p className="text-lg my-3 text-[#A2A8B2]">
          We used only the best quality materials on the market in order to
          provide the best products to our patients, So do not worry about
          anything and book yourself.
        </p>
        <div className="flex justify-around items-center">
          <button className="btn bg-primary text-white">Get Start For Appointment</button>
          <p className="flex justify-center items-center font-bold"><Lottie className='w-20' animationData={youtubePlay} loop={true} />See How to Work</p>
        </div>
      </div>
      <div className="">

        <img className="max-h-screen" src={banner} alt="" />
      </div>
    </div>
  );
};

export default Banner;
