import React, { useEffect, useState } from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";

const Feature = () => {
  const [featuredFood, setFeaturedFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/FeaturedFoods")
      .then((res) => res.json())
      .then((data) => setFeaturedFood(data));
  }, []);
  return (
    <div>
      <h2 className="flex justify-center text-5xl font-bold text-[#03081F] my-14">
        Featured Foods
      </h2>
      <div className="mt-20 mb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-auto">
        {featuredFood?.slice(0, 6).map((featuredFood) => (
          <FeaturedFoodCard
            featuredFood={featuredFood}
            key={featuredFood._id}
          ></FeaturedFoodCard>
        ))}
      </div>
    </div>
  );
};

export default Feature;
