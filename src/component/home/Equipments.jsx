import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useParams } from "react-router";
import EquipmentCard from "./EquipmentCard";

export default function Equipments() {
  const { id } = useParams();
  const [equipments, setEquipments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((data) => {
        if (id) {
          const filteredEquipments = data.filter(
            (equipment) => equipment?._id === id
          );
          setEquipments(filteredEquipments);
        } else {
          setEquipments(data);
        }
      });
  }, [id]);

  return (
    <div className="w-11/12 m-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        <Fade cascade>Our Sports Equipment</Fade>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-6">
        {equipments &&
          equipments.map((equipment) => (
            <EquipmentCard key={equipment?._id} equipment={equipment} />
          ))}
      </div>
    </div>
  );
}
