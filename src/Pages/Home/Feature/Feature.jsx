import React, { useEffect, useState } from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { Link } from "react-router-dom";

const Feature = () => {
  const [featuredFood, setFeaturedFood] = useState([]);

  useEffect(() => {
    // Fetching featured foods
    fetch("http://localhost:5000/FeaturedFoods")
      .then((res) => res.json())
      .then((data) => {
        // Sorting featured foods based on food quantity
        const sortedFeaturedFood = data.sort(
          (a, b) => b.foodQuantity - a.foodQuantity
        );
        setFeaturedFood(sortedFeaturedFood);
      });
  }, []);

  return (
    <div>
      <h2 className="flex justify-center text-5xl font-bold text-[#03081F] my-14">
        Featured Foods
      </h2>
      <div className="mt-20 mb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-auto">
        {featuredFood.slice(0, 6).map((food) => (
          <FeaturedFoodCard featuredFood={food} key={food._id} />
        ))}
      </div>
      <Link
        to="/availableFood"
        className="btn glass bg-[#FC8A06] text-white px-6 py-2 rounded-full mt-1 lg:mt-3 text-lg font-medium flex item-center"
      >
        Show All →
      </Link>
    </div>
  );
};

export default Feature;
