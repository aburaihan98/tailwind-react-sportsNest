import React from "react";
import { Link } from "react-router";

export default function EquipmentTable({ equipment }) {
  const { _id, image, sports, category, price, rating } = equipment || {};

  return (
    <tr className="border-b">
      <td className="px-4 py-2">{sports}</td>
      <td className="px-4 py-2">{category}</td>
      <td className="px-4 py-2">${price}</td>
      <td className="px-4 py-2 text-center">
        <Link to={`/equipment-details/${_id}`}>
          <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-secondary transition">
            View Details
          </button>
        </Link>
      </td>
    </tr>
  );
}
