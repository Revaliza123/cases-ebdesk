import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import undraw from "../assets/gambar2.png";
import data from "../assets/gambar3.png";
import data1 from "../assets/gambar4.png";
import data2 from "../assets/gambar5.png";
import data3 from "../assets/gambar6.png";
import data4 from "../assets/gambar7.png";
import data5 from "../assets/gambar8.png";
import data6 from "../assets/gambar9.png";
import data8 from "../assets/hiwfoto1.svg";
import data9 from "../assets/hiwfoto2.svg";
import data10 from "../assets/hiwfoto3.svg";
import data11 from "../assets/hiwfoto4.svg";
import data12 from "../assets/Standard.svg";
import data7 from "../assets/element.png";
import dot from "../assets/Circle-Dot-1.svg";
import Navhome from "../components/navhome.jsx";
import Subscribe from "../components/subscribe.jsx";
import Footer from "../components/footer.jsx";

const Home = () => {
  const questionTitles = [
    "What do you mean by public-facing usage?",
    "Can I buy more storage for the individual plan?",
    "What happens to my data after the trial or if I cancel my subscription?",
    "Can I cancel my monthly or annual subscription?",
  ];

  const [showDescriptions, setShowDescriptions] = useState({
    question1: false,
    question2: false,
    question3: false,
    question4: false,
  });

  const handleToggleDescription = (question) => {
    setShowDescriptions((prev) => ({
      ...Object.fromEntries(
        Object.keys(prev).map((key) => [
          key,
          key === question ? !prev[key] : false,
        ])
      ),
    }));
  };

  return (
    <>
      <Navhome />
      <section id="hero" className="pt-36 left-10">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full self-center px-4  lg:w-1/2">
              <h1 className="text-4xl lg:text-6xl font-semibold">
                Observe Your
              </h1>
              <h1 className="text-4xl lg:text-6xl font-bold">Power</h1>
              <p className="mt-6 text-slate-500">
                Trafalgar provides progressive, and affordable healthcare,
                accessible on
              </p>
              <p className="mb-6 text-slate-500">
                mobile and online for everyone
              </p>
              <Link
                to="http://localhost:5173/dashboard"
                className="text-base font-semibold text-white bg-blue-600 py-3 px-8 rounded-full hover:opacity-80 duration-300 ease-in-out shadow-2xl mr-4"
              >
                See a demo
              </Link>
            </div>
            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="mt-10">
                <img src={undraw} alt="undraw" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="chooseUs" className="mb-48">
        <h2 className="text-3xl font-bold text-center mt-32">Why choose us?</h2>
        <div className="text-center text-slate-500 mt-5">
          <p>We provide to you the best choices for you. The leading</p>
          <p>political campaign intelligence platform</p>
        </div>
        <div className="container mx-auto p-4 md:p-8 mt-8 md:mt-12">
          <div className="flex flex-col md:flex-row md:justify-center md:space-x-8">
            <div className="w-full md:w-72 h-60 hover:border hover:border-blue-500 p-4 rounded-lg mb-8 md:mb-0">
              <img src={data} alt="" className="" width={100} />
              <h3 className="font-bold text-2xl mt-3 md:mt-0  md:text-start">
                Data
              </h3>
              <p className="text-start mt-2 text-slate-700  md:text-left">
                The biggest regional data, development, and POI data.
              </p>
            </div>

            <div className="w-full md:w-72 h-60 hover:border hover:border-blue-500 p-4 rounded-lg mb-8 md:mb-0">
              <img src={data1} alt="" className="" width={100} />
              <h3 className="font-bold text-2xl mt-3 md:mt-0  md:text-start">
                Technology
              </h3>
              <p className="text-start mt-2 text-slate-700 md:text-left">
                Geospatial platform with advanced analysis that suit your needs.
              </p>
            </div>

            <div className="w-full md:w-72 h-60 hover:border hover:border-blue-500 p-4 rounded-lg">
              <img src={data2} alt="" className="" width={100} />
              <h3 className="font-bold text-2xl mt-3 md:mt-0  md:text-start">
                Services
              </h3>
              <p className="text-start mt-2 text-slate-700 md:text-left">
                An expert team helps you to analyze your political power.
              </p>
            </div>
          </div>
          <div className="flex justify-center mt-8">
            <button className="border border-blue-500 text-blue-500 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <section id="overview" className="bg-[#2161D5] w-dvw">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="flex w-full self-start px-4 lg:w-1/2 mb-16 relative">
              <img src={dot} alt="tablet" width="70%" className="relative" />
              <img
                src={data5}
                alt="tablet"
                width="70%"
                className="lg:ms-[90px] absolute -top-16"
              />
            </div>
            <div className="w-full self-end lg:mt-[200px] px-4 lg:w-1/2 mb-16">
              <h3 className="text-white font-bold text-3xl lg:text-4xl mb-6">
                App Overview1
              </h3>
              <p className="text-white mt-4 mb-10">
                Advanced spatial analysis to understand where and why things
                <p />
                <p>happen, identify the target constituency, and optimize</p>
                <p>the campaign.</p>
              </p>
              <a
                href="#"
                className="text-base font-semibold text-white  py-3 px-8 rounded-full hover:bg-white hover:text-black duration-300 ease-in-out border border-white-600"
              >
                Learn More
              </a>
            </div>
            <div className="w-full self-center lg:mt-[200px] lg:px-24 px-4 lg:w-1/2 mb-16">
              <h3 className="text-white font-bold text-3xl lg:text-4xl mb-6">
                App Overview2
              </h3>
              <p className="text-white mt-4 mb-10">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor
                <p />
                <p>
                  do amet sint. Velit officia consequat duis enim velit mollit.
                </p>
                <p>Exercitation veniam consequat sunt nostrud amet.</p>
              </p>
              <a
                href="#"
                className="text-base font-semibold text-white  py-3 px-8 rounded-full hover:bg-white hover:text-black duration-300 ease-in-out border border-white-600"
              >
                Learn More
              </a>
            </div>
            <div className="container mx-auto flex w-full self-end px-4 lg:w-1/2 mb-16">
              <img
                src={data4}
                alt="tablet"
                width="40%"
                className="lg:ms-[260px] sm:items-end relative sm:w-full"
              />
              <img
                src={data6}
                alt="tablet"
                width="35%"
                className="lg:mt-[80px] sm:items-end absolute"
              />
            </div>
            <div></div>
            <div className="flex w-full self-start px-4 lg:w-1/2 mb-40">
              <img
                src={data4}
                alt="tablet"
                width="40%"
                className="relative lg:mt-[90px]"
              />
              <img
                src={data3}
                alt="tablet"
                width="35%"
                className="lg:mt-[130px] absolute"
              />
            </div>
            <div className="w-full self-top lg:mt-[200px] px-4 lg:w-1/2 mb-40">
              <h3 className="text-white font-bold text-3xl lg:text-4xl mb-6">
                App Overview3
              </h3>
              <p className="text-white mt-4 mb-10">
                Advanced spatial analysis to understand where and why
                <p />
                <p>
                  things happen, identify the target constituency, and optimize
                </p>
                <p>the campaign.</p>
              </p>
              <a
                href="#"
                className="text-base font-semibold text-white  py-3 px-8 rounded-full hover:bg-white hover:text-black duration-300 ease-in-out border border-white-600"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="px-4 lg:px-0 flex flex-col items-center"
      >
        <h2 className="text-4xl font-bold text-center mt-10">
          How it works for you?
        </h2>
        <div className="text-center text-slate-500 mt-5 mb-10">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed</p>
          <p>do eiusmod tempor incididunt ut labore et dolore magna</p>
          <p>aliqua. Ut enim ad minim veniam.</p>
        </div>
        <Link
          to="http://localhost:5173/dashboard"
          className="text-base font-semibold text-white bg-blue-600 py-3 px-8 rounded-full hover:opacity-80 duration-300 ease-in-out shadow-2xl mr-4"
        >
          See a demo
        </Link>
        <div className="container mx-auto p-4 md:p-8">
          <div className="flex flex-col md:flex-row justify-center lg:space-x-8 mb-8">
            <div className="flex-shrink-0 w-full md:w-96 bg-white p-6 rounded-lg border mb-8 md:mb-0">
              <img src={data8} alt="" className="mx-auto" />
              <h2 className="text-xl font-bold mb-4 text-center mt-5">
                Geographic Segmentation
              </h2>
              <div className="text-center font-sans text-slate-500 text-sm">
                <p>Consist of creating different groups of</p>
                <p>customers based on geographic</p>
                <p>boundaries</p>
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-96 bg-white p-6 rounded-lg border">
              <img src={data11} alt="" className="mx-auto" />
              <h2 className="text-xl font-bold mb-4 text-center mt-5">
                Demographic Segmentation
              </h2>
              <div className="text-center font-sans text-slate-500 text-sm">
                <p>Consist of dividing the market through different</p>
                <p>variables such as age, gender, income, etc</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:space-x-8">
            <div className="flex-shrink-0 w-full md:w-96 bg-white p-6 rounded-lg border mb-8 md:mb-0">
              <img src={data9} alt="" className="mx-auto" />
              <h2 className="text-xl font-bold mb-4 text-center mt-5">
                Psychographic Segmentation
              </h2>
              <div className="text-center font-sans text-slate-500 text-sm">
                <p>Consist of creating different groups of</p>
                <p>customers based on geographic</p>
                <p>boundaries</p>
              </div>
            </div>

            <div className="flex-shrink-0 w-full md:w-96 bg-white p-6 rounded-lg border">
              <img src={data10} alt="" className="mx-auto" />
              <h2 className="text-xl font-bold mb-4 text-center mt-5">
                Behavioral Segmentation
              </h2>
              <div className="text-center font-sans text-slate-500 text-sm">
                <p>Consist of creating different groups of</p>
                <p>customers based on geographic</p>
                <p>boundaries</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-10 lg:py-20">
        <h2 className="text-4xl font-bold text-center mt-4 lg:mt-10">
          Plans and Pricing
        </h2>
        <div className="text-center text-slate-500 mt-5">
          <p>We provide to you the best choices for you. The leading</p>
          <p>political campaign intelligence platform</p>
        </div>
        <div className="container mx-auto p-4 sm:p-8">
          <div className="flex flex-col sm:flex-row justify-center md:space-x-8 mb-8">
            <div className="flex-shrink-0 w-full  sm:w-72 bg-white p-6 rounded-lg border mb-8 md:mb-0 hover:border hover:border-blue-500">
              <img src={data12} alt="" className="mx-auto" />
              <h2 className="text-xl font-semibold mb-4 text-center mt-5">
                Individual Plan
              </h2>
              <div class="flex flex-col mb-10">
                <div class="flex items-center mb-2">
                  <label class="mr-2" htmlFor="">
                    ✔
                  </label>
                  <span class="mr-4">1 User</span>
                </div>
                <div class="flex items-center mb-2">
                  <label class="mr-2" htmlFor="">
                    ✔
                  </label>
                  <span class="mr-4">1 Basic Analysis</span>
                </div>
                <div class="flex items-center mb-2">
                  <label class="mr-2" htmlFor="">
                    ✔
                  </label>
                  <span>Unlimited Select Service</span>
                </div>
              </div>
              <div className="text-center font-sans text-slate-500 text-sm">
                <h3 className="font-bold text-2xl text-black">$99/mo</h3>
                <a
                  href="#"
                  className="block text-base font-semibold text-blue-500 bg-white hover:bg-[#2161D5] hover:text-white py-3 px-2 rounded-full duration-300 ease-in-out border border-blue-500 my-2"
                >
                  Select
                </a>
              </div>
            </div>

            <div className="flex-shrink-0 w-full sm:w-72 bg-white p-6 rounded-lg border hover:border hover:border-blue-500">
              <img src={data12} alt="" className="mx-auto" />
              <h2 className="text-xl font-semibold mb-4 text-center mt-5">
                Parties Plan
              </h2>
              <div class="flex flex-col mb-2">
                <div class="flex items-center mb-2">
                  <label class="mr-2" htmlFor="">
                    ✔
                  </label>
                  <span class="mr-4">Unlimited User</span>
                </div>
                <div class="flex items-center mb-2">
                  <label class="mr-2" htmlFor="">
                    ✔
                  </label>
                  <span class="mr-4">1 Basic Analysis</span>
                </div>
                <div class="flex items-center mb-2">
                  <label class="mr-2" htmlFor="">
                    ✔
                  </label>
                  <span>Unlimited Select Service</span>
                </div>
                <div class="flex items-center mb-2">
                  <label class="mr-2" htmlFor="">
                    ✔
                  </label>
                  <span>Free Extends 1 Month</span>
                </div>
              </div>
              <div className="text-center font-sans text-slate-500 text-sm">
                <h3 className="font-bold text-2xl text-black">$500/mo</h3>
                <a
                  href="#"
                  className="block text-base font-semibold text-blue-500 bg-white hover:bg-[#2161D5] hover:text-white py-3 px-2 rounded-full duration-300 ease-in-out border border-blue-500 my-2"
                >
                  Select
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="question">
  <h2 className="text-3xl font-bold text-center mt-32 mb-14 md:mt-14 md:mb-14">
    Frequently Asked Questions
  </h2>
  <div className="container mx-auto">
    {questionTitles.map((title, index) => (
      <div className="flex justify-center mb-5" key={index}>
        <div className="flex-shrink-0 w-3/6 bg-white p-6 rounded-lg border">
          <div className="flex justify-between">
            <p
              className={`text-black font-sans font-semibold mb-4 ${showDescriptions[`question${index + 1}`] ? 'questionTitleOpen' : ''}`}
              onClick={() =>
                handleToggleDescription(`question${index + 1}`)
              }
            >
              {title}
            </p>
            <button
              className="py-2 px-4 rounded-full transition duration-300 ease-in-out"
              onClick={() =>
                handleToggleDescription(`question${index + 1}`)
              }
            >
              <FontAwesomeIcon
                icon={faPlus}
                className={`text-black mr-4 ${showDescriptions[`question${index + 1}`] ? 'questionTitleOpen' : ''}`}
              />
            </button>
          </div>
          {showDescriptions[`question${index + 1}`] && (
            <p className="description">
              We define public-facing usage as leveraging CARTO to power
              enterprise-scale applications that are made available to
              external parties such as clients or the public, as opposed
              to internal demonstration-only applications.
            </p>
          )}
        </div>
      </div>
    ))}
  </div>
</section>
      <Subscribe />
      <Footer />
    </>
  );
};

export default Home;
