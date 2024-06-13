import { useState } from "react";
import { useAuth } from "../../Hook/useAuth";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddFood = () => {
  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState(null);
  const [foodQuantity, setFoodQuantity] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [expiredDate, setexpiredDate] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [foodStatus, setFoodStatus] = useState("available");
  const { user } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("foodName", foodName);
    formData.append("foodImage", foodImage);
    formData.append("foodQuantity", foodQuantity);
    formData.append("pickupLocation", pickupLocation);
    formData.append("expiredDate", expiredDate);
    formData.append("additionalNotes", additionalNotes);
    formData.append("donatorName", user.name);
    formData.append("donatorEmail", user.email);
    formData.append("foodStatus", foodStatus);

    const addFood = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredDate,
      additionalNotes,
      foodStatus,
      donatorEmail: user.email,
      donatorName: user.displayName,
      donatorPhoto: user.photoURL,
    };
    fetch("https://food-bridge-server.vercel.app/FeaturedFoods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addFood),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Food item added successfully!");
          history.push("/availableFoods");
        } else {
          toast.error("Failed to add food item");
        }
      });
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <Helmet>
        <title>FoodBridge | Add Food</title>
      </Helmet>
      <h2 className="text-2xl font-bold mb-4">Add Food</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Food Name
          </label>
          <input
            type="text"
            value={foodName}
            onChange={(e) => setFoodName(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Food Image URL
          </label>
          <input
            type="text"
            onChange={(e) => setFoodImage(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Food Quantity
          </label>
          <input
            type="number"
            value={foodQuantity}
            onChange={(e) => setFoodQuantity(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Pickup Location
          </label>
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Expired Date
          </label>
          <input
            type="date"
            value={expiredDate}
            onChange={(e) => setexpiredDate(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Additional Notes
          </label>
          <input
            value={additionalNotes}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Donator name
          </label>
          <input
            defaultValue={user.displayName}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Donator Email
          </label>
          <input
            defaultValue={user.email}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full btn glass bg-[#FC8A06] text-white px-6 py-2 rounded-full mt-1 lg:mt-3 text-lg font-medium flex item-center"
        >
          Add
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddFood;
