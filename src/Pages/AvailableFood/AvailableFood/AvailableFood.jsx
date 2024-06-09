import { useState, useEffect } from "react";
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
        // Filter available foods
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
        const dateA = new Date(a.expiredDateTime);
        const dateB = new Date(b.expiredDateTime);
        return sortBy === "asc" ? dateA - dateB : dateB - dateA;
      })
    : filteredFoods;

  return (
    <div>
      <h2>Available Foods</h2>

      {/* Search Section */}
      <div>
        <input
          type="text"
          placeholder="Search by Food Name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Sorting Section */}
      <div>
        <button onClick={() => setSortBy("asc")}>Sort Ascending</button>
        <button onClick={() => setSortBy("desc")}>Sort Descending</button>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {sortedFoods.map((food) => (
          <div key={food._id} className="border p-4 rounded-md">
            <img
              src={food.foodImage}
              alt={food.foodName}
              className="w-full h-auto mb-4"
            />
            <h3>{food.foodName}</h3>
            <p>{food.pickupLocation}</p>
            <p>Quantity: {food.foodQuantity}</p>
            <p>Expired Date/Time: {food.expiredDateTime}</p>
            <p>Additional Notes: {food.additionalNotes}</p>
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
