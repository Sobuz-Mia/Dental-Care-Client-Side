import { FaLocationDot, FaPhone } from "react-icons/fa6";

const ContactUs = () => {
  const handleSubmit = e =>{
    e.target.preventDefault
  }
  return (
    <div className="bg-[#E5F6FE] flex justify-between p-10 rounded-lg my-3 md:flex-row flex-col">
      <div>
        <h2 className="text-5xl font-bold mb-4">Contact With Us</h2>
        <p className="text-[#4D5664] w-fit">
          Have a question about our services or need assistance? Do not hesitate
          to contact us! Our friendly team at Musa Dental Care is dedicated to
          providing top-notch dental care tailored to your needs. Reach out
          today, and lets start your journey towards a brighter, healthier
          smile.
        </p>
        <p className="flex gap-2 my-3 font-bold">
          <FaPhone className="text-2xl  text-[#22B2D8]" />
          +8801734942558
        </p>
        <p className="flex gap-2 font-bold">
          <FaLocationDot className="text-2xl  text-[#22B2D8]" />
          Mymensingh , Jamalpur, Bangladesh
        </p>
      </div>
      <div>
        <form className="card-body" onSubmit={(e)=>handleSubmit(e)}>
          <div className="flex gap-5">
            <div className="form-control md:w-full w-1/2">
              <label className="label">
                <span className="label-text">Name:</span>
              </label>
              <input
                type="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-full w-1/2">
              <label className="label">
                <span className="label-text">Email:</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control md:w-full w-1/2">
              <label className="label">
                <span className="label-text">Mobile Numbers:</span>
              </label>
              <input
                type="text"
                placeholder="Mobile Number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-full w-1/2">
              <label className="label">
                <span className="label-text">Doctors Name:</span>
              </label>
              <input
                type="email"
                placeholder="Doctor Name"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="flex gap-5">
            <div className="form-control md:w-full w-1/2">
              <label className="label">
                <span className="label-text">Date:</span>
              </label>
              <input
                type="date"
                placeholder="Mobile Number"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-full w-1/2">
              <label className="label">
                <span className="label-text">Time:</span>
              </label>
              <select className="select select-bordered ">
                <option disabled selected>
                  Select Time
                </option>
                <option>10.00 am</option>
                <option>11.00 am</option>
              </select>
            </div>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-primary text-white">Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
