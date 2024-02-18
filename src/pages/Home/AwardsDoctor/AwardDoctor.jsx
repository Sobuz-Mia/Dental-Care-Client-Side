import doctorImg from "../../../assets/Doctor.png";
import { IoShieldCheckmark } from "react-icons/io5";
const AwardDoctor = () => {
  return (
    <div className="">
      <h2 className="my-7 text-3xl text-center primary-color font-bold">
        Meet Our Specialist Doctor
      </h2>
      <div className="flex justify-center md:flex-row flex-col">
        <div className="flex-1">
          <img
            className="h-fit p-4 md:w-2/3 w-1/2 mx-auto"
            src={doctorImg}
            alt=""
          />
          <div className="hidden">
            <h2>Dr.Mahfuzur Rahman Musa</h2>
            <span>Dentist</span>
          </div>
        </div>
        <div className="flex-1 ">
          <h3 className="font-bold border-b-2 border-[#E8F7FC]">
            Dr.Mahfuzur Rahman (Musa)
          </h3>
          <p className="mt-2 text-[#9399A2]">
            As the head of our esteemed dental team, Dr.Musa brings over 12
            years of unparalleled expertise and a passion for transforming
            smiles. With a Doctor of Dental Surgery (DDS) degree from IHT in
            Dhaka and Dr. Musa is dedicated to delivering exceptional patient
            care with a personalized touch.
          </p>
          <div className="grid grid-cols-2 gap-3 mt-3  text-[#9399A2]">
            <p className="flex gap-4 items-center">
              <IoShieldCheckmark className="text-3xl primary-color" />
              <span>
                Proficiency in reading and interpreting dental X-ray Result.
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <IoShieldCheckmark className="text-3xl primary-color" />
              <span>
                Extensive experience in diagnosing dental problems and
                conditions
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <IoShieldCheckmark className="text-3xl primary-color" />
              <span>
                Expertise in teeth whitening using the most recent dental
                innovations
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <IoShieldCheckmark className="text-3xl primary-color" />
              <span>
                Expertise in feeling teeth cavities and elimanating decay.
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <IoShieldCheckmark className="text-3xl primary-color" />
              <span>Expertise in Routine dental exams for any conditions</span>
            </p>
            <p className="flex gap-2 items-center">
              <IoShieldCheckmark className="text-3xl primary-color" />
              <span>
                Extensive experience in diagnosing dental problems and
                conditions
              </span>
            </p>
            <div className="text-black">
              <h2 className="text-xl font-semibold text-[#24B2D6]">Dentist</h2>
              <h1 className="text-2xl font-bold">Dr. Mahfuzur Rahman</h1>
            </div>
            <div className="text-black flex gap-4 items-center">
              <img
                src="https://previews.123rf.com/images/vectorhome/vectorhome1907/vectorhome190701854/127671308-work-experience-icon-vector-illustration.jpg"
                alt=""
                className="w-24 h-24"
              />
              <p className="flex flex-col">
                <span className="text-xl font-semibold text-[#24B2D6]">
                  12 Years
                </span>

                <span className="font-bold"> Dentist Experience</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardDoctor;
