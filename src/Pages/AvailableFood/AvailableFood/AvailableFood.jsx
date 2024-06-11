import { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const AvailableFood = () => {
  const [availableFoods, setAvailableFoods] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    // Fetch available foods from backend
    fetchAvailableFoods();
  }, []);

  const fetchAvailableFoods = async () => {
    try {
      const response = await fetch("http://localhost:5000/FeaturedFoods");
      if (response.ok) {
        const data = await response.json();
        const availableFoods = data.filter(
          (food) => food.foodStatus === "available"
        );
        setAvailableFoods(availableFoods);
      } else {
        console.error("Failed to fetch available foods");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Filter available foods based on search query
  const filteredFoods = availableFoods.filter((food) =>
    food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort available foods based on expiry date
  const sortedFoods = sortBy
    ? [...filteredFoods].sort((a, b) => {
        const dateA = new Date(a.expiredDate);
        const dateB = new Date(b.expiredDate);
        return sortBy === "asc" ? dateA - dateB : dateB - dateA;
      })
    : filteredFoods;

  return (
    <div className="flex flex-col justify-center  h-full">
      <h2 className="flex justify-center text-5xl font-bold text-[#03081F] my-5">
        Available Foods
      </h2>
      <div className="flex items-center text-lg p-4 input input-bordered gap-2 m-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="w-6 h-6 opacity-50"
        >
          <path
            fillRule="evenodd"
            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
            clipRule="evenodd"
          />
        </svg>
        <input
          className="w-full  rounded "
          type="text"
          placeholder="Search by Food Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="mb-10 mx-auto">
        <select
          className="select select-bordered w-full text-lg opacity-70"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="" disabled className="">
            Sort By
          </option>
          <option value="asc">Sort Ascending</option>
          <option value="desc">Sort Descending</option>
        </select>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {sortedFoods.map((food) => (
          <div key={food._id} className="border p-4 rounded-md">
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="w-full h-80 mb-4"
            />
            <h3 className="font-bold text-2xl mb-2">{food.foodName}</h3>
            <p className="flex gap-2 mb-2">
              <span className="font-bold">Pickup Location</span>
              {food.pickupLocation}
            </p>
            <p className="mb-2">
              <span className="font-bold">Quantity:</span> {food.foodQuantity}
            </p>
            <p className="mb-2">
              <span className="font-bold">Expired Date:</span>{" "}
              {food.expiredDate}
            </p>
            <p className="mb-2">
              <span className="font-bold">Additional Notes:</span>{" "}
              {food.additionalNotes}
            </p>
            <Link
              to={`/foodDetails/${food._id}`}
              className="btn glass bg-[#FC8A06] text-white px-6 py-2 rounded-full mt-1 lg:mt-3 text-lg font-medium flex item-center"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableFood;
