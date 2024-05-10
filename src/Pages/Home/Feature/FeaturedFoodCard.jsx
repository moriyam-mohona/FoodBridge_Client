const FeaturedFoodCard = ({ featuredFood }) => {
  const { _id, foodImage } = featuredFood;
  return (
    <div>
      {/* <h2>Foods : {foodImage}</h2> */}
      <img src={foodImage} alt="" />
      {/* <div className="rounded-3xl p-5 card bg-base-100 border-2 border-[#008EC4] shadow-xl flex flex-col gap-2 justify-around mx-1 mb-1 w-full ">
        <img
          src={image}
          className="object-cover object-center w-full h-60 mb-5 rounded-xl"
        />
        <div className="flex  items-start justify-between w-full gap-2">
          <h2 className="text-xl font-semibold">{touristsSpotName}</h2>
          <p className="font-semibold text-xl text-[#008EC4] ">{countryName}</p>
        </div>
        <p className="flex items-center gap-1 font-normal">
          <CiLocationOn />
          {location}
        </p>
        <p className="text-xl font-medium">${averageCost}Per Person</p>
        <Link
          to={`/touristSpot/${_id}`}
          className="btn glass bg-[#008EC4] text-white px-6 py-2 rounded-full mt-1 lg:mt-3 text-lg font-medium flex item-center"
        >
          View Details →
        </Link>
      </div> */}
    </div>
  );
};

export default FeaturedFoodCard;
