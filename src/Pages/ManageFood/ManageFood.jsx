import { useState, useEffect } from "react";
import { useAuth } from "../../Hook/useAuth";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const ManageFood = () => {
  const [foods, setFoods] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    fetchUserFoods();
  }, []);

  const fetchUserFoods = async () => {
    try {
      const response = await fetch("http://localhost:5000/FeaturedFoods");
      if (response.ok) {
        const data = await response.json();
        const userFoods = data.filter(
          (food) => food.donatorEmail === user.email
        );
        setFoods(userFoods);
      } else {
        console.error("Failed to fetch user foods");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this food?"
    );
    if (confirmDelete) {
      try {
        const response = await fetch(
          `http://localhost:5000/FeaturedFoods/${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          setFoods(foods.filter((food) => food._id !== id));
        } else {
          console.error("Failed to delete food");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleUpdate = (id) => {
    // Redirect to update form with food ID
    window.location.href = `/updateFood/${id}`;
  };

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th>Food Name</th>
            <th>Pickup Location</th>
            <th>Quantity</th>
            <th>Expire Date</th>
            <th>Additional Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr key={food._id}>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={food.foodImage} alt="Food Image" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{food.foodName}</div>
                  </div>
                </div>
              </td>
              <td>{food.pickupLocation}</td>
              <td>{food.foodQuantity}</td>
              <td>{food.expiredDate}</td>
              <td>{food.additionalNotes}</td>
              <td>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleUpdate(food._id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-ghost btn-xs"
                  onClick={() => handleDelete(food._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th>Food Name</th>
            <th>Pickup Location</th>
            <th>Quantity</th>
            <th>Expire Date/Time</th>
            <th>Additional Notes</th>
            <th>Actions</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ManageFood;
