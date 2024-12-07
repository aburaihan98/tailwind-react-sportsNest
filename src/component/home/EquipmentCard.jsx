import React from "react";
import { Fade } from "react-awesome-reveal";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router";

export default function EquipmentCard({ equipment }) {
  const { _id, image, sports, category, price, rating } = equipment || {};
  return (
    <Fade cascade>
      <div className="card shadow-lg rounded-lg p-4 bg-white">
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
            <span className="text-xl font-bold">Price: $</span>
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
        <Link to={`/equipment-details/${_id}`}>
          <button className="btn bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition">
            View Details
          </button>
        </Link>
      </div>
    </Fade>
  );
}
