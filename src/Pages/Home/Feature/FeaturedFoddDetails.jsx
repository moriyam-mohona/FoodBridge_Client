import { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosPeople } from "react-icons/io";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Hook/useAuth";

const FeaturedFoodDetails = () => {
  const singleFood = useLoaderData();
  const { user } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const {
    _id: foodId,
    foodImage,
    foodName,
    foodQuantity,
    pickupLocation,
    donatorEmail,
    expiredDate,
    additionalNotes,
    details,
    donatorName,
    donatorPhoto,
  } = singleFood;

  const [notes, setNotes] = useState("");

  const requestFoodMutation = useMutation({
    mutationFn: async (requestDetails) => {
      const response = await fetch(
        "https://food-bridge-server.vercel.app/requestedFoods",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestDetails),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit food request");
      }

      return response.json();
    },
    onSuccess: () => {
      alert("Food request submitted successfully!");
      queryClient.invalidateQueries("requestedFoods");
      navigate("/");
    },
    onError: (error) => {
      console.error("Error:", error);
      alert("An error occurred while submitting the food request");
    },
  });

  const handleRequestFood = () => {
    const requestDetails = {
      ...singleFood,
      userEmail: user.email,
      requestDate: new Date().toISOString(),
      additionalNotes: notes,
    };

    requestFoodMutation.mutate(requestDetails);
  };

  return (
    <div className="container grid grid-cols-12 mx-auto">
      <div
        className="flex flex-col justify-center col-span-12 align-middle dark:bg-gray-300 bg-no-repeat bg-cover lg:col-span-6 lg:h-auto"
        style={{
          backgroundImage: `url(${foodImage})`,
          backgroundPosition: "center center",
          backgroundBlendMode: "multiply",
          backgroundSize: "cover",
        }}
      >
        <div className="flex flex-col items-center p-8 py-12 text-center text-white">
          <h1 className="py-4 text-5xl font-bold">{foodName}</h1>
          <div className="text-3xl flex flex-col items-center">
            <span className="flex gap-3">
              <IoIosPeople /> {foodQuantity} Servings
            </span>
            <span className="flex">
              <CiLocationOn />
              {pickupLocation}
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 dark:divide-gray-300">
        <div className="pt-6 pb-4 space-y-2">
          <div className="flex items-center mt-8 space-x-4">
            <h3 className="text-md font-medium">
              <span className="font-bold">Donator Name :</span> {donatorName}
            </h3>
          </div>
          <p>
            <span className="font-bold">Expired Date : </span>
            {expiredDate}
          </p>
          <p>
            <span className="font-bold">Details : </span>
            {details}
          </p>
          <p className="pb-6">
            <span className="font-bold">Additional Notes:</span>{" "}
            {additionalNotes}
          </p>
        </div>
        <button
          className="btn glass bg-[#FC8A06] text-white px-6 py-2 rounded-full mt-1 lg:mt-3 text-lg font-medium flex items-center"
          onClick={() => document.getElementById("my_modal_3").showModal()}
        >
          Request Food
        </button>
      </div>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" className="relative">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
          </form>
          <h2 className="font-bold text-lg">Request Food</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleRequestFood();
            }}
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Food Name
              </label>
              <input
                type="text"
                value={foodName}
                readOnly
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Food Image
              </label>
              <img
                src={foodImage}
                alt={foodName}
                className="w-full h-auto mb-4"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Food Id
              </label>
              <input
                type="text"
                value={foodId}
                readOnly
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Donator Email
              </label>
              <input
                type="text"
                value={donatorEmail}
                readOnly
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Donator Name
              </label>
              <input
                type="text"
                value={donatorName}
                readOnly
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                User Email
              </label>
              <input
                type="text"
                value={user.email}
                readOnly
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Request Date
              </label>
              <input
                type="text"
                value={new Date().toLocaleString()}
                readOnly
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Pickup Location
              </label>
              <input
                type="text"
                value={pickupLocation}
                readOnly
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Expired Date
              </label>
              <input
                type="text"
                value={expiredDate}
                readOnly
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm bg-gray-100"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Additional Notes
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#FC8A06] text-white font-bold py-2 px-4 rounded-md hover:bg-[#e07605]"
            >
              Request
            </button>
            <button
              type="button"
              className="w-full mt-2 bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-md hover:bg-gray-400"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              Cancel
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default FeaturedFoodDetails;
