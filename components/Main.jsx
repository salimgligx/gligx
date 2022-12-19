import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 ">
            Welcome To Gligx.
          </p>
          <h2 className="py-4  text-gray-700 text-4xl font-bold tracking-tight sm:text-center sm:text-7xl">                                           
            SOFTWARE DEVELOPMENT
            <span className="text-[#98999a]"> COMPANY</span>
          </h2>
          <h3 className="py-4 uppercase text-gray-500 text-3xl font-bold  sm:text-center sm:text-5xl rotate-40 ">Digital Marketing - <span className='text-[#98999a]'> Web Hosting</span></h3>
          <h2 className="py-4 text-gray-700 text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">MOBILE APP DEVELOPMENT –  <span className='text-[#98999a]'> GREAT DESIGNS WITH A GREATER EXPERIENCE</span></h2>
          <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
            Gligx is a professional web design company in Dubai, also serves you
            with custom software development, mobile app development and digital
            marketing Services including SEO, SEM (Pay Per Click) & SMM across
            Dubai, UAE.
          </p>
          <div className="flex items-center justify-between max-w-[530px] m-auto py-4">
            <a
              href="https://www.linkedin.com/company/gligx"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn size={30} />
              </div>
            </a>
            <a
              href="https://www.facebook.com/gligx"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaFacebook size={30} />
              </div>
            </a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaTwitter size={30} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaInstagram size={30} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaYoutube size={30} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaWhatsapp size={30} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
