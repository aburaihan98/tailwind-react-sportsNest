import { useContext, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Swal from "sweetalert2";
import SimpleRating from "../component/simpleRating/SimpleRating";
import { AuthContext } from "../provider/AuthProvider";

export default function AddEquipment() {
  const { user } = useContext(AuthContext);
  const [rating, setRating] = useState(0);

  const handleAddEquipment = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const sports = form.sports.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const customization = form.customization.value;
    const processingTime = form.processingTime.value;
    const stockStatus = form.stockStatus.value;

    const product = {
      name,
      email,
      image,
      sports,
      category,
      description,
      price,
      rating,
      customization,
      processingTime,
      stockStatus,
    };

    fetch("http://localhost:3000/sports", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.insertedId) {
          form.reset();
          Swal.fire({
            icon: "success",
            title: "The equipment added successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Something went wrong",
            text: "Please try again later.",
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Unable to complete the request.",
        });
      });
  };

  return (
    <div className="pb-24 pt-8  flex justify-center items-center">
      <div className="w-11/12 m-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">
            <Fade cascade>Add new equipment</Fade>
          </h1>
        </div>
        <div className="bg-base-100 shadow-2xl rounded-lg p-8">
          <form
            onSubmit={handleAddEquipment}
            className="lg:grid grid-cols-2 space-x-4 lg:space-x-8"
          >
            <div className="form-control ml-4 lg:ml-8">
              <label className="label text-lg font-semibold ">Your name</label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                value={user?.displayName}
                readOnly
                className="input input-bordered w-full p-3 text-primary  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={user?.email || ""}
                readOnly
                className="input input-bordered w-full p-3 text-primary  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Image
              </label>
              <input
                type="text"
                placeholder="Image"
                name="image"
                className="input input-bordered w-full p-3 text-primary  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Sports
              </label>
              <input
                type="text"
                placeholder="Sports"
                name="sports"
                className="input input-bordered w-full p-3 text-primary  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Category
              </label>
              <input
                type="text"
                placeholder="Category"
                name="category"
                className="input input-bordered w-full p-3 text-primary  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Price
              </label>
              <input
                type="text"
                placeholder="Price"
                name="price"
                className="input input-bordered w-full p-3 text-primary  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Customization{" "}
              </label>
              <input
                type="text"
                placeholder="Customization"
                name="customization"
                className="input input-bordered w-full p-3 text-primary  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Processing Time
              </label>
              <input
                type="text"
                placeholder="Processing Time"
                name="processingTime"
                className="input input-bordered w-full p-3 text-primary  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Stock Status
              </label>
              <select
                name="stockStatus"
                className="select select-bordered w-full p-3 text-primary  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Select Stock Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Limited Stock">Limited Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label text-gray-700">Ratting</label>
              <div className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <SimpleRating rating={rating} onRatingChange={setRating} />
              </div>
            </div>
            <div className="form-control col-span-2">
              <label className="label text-lg font-semibold text-gray-700">
                Description
              </label>
              <input
                type="text"
                placeholder="Description"
                name="description"
                className="input input-bordered w-full p-3 text-primary  rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div></div>
            <div className="form-control mt-6 col-span-2">
              <button className="btn btn-primary w-full py-3 rounded-lg text-white font-semibold">
                Add Equipment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
