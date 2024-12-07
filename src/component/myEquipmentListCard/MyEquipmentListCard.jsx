import React from "react";
import { Fade } from "react-awesome-reveal";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router";
import Swal from "sweetalert2";

export default function MyEquipmentListCard({ equipment }) {
  const { _id, image, sports, category, price, rating } = equipment || {};

  const handleEquipmentDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // delete fetch req
        fetch(`http://localhost:3000/sports/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json)
          .then((data) => {})
          .catch(() => {});
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <Fade cascade>
      <div className="card shadow-2xl rounded-lg p-4 bg-white">
        <img
          src={image}
          alt={sports}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <div className="flex gap-8">
          <h2 className="text-gray-600 mb-2 text-lg">
            <span className="text-xl font-bold">Name: </span>
            {sports}
          </h2>
        </div>
        <div className="">
          <p className="text-gray-600 mb-2 text-lg">
            {" "}
            <span className="text-xl font-bold">Category: </span>
            {category}
          </p>
          <p className="text-gray-600 mb-2 text-lg">
            <span className="text-xl font-bold">Price:$ </span>
            {price}
          </p>
          <p className="text-gray-600 mb-4 text-lg">
            <span className="text-xl font-bold">Rating: </span>
            <ReactStars
              count={5}
              size={24}
              value={rating}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </p>
        </div>
        <div className="flex justify-between items-center">
          <Link
            to={`/equipment-edit/${_id}`}
            className="btn bg-primary hover:bg-secondary text-white"
          >
            Update
          </Link>
          <button
            onClick={() => handleEquipmentDelete(_id)}
            className="btn btn-error text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </Fade>
  );
}
