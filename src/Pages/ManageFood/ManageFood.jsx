import { useState, useEffect } from "react";
import { useAuth } from "../../Hook/useAuth";
import { Helmet } from "react-helmet-async";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ManageFood = () => {
  const [foods, setFoods] = useState([]);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserFoods();
  }, []);

  const fetchUserFoods = async () => {
    try {
      const response = await fetch(
        "https://food-bridge-server.vercel.app/FeaturedFoods"
      );
      if (response.ok) {
        const data = await response.json();
        const userFoods = data.filter(
          (food) => food.donatorEmail === user.email
        );
        setFoods(userFoods);
      } else {
        console.error("Failed to fetch user foods");
        toast.error("Failed to fetch user foods");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error fetching user foods");
    }
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `https://food-bridge-server.vercel.app/FeaturedFoods/${id}`,
            {
              method: "DELETE",
            }
          );
          if (response.ok) {
            setFoods(foods.filter((food) => food._id !== id));
            Swal.fire(
              "Deleted!",
              "Your food item has been deleted.",
              "success"
            );
          } else {
            console.error("Failed to delete food");
            toast.error("Failed to delete food item");
          }
        } catch (error) {
          console.error("Error:", error);
          toast.error("Error deleting food item");
        }
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/updateFood/${id}`);
    toast.info("Redirecting to update form...");
  };

  return (
    <div className="overflow-x-auto">
      <Helmet>
        <title>FoodBridge | Manage Food</title>
      </Helmet>
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
                  className="btn btn-ghost btn-md"
                  onClick={() => handleUpdate(food._id)}
                >
                  Update
                </button>
                <button
                  className="btn btn-ghost btn-md"
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
      <ToastContainer />
    </div>
  );
};

export default ManageFood;
