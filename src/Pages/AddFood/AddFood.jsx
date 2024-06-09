import { useState } from "react";
import { useAuth } from "../../Hook/useAuth";

const AddFood = () => {
  const [foodName, setFoodName] = useState("");
  const [foodImage, setFoodImage] = useState(null);
  const [foodQuantity, setFoodQuantity] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [expiredDateTime, setExpiredDateTime] = useState("");
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
    formData.append("expiredDateTime", expiredDateTime);
    formData.append("additionalNotes", additionalNotes);
    formData.append("donatorImage", user.image);
    formData.append("donatorName", user.name);
    formData.append("donatorEmail", user.email);
    formData.append("foodStatus", foodStatus);
    console.log(formData);
    // const addFood = { foodName ,foodImage, foodQuantity , pickupLocation ,expiredDateTime , additionalNotes , foodStatus, user.image ,user.name ,user.email} ;
    const addFood = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expiredDateTime,
      additionalNotes,
      foodStatus,
    };
    fetch("http://localhost:5000/FeaturedFoods", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addFood),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Food item added successfully!");
          history.push("/availableFoods");
        } else {
          alert("Failed to add food item");
        }
      });
    //     // console.log(addFood);
    // try {
    //   const response = await fetch("http://localhost:5000/FeaturedFoods", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(addFood),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //     });
    //   if (response.ok) {
    //     alert("Food item added successfully!");
    //     // Optionally reset the form
    //   } else {
    //     alert("Failed to add food item");
    //   }
    // } catch (error) {
    //   console.error("Error:", error);
    //   alert("An error occurred while adding the food item");
    // }
  };

  return (
    <div className="max-w-xl mx-auto p-4 bg-white shadow-md rounded-lg">
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
            Food Image
          </label>
          <input
            type="file"
            onChange={(e) => setFoodImage(e.target.files[0])}
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
            Expired Date/Time
          </label>
          <input
            type="date"
            value={expiredDateTime}
            onChange={(e) => setExpiredDateTime(e.target.value)}
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
            User name
          </label>
          <input
            defaultValue={user.displayName}
            onChange={(e) => setAdditionalNotes(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            User Email
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
    </div>
  );
};

export default AddFood;
