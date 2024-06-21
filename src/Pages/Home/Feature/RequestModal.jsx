import { useState } from "react";
import { useAuth } from "../../../Hook/useAuth";

const RequestModal = ({ food, closeModal }) => {
  const { user } = useAuth();
  const [additionalNotes, setAdditionalNotes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const requestData = {
      foodId: food._id,
      foodName: food.foodName,
      foodImage: food.foodImage,
      donatorEmail: food.donator.email,
      donatorName: food.donator.donatorName,
      userEmail: user.email,
      requestDate: new Date().toISOString(),
      pickupLocation: food.pickupLocation,
      expiredDateTime: food.expiredDateTime,
      additionalNotes,
      status: "requested",
    };

    try {
      const response1 = await fetch(
        "https://food-bridge-server.vercel.app/requestedFoods",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        }
      );

      const response2 = await fetch(
        `https://food-bridge-server.vercel.app/FeaturedFoods/request/${food._id}`,
        {
          method: "POST",
        }
      );

      if (response1.ok && response2.ok) {
        alert("Request sent successfully!");
        closeModal();
      } else {
        alert("Failed to send request");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while sending the request");
    }
  };

  return (
    <div className="w-96 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-4">Request Food</h2>
        <form onSubmit={handleSubmit}>
          <button
            type="submit"
            className="w-full bg-[#FC8A06] text-white font-bold py-2 px-4 rounded-md hover:bg-[#e07605]"
          >
            Request
          </button>
          <button
            type="button"
            className="w-full mt-2 bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-400"
            onClick={closeModal}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default RequestModal;
