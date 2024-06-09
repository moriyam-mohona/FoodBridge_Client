import { useState, useEffect } from "react";
import { useAuth } from "../../Hook/useAuth";

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
    <div>
      <h2>Manage Food</h2>
      <table>
        <thead>
          <tr>
            <th>Food Image</th>
            <th>Food Name</th>
            <th>Pickup Location</th>
            <th>Quantity</th>
            <th>Expire Date/Time</th>
            <th>Additional Notes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {foods.map((food) => (
            <tr key={food._id}>
              <td>
                <img src={food.foodImage} alt={food.foodName} width="50" />
              </td>
              <td>{food.foodName}</td>
              <td>{food.pickupLocation}</td>
              <td>{food.foodQuantity}</td>
              <td>{food.expiredDateTime}</td>
              <td>{food.additionalNotes}</td>
              <td>
                <button onClick={() => handleUpdate(food._id)}>Update</button>
                <button onClick={() => handleDelete(food._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageFood;
