import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import axios from "axios";
const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  useEffect(() => {
    axios.get("/testimonial.json").then((res) => setTestimonialData(res?.data));
  }, []);
  return (
    <div>
      <div className="my-10 text-center">
        <h2 className="text-xl primary-color font-semibold">Our Testimonial</h2>
        <h1 className="text-5xl font-bold my-2">What Our Clients Say</h1>
      </div>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          checked={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          mod
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {testimonialData?.map((data) => (
            <SwiperSlide
              key={data.id}
              className=" shadow-lg rounded-lg p-12 shadow-[#9FC8FE] mb-5"
            >
              <p className=" text-[#ACB5BB] flex gap-1 h-32">
                <FaQuoteLeft className="text-9xl font-bold -mt-14 text-[#D4E4FD]" />
                {data.feedback}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <img
                    className="w-24 h-24 rounded-full"
                    src={data?.image}
                    alt=""
                  />
                  <p>
                    <h2 className="text-3xl font-bold">{data?.name}</h2>
                    <span className="text-[#1970DC] text-lg font-medium">
                      {data?.role}
                    </span>
                  </p>
                </div>
                <div className="rating rating-md">
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-7"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
