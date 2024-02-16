import { FaFacebook, FaInstagram, FaLinkedin, FaLocationDot, FaTwitter, FaYoutube } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import dentalLogo from '../../../assets/logo-1.jpg'
const Footer = () => {
  return (
    <footer className=" bg-[#F7FCFF] my-5 p-10">
      <div className="footer text-base-content grid md:grid-cols-5 grid-cols-2 gap-20 md:gap-0">
        <aside>
          <img src={dentalLogo}alt="" className="w-24" />
          <p className="font-bold -mt-2">
            Musa Dental Care
            <br />
            <span className="font-normal">Committed to excellence since 2014.</span>
          </p>
          <p className="flex gap-4 mt-2">
            <a href="#" className="text-2xl primary-color"><FaFacebook/></a>
            <a href="" className="text-2xl primary-color"><FaInstagram/></a>
            <a href="" className="text-2xl primary-color"><FaYoutube/></a>
            <a href="" className="text-2xl primary-color"><FaLinkedin/></a>
            <a href="" className="text-2xl primary-color"><FaTwitter/></a>
          </p>
        </aside>
        <nav>
          <h6 className="text-xl primary-color">About Us</h6>
          <a className="link link-hover">Our Story</a>
          <a className="link link-hover">Our Guarantee</a>
          <a className="link link-hover">Terms & Conditions</a>
          <a className="link link-hover">Privacy Policy</a>
        </nav>
        <nav>
        <h6 className="text-xl primary-color">Services</h6>
          <a className="link link-hover">Dentist team</a>
          <a className="link link-hover">Special service</a>
          <a className="link link-hover">Testimonial</a>
          <a className="link link-hover font-semibold"> Pricing plan</a>
        </nav>
        <nav>
        <h6 className="text-xl primary-color">Help</h6>
          <a className="link link-hover">Book Appointment</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Blog</a>
          <a className="link link-hover">Update News</a>
        </nav>
        <nav>
        <h6 className="text-xl primary-color">Contact</h6>
          <a className="link link-hover flex items-center gap-2">
            <FaLocationDot className="text-2xl primary-color"/>
            <p className="text-md">Milon Bazar,Madarganj,Jamalpur</p>
          </a>
          <a className="link link-hover flex  gap-2">
            <FaPhoneAlt className="text-2xl primary-color"/>
            <p>
                +8801734-942558
                <br />
                +8801937-020620
            </p>
          </a>
          <a className="link link-hover flex  gap-2">
            <MdOutgoingMail className="text-2xl primary-color"/>
            <p>
              mahfuzurRahman@gmail.com
            </p>
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
