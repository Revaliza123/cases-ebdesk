import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bulat from "../assets/bulat.svg";
import kutip from "../assets/kutip.svg";
import foto1 from "../assets/foto1.svg";
import foto2 from "../assets/foto2.svg";
import foto3 from "../assets/foto3.svg";
import angga from "../assets/angga.png";
import owi from "../assets/owi.png";
import puan from "../assets/puan.png";
import logof from "../assets/logof.svg";
import insta from "../assets/Instagram.svg";
import twt from "../assets/Twitter.svg";
import fcb from "../assets/Facebook.svg";
import Nav from "../components/navabout.jsx";
import Subscribe from "../components/subscribe.jsx";
import Footer from "../components/footer.jsx";

const about = () => {
  const politicalFigures = [
    {
      name: "Airlangga Hartanto",
      image: angga,
      description:
        "Saya minta kepada segenap pengurus DPD, provinsi, kabupaten, dan kota, untuk kita harus memiliki roadmap 2024. Di tahun melakukan penggalangan opini masyarakat",
    },
    {
      name: "Jokowi Dodo",
      image: owi,
      description:
        "Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan masyarakat",
    },
    {
      name: "Puan Maharani",
      image: puan,
      description:
        "Daerah merupakan bagian dari pemerintah yang langsung berinteraksi dengan masyarakat ketika proses demokratisasi berlangsung.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <section id="about" className="bg-blue-600">
        <Nav />
        <div className=" md:p-16 lg:p-24 relative max-h-full">
          <div className="container max-w-2xl mx-auto text-center relative z-10">
            <h2 className="text-6xl text-white font-medium mb-16">About Us</h2>
            <p className="text-lg text-white mb-6">
              A small company offering data-driven solutions for campaign
              <br />
              effectiveness using spatial data and detailed analysis of target
              <br />
              audience (voters). Use technology that unites spatial data science
              <br />
              and political science.
            </p>
            <button className="bg-white hover:bg-slate-300 hover:text-blue-600 text-blue-600 font-bold py-2 px-11 rounded-3xl mb-28 mt-5">
              Contact Us
            </button>
          </div>

          <img
            className="mx-auto max-w-full h-auto absolute top-0 left-0 right-0 bottom-0"
            src={bulat}
            alt="Deskripsi gambar"
          />
        </div>
      </section>

      <section id="advisor">
        <div className="p-8 md:p-16 lg:p-24">
          <img
            className="mx-auto mb-5 max-w-full h-auto"
            src={kutip}
            alt="Deskripsi gambar"
          />
          <div className="container max-w-2xl mx-auto text-center">
            <p className="text-lg text-black lg:max-w-lg lg:mx-auto mt-12">
              In just small steps you’ll be connected directly to our
              technology. Knowledge about your own power, your rivals, your
              voters, and your region in the Election.
            </p>
          </div>
        </div>
        <div className="p-4 md:p-8 lg:p-16">
          <h2 className="text-center font-sans text-4xl text-purple-900 font-semibold mb-6">
            Our Advisors
          </h2>
          <div className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className=" p-4 rounded-lg">
                <img
                  src={foto2}
                  alt=""
                  className="w-full h-48 object-cover mb-4 "
                />
                <h3 className="font-semibold text-2xl lg:text-2xl mt-3 text-center font-sans">
                  Xavier Oswald
                </h3>
                <p className="text-center mt-3 text-slate-400 font-mono">
                  CO-FOUNDER, DEVELOPER
                </p>
              </div>

              <div className=" p-4 rounded-lg">
                <img
                  src={foto1}
                  alt=""
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="font-semibold text-2xl lg:text-2xl mt-3 text-center font-sans">
                  Sara Creighton
                </h3>
                <p className="text-center mt-3 text-slate-400 font-mono">
                  CO-FOUNDER, DEVELOPER
                </p>
              </div>

              <div className=" p-4 rounded-lg">
                <img
                  src={foto3}
                  alt=""
                  className="w-full h-48 object-cover mb-4"
                />
                <h3 className="font-semibold text-2xl lg:text-2xl mt-3 text-center font-sans">
                  Brandon Ogden
                </h3>
                <p className="text-center mt-3 text-slate-400 font-mono">
                  PROJECT MANAGER
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="political-figure">
          <h2 className="text-3xl font-bold text-center mt-32">
            What Political Figure Say
          </h2>
          <div className="text-center text-slate-500 mt-5">
            <p>We provide to you the best choices for you. The leading</p>
            <p>political campaign intelligence platform</p>
          </div>
          <div className="container mx-auto p-4 sm:p-8 mt-12">
            <div className="flex flex-col sm:flex-row justify-center lg:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <div className="w-full sm:w-72 h-60 hover:border border hover:border-blue-500 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src={angga}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col ml-2">
                    <h3 className="font-bold text-md lg:text-md">
                      Airlangga Hartanto
                    </h3>
                    <p className="text-slate-500 text-sm">
                      Chairman of the Party XYZ
                    </p>
                  </div>
                </div>
                <p className="text-start text-slate-700 mt-4">
                  Saya minta kepada segenap pengurus DPD, provinsi, kabupaten,
                  dan kota, untuk kita harus memiliki roadmap 2024. Di tahun
                  melakukan penggalangan opini masyarakat
                </p>
              </div>

              <div className="w-full sm:w-72 h-60 hover:border border hover:border-blue-500 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src={owi}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col ml-2">
                    <h3 className="font-bold text-md lg:text-md">
                      Joko Wiodo
                    </h3>
                    <p className="text-slate-500 text-sm">
                      President of Indonesia
                    </p>
                  </div>
                </div>
                <p className="text-start text-slate-700 mt-4">
                  Daerah merupakan bagian dari pemerintah yang langsung
                  berinteraksi dengan masyarakat
                </p>
              </div>

              <div className="w-full sm:w-72 h-60 hover:border border hover:border-blue-500 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <img
                    src={puan}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col ml-2">
                    <h3 className="font-bold text-md lg:text-md">
                      Puan Maharani
                    </h3>
                    <p className="text-slate-500 text-sm">Minister of XYZ</p>
                  </div>
                </div>
                <p className="text-start text-slate-700 mt-4">
                  Daerah merupakan bagian dari pemerintah yang langsung
                  berinteraksi dengan masyarakat ketika proses demokratisasi
                  berlangsung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Subscribe />

      <Footer />
    </>
  );
};

export default about;
