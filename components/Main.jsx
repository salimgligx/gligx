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
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Main = () => {
  return (
    <motion.div id="home" className="w-full h-screen text-center"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600 ">
            Welcome To Gligx.
          </p>
          <h2 className="py-4  text-gray-700 text-4xl font-bold tracking-tight sm:text-center sm:text-7xl">
            SOFTWARE DEVELOPMENT
            <span className="text-[#98999a]"> COMPANY</span>
          </h2>
          <h4 className="py-4  text-[#848586] text-3xl font-bold tracking-tight sm:text-center sm:text-6xl">
            <TypeAnimation
              sequence={[
                "SEARCH ENGINE OPTIMISATION", // Types 'One'
                6000, // Waits 1s
                "SOCIAL MEDIA MARKETING", // Deletes 'One' and types 'Two'
                12000, // Waits 2s
                "Gligx", // Types 'Three' without deleting 'Two'
                () => {
                  console.log("Done typing!"); // Place optional callbacks anywhere in the array
                },
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              // style={{ fontSize: '1em' }}
            />{" "}
          </h4>
          <h3 className="py-4 uppercase text-gray-500 text-3xl font-bold  sm:text-center sm:text-5xl rotate-40 ">
            Digital Marketing -{" "}
            <span className="text-[#98999a]"> Web Hosting</span>
          </h3>
          <h2 className="py-4 text-gray-700 text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
            MOBILE APP DEVELOPMENT –{" "}
            <span className="text-[#98999a]">
              {" "}
              GREAT DESIGNS WITH A GREATER EXPERIENCE
            </span>
          </h2>

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
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#0072b1] hover:text-[#fff] ease-in duration-300">
                <FaLinkedinIn size={30} />
              </div>
            </a>
            <a
              href="https://www.facebook.com/gligx"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#3b5998] hover:text-[#fff] ease-in duration-300">
                <FaFacebook size={30} />
              </div>
            </a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#00acee] hover:text-[#fff] ease-in duration-300">
              <FaTwitter size={30} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#fb3958] hover:text-[#fff] ease-in duration-300">
              <FaInstagram size={30} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#FF0000] hover:text-[#fff] ease-in duration-300">
              <FaYoutube size={30} />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 hover:bg-[#25D366] hover:text-[#fff] ease-in duration-300">
              <FaWhatsapp size={30} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Main;
