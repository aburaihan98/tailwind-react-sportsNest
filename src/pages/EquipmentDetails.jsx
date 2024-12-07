import ReactStars from "react-rating-stars-component";
import { useLoaderData, useParams } from "react-router";

export default function EquipmentDetails() {
  const { id } = useParams();
  const data = useLoaderData();

  const equipment = data.find((eq) => eq._id === id);

  if (!equipment) {
    return (
      <p className="text-4xl font-bold mt-12 lg:mt-24 text-center text-red-500">
        Equipment not found!
      </p>
    );
  }

  const {
    _id,
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
  } = equipment || {};
  return (
    <div className=" py-12 lg:py-24 ">
      <div className="w-10/12 m-auto bg-white rounded-xl p-12">
        <h1 className="text-2xl lg:text-3xl font-bold text-center mb-8">
          {sports}
        </h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <img
              src={image}
              alt={name}
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
          {/* Details Section */}
          <div className="space-y-4 text-gray-600 mb-2 text-lg">
            <p>
              <span className="text-xl font-bold">Category:</span> {category}
            </p>
            <p>
              <span className="text-xl font-bold">Sports Type:</span> {sports}
            </p>
            <p>
              <span className="text-xl font-bold">Price:</span> ${price}
            </p>
            <p className="flex gap-2">
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
            <p>
              <span className="text-xl font-bold">Customization:</span>{" "}
              {customization ? "Available" : "Not Available"}
            </p>
            <p>
              <span className="text-xl font-bold">Processing Time:</span>{" "}
              {processingTime} days
            </p>
            <p>
              <span className="text-xl font-bold">Stock Status:</span>{" "}
              {stockStatus}
            </p>
            <p>
              <span className="text-xl font-bold">Description:</span>{" "}
              {description}
            </p>
            <p>
              <span className="text-xl font-bold">Seller Email:</span> {email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
