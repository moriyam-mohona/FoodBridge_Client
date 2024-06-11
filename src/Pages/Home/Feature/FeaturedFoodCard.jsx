import { CiLocationOn } from "react-icons/ci";
import { FcExpired } from "react-icons/fc";
import { IoIosPeople } from "react-icons/io";
import { Link } from "react-router-dom";

const FeaturedFoodCard = ({ featuredFood }) => {
  const {
    _id,
    foodImage,
    foodName,
    donatorEmail,
    donatorName,
    donatorPhoto,
    foodQuantity,
    pickupLocation,
    expiredDate,
  } = featuredFood;
  return (
    <div>
      {/* <h2>Foods : {foodImage}</h2> */}

      <div className="rounded-3xl p-5 card bg-base-100 border-2 border-[#008EC4] shadow-xl flex flex-col gap-2 justify-around mx-1 mb-1 w-full ">
        <img
          src={foodImage}
          className="object-cover object-center w-full h-60 mb-5 rounded-xl"
        />
        <div className="flex  items-start justify-between w-full gap-2">
          <h2 className="text-xl font-semibold">{foodName}</h2>
        </div>
        <p className="flex items-center gap-1 font-normal">
          <CiLocationOn />
          {pickupLocation}
        </p>
        <div className="flex items-center space-x-4">
          <img
            src="https://source.unsplash.com/100x100/?portrait"
            alt=""
            className="w-10 h-10 rounded-full dark:bg-gray-500"
          />{" "}
          {/* <h3 className="text-sm font-medium">{donator.donatorName}</h3> */}
          <h3 className="text-sm font-medium">{donatorName}</h3>
        </div>
        <div className="flex justify-between">
          <p className="text-md font-medium flex gap-2 items-center">
            <IoIosPeople />
            {foodQuantity} Servings
          </p>
          <p className="text-md font-medium flex gap-2 items-center">
            <FcExpired />
            {expiredDate}
          </p>
        </div>
        <Link
          to={`/foodDetails/${_id}`}
          className="btn glass bg-[#FC8A06] text-white px-6 py-2 rounded-full mt-1 lg:mt-3 text-lg font-medium flex item-center"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFoodCard;
