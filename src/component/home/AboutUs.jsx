import React from "react";
import { Fade } from "react-awesome-reveal";

export default function AboutUs() {
  return (
    <section className="py-8 lg:py-16 ">
      <div className="w-11/12 m-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-6 text-primary">
            <Fade cascade>About EquiSports</Fade>
          </h2>
          <p className="text-lg ">
            At EquiSports, we are passionate about sports and committed to
            delivering the best equipment for athletes at every level. From
            beginners to professionals, our products are designed to inspire and
            elevate performance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {/* Left Column */}
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Our Mission
            </h3>
            <p className=" text-lg mb-6">
              To empower athletes by providing access to top-notch sports gear
              that meets their unique needs. We strive to create a community
              where everyone can embrace their passion for sports.
            </p>
            <h3 className="text-2xl font-semibold mb-4 text-primary">
              Why Choose Us?
            </h3>
            <ul className="list-disc list-inside  space-y-2">
              <li>High-quality products from trusted brands.</li>
              <li>Extensive range of sports categories.</li>
              <li>Customer-first approach with top-notch support.</li>
              <li>Easy returns and secure shopping.</li>
            </ul>
          </div>
          {/* Right Column */}
          <div className="relative">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/29/13/48/golf-1869983_640.jpg"
              alt="About EquiSports"
              className="rounded-lg shadow-xl w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 bg-white rounded-full shadow-lg p-4">
              <p className="text-xl font-bold text-primary">+10K</p>
              <p className="text-sm text-gray-500">Happy Customers</p>
            </div>
            <div className="absolute bottom-4 left-4 bg-white rounded-full shadow-lg p-4">
              <p className="text-xl font-bold text-primary">100+</p>
              <p className="text-sm text-gray-500">Product Categories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
