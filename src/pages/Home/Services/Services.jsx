import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [servicesData, setServicesData] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((result) => setServicesData(result));
  }, []);
  return (
    <>
    <div className="text-center mb-5">
        <p className="text-xl font-bold mb-2 primary-color">Our Services</p>
        <h2 className="text-5xl font-bold">What We Offer For You !!</h2>
    </div>
      <div className="grid md:grid-cols-4 gap-5 md:w-full w-96 mx-auto">
        {servicesData?.map((service) => (
          <ServiceCard service={service} key={service.title}></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default Services;
