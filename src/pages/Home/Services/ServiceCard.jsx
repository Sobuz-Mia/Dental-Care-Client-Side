const ServiceCard = ({ service }) => {
  const { title, image, description } = service;
  return (
    <div className="card bg-base-100 shadow-xl border hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <div className="flex justify-center border border-[#22B2D8] rounded-full w-32 h-32 mx-auto mt-5">
        <img src={image} alt="Shoes" className="rounded-full h-24 w-24 mt-4" />
      </div>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-[#22B2D8]">{title}</h2>
        <p className="h-16">
          {description?.length > 20
            ? `${description?.substring(0, 50)}...`
            : description}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
