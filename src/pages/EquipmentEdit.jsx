import { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import Swal from "sweetalert2";
import SimpleRating from "../component/simpleRating/SimpleRating";
import { AuthContext } from "../provider/AuthProvider";

export default function EquipmentEdit() {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const { id } = useParams();

  const [name, setName] = useState(data?.name);
  const [email, setEmail] = useState(data?.email);
  const [image, setImage] = useState(data?.image);
  const [sports, setSports] = useState(data?.sports);
  const [category, setCategory] = useState(data?.category);
  const [description, setDescription] = useState(data?.description);
  const [price, setPrice] = useState(data?.price);
  const [rating, setRating] = useState(data?.rating);
  const [customization, setCustomization] = useState(data?.customization);
  const [processingTime, setProcessingTime] = useState(data?.processingTime);
  const [stockStatus, setStockStatus] = useState(data?.stockStatus);

  const handleEditEquipment = (e) => {
    e.preventDefault();
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

    fetch(`http://localhost:3000/sports/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "The equipment updated successfully",
            showConfirmButton: false,
            timer: 1500,
          });
          // Reset
          setName("");
          setEmail("");
          setImage("");
          setSports("");
          setCategory("");
          setDescription("");
          setPrice("");
          setRating(0);
          setCustomization("");
          setProcessingTime("");
          setStockStatus("");
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
    <div className=" flex justify-center items-center pt-8 pb-12 lg:pb-24">
      <div className="w-11/12 m-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary mb-4">
            Edit Equipment
          </h1>
        </div>
        <div className="bg-base-100 shadow-xl rounded-lg p-8">
          <form
            onSubmit={handleEditEquipment}
            className="lg:grid grid-cols-2 space-x-4 lg:space-x-8"
          >
            <div className="form-control ml-4 lg:ml-8">
              <label className="label text-lg font-semibold text-gray-700">
                Your name
              </label>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                value={name}
                className="input input-bordered w-full p-3 text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                value={email}
                className="input input-bordered w-full p-3 text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="input input-bordered w-full p-3 text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                value={sports}
                onChange={(e) => setSports(e.target.value)}
                className="input input-bordered w-full p-3 text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="input input-bordered w-full p-3 text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="input input-bordered w-full p-3 text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Customization
              </label>
              <input
                type="text"
                placeholder="Customization"
                name="customization"
                value={customization}
                onChange={(e) => setCustomization(e.target.value)}
                className="input input-bordered w-full p-3 text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
                value={processingTime}
                onChange={(e) => setProcessingTime(e.target.value)}
                className="input input-bordered w-full p-3 text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Stock Status
              </label>
              <select
                name="stockStatus"
                value={stockStatus}
                onChange={(e) => setStockStatus(e.target.value)}
                className="select select-bordered w-full p-3 text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              >
                <option value="">Select Stock Status</option>
                <option value="In Stock">In Stock</option>
                <option value="Limited Stock">Limited Stock</option>
                <option value="Out of Stock">Out of Stock</option>
              </select>
            </div>
            <div className="form-control">
              <label className="label text-lg font-semibold text-gray-700">
                Ratting
              </label>
              <div className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-primary">
                <SimpleRating
                  rating={rating}
                  onRatingChange={(newRating) => {
                    setRating(newRating);
                  }}
                />
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="input input-bordered w-full p-3 text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div></div>
            <div className="form-control mt-6 col-span-2">
              <button className="btn btn-primary w-full py-3  rounded-lg text-white font-semibold">
                Edit Equipment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
