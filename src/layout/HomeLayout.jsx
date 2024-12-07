import { useContext } from "react";
import { Outlet } from "react-router";
import AboutUs from "../component/home/AboutUs";
import Categories from "../component/home/Categories";
import CustomerReviews from "../component/home/CustomerReviews";
import Slider from "../component/home/Slider";
import { AuthContext } from "../provider/AuthProvider";

export default function HomeLayout() {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <Slider />
      <div className="w-11/12 m-auto grid lg:grid-cols-12">
        <div className="lg:col-span-2">
          <Categories />
        </div>
        <div className="lg:col-span-10">
          <Outlet />
        </div>
      </div>
      <CustomerReviews />
      <AboutUs />
    </>
  );
}
