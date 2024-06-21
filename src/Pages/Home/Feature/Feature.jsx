import { useEffect, useState } from "react";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Feature = () => {
  const [featuredFood, setFeaturedFood] = useState([]);

  useEffect(() => {
    fetch("https://food-bridge-server.vercel.app/FeaturedFoods")
      .then((res) => res.json())
      .then((data) => {
        const sortedFeaturedFood = data.sort(
          (a, b) => b.foodQuantity - a.foodQuantity
        );
        setFeaturedFood(sortedFeaturedFood);
      });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 2 }}
    >
      <h2 className="flex justify-center text-5xl font-bold text-[#03081F] my-14">
        Featured Foods
      </h2>
      <div className="mt-20 mb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:mx-auto">
        {featuredFood.slice(0, 6).map((food, index) => (
          <motion.div
            key={food._id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <FeaturedFoodCard featuredFood={food} />
          </motion.div>
        ))}
      </div>
      <Link
        to="/availableFood"
        className="btn glass bg-[#FC8A06] text-white px-6 py-2 rounded-full mt-1 lg:mt-3 text-lg font-medium flex item-center"
      >
        Show All →
      </Link>
    </motion.div>
  );
};

export default Feature;
