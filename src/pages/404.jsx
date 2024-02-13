import React from "react";
import data404 from "../assets/404.svg";
import Navhome from "../components/navhome.jsx";

const Notfound = () => {
  return (
    <>
      <Navhome />
      <section id="404" className="pt-36 left-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4 lg:px-24 lg:w-1/2">
              <h1 className="text-2xl lg:text-3xl font-semibold">Ooops!</h1>
              <h1 className="text-3xl lg:text-3xl font-bold">Page Not Found</h1>
              <p className="mt-6 text-slate-500">
                This page doesn`t exist or was removed
              </p>
              <p className="mb-6 text-slate-500">We suggest you back to home</p>
              <a
                href="#"
                className="text-base font-semibold text-white bg-blue-600 py-3 px-8 rounded-full hover:opacity-80 duration-300 ease-in-out shadow-2xl mr-4"
              >
                Learn More
              </a>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10">
                <img src={data404} alt="undraw" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notfound;
