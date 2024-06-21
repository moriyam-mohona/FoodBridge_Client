import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const UpdateMyFood = () => {
  const { id } = useParams();
  const [foodDetails, setFoodDetails] = useState({
    foodName: "",
    foodQuantity: "",
    pickupLocation: "",
    expiredDate: "",
    additionalNotes: "",
    foodImage: "",
  });

  useEffect(() => {
    fetch(`https://food-bridge-server.vercel.app/FeaturedFoods/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setFoodDetails(data);
      });
  }, [id]);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const foodName = form.foodName.value;
    const foodQuantity = form.foodQuantity.value;
    const pickupLocation = form.pickupLocation.value;
    const expiredDate = form.expiredDate.value;
    const additionalNotes = form.additionalNotes.value;
    const foodImage = form.foodImage.value;

    const updateFood = {
      foodName,
      foodQuantity,
      pickupLocation,
      expiredDate,
      additionalNotes,
      foodImage,
    };
    console.log(updateFood);
    fetch(`https://food-bridge-server.vercel.app/FeaturedFoods/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          title: "Success!",
          text: "Spot Updated Successfully",
          icon: "success",
          confirmButtonText: "Cool",
        });
      });
  };
  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>FoodBridge | Update Food Details</title>
      </Helmet>
      <h1 className="text-2xl font-bold mb-4">Update Food Details</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Name
          </label>
          <input
            type="text"
            name="foodName"
            defaultValue={foodDetails.foodName}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Quantity
          </label>
          <input
            type="text"
            name="foodQuantity"
            defaultValue={foodDetails.foodQuantity}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pickup Location
          </label>
          <input
            type="text"
            name="pickupLocation"
            defaultValue={foodDetails.pickupLocation}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Expired Date
          </label>
          <input
            type="date"
            name="expiredDate"
            defaultValue={foodDetails.expiredDate}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Additional Notes
          </label>
          <textarea
            name="additionalNotes"
            defaultValue={foodDetails.additionalNotes}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Food Image
          </label>
          <input
            type="text"
            name="foodImage"
            defaultValue={foodDetails.foodImage}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <button
          type="submit"
          className="btn glass bg-[#FC8A06] text-white px-6 py-2 rounded-full hover:bg-blue-600"
        >
          Update Food
        </button>
      </form>
    </div>
  );
};

export default UpdateMyFood;
