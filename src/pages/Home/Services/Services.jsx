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
    <div>
        <p className="text-5xl font-bold text-center mb-5">Our Services</p>
    </div>
      <div className="grid md:grid-cols-4 gap-5">
        {servicesData?.map((service) => (
          <ServiceCard service={service} key={service.title}></ServiceCard>
        ))}
      </div>
    </>
  );
};

export default Services;
