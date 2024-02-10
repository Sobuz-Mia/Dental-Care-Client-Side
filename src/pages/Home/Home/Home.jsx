import Banner from "../Banner/Banner";
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
    </div>
  );
};

export default Home;
