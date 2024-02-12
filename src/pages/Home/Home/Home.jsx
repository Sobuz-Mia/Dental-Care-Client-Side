import Banner from "../Banner/Banner";
import ContactUs from "../ContactUs/ContactUs";
import OpeningInfo from "../OpeningInfo/OpeningInfo";
import Services from "../Services/Services";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Services/>
      <OpeningInfo/>
      <Testimonial/>
      <ContactUs/>
    </div>
  );
};

export default Home;
