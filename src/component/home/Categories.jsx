import { Fade } from "react-awesome-reveal";
import { NavLink, useLoaderData, useLocation } from "react-router";

export default function Categories() {
  const { pathname } = useLocation();
  const data = useLoaderData();

  return (
    <div className="w-11/12 m-auto py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        <Fade cascade>Categories</Fade>
      </h1>
      <NavLink
        to="/"
        className={
          pathname === "/"
            ? "bg-primary text-white btn w-full mb-2  font-semibold py-2 px-4 rounded-lg  transition duration-300 ease-in-out"
            : "btn w-full mb-2  font-semibold py-2 px-4 rounded-lg  transition duration-300 ease-in-out"
        }
      >
        <button className="">All Category</button>
      </NavLink>
      {data &&
        data.map((equipment) => (
          <div key={equipment._id}>
            <NavLink
              to={`/${equipment?._id}`}
              className={({ isActive }) =>
                isActive
                  ? "btn w-full mb-2  font-semibold py-2 px-4 rounded-lg  transition duration-300 ease-in-out bg-primary text-white"
                  : "btn w-full mb-2  font-semibold py-2 px-4 rounded-lg  transition duration-300 ease-in-out hover:bg-primary"
              }
            >
              {equipment?.category || "No Category"}
            </NavLink>
          </div>
        ))}
    </div>
  );
}
