import { useState, useEffect } from "react";
import { useAuth } from "../../Hook/useAuth";

const MyFoodRequest = () => {
  const { user } = useAuth();
  const [requestedFoods, setRequestedFoods] = useState([]);

  useEffect(() => {
    const fetchRequestedFoods = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/requestedFoods?userEmail=${user.email}`
        );
        if (response.ok) {
          const data = await response.json();
          setRequestedFoods(data);
        } else {
          console.error("Failed to fetch requested foods");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchRequestedFoods();
  }, [user.email]);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Donator</th>
            <th>Pickup Location</th>
            <th>Expired Date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {requestedFoods.map((food) => (
            <tr key={food._id}>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={food.foodImage} alt="Food Image" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{food.foodName}</div>
                    <div className="text-sm opacity-50">{food.userEmail}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="font-bold">{food.donatorName}</div>
                <div className="text-sm opacity-50">{food.donatorEmail}</div>
              </td>
              <td>{food.pickupLocation}</td>
              <td>{food.expiredDateTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyFoodRequest;
