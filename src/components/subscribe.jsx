import React from "react";

export default function subscribe() {
  return (
    <section id="subscribe" className="mt-10 sm:mt-20">
      <div className="container mx-auto p-4">
        <div className="flex flex-col items-center mb-5">
          <div className="w-full sm:w-6/6 bg-[#2161D5] p-6 rounded-lg border">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Kolom Pertama */}
              <div>
                <h2 className="text-2xl sm:text-3xl max-w-md font-sans mt-4 font-semibold text-white">
                  Subscribe Now For Get Special Features!
                </h2>
                <p className="text-sm sm:text-base mt-4 font-sans text-white">
                  Let's subscribe with us and find the fun
                </p>
              </div>

              {/* Kolom Kedua */}
              <div className="flex items-center justify-center sm:justify-end">
                <button className="bg-white text-[#2161D5] hover:bg-slate-200 hover:text-[#2161D5] py-3 px-6 sm:px-12 rounded-md shadow-sm mt-4 sm:mt-0 ">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
