import React from "react";
import Link from "next/link";
import Image from "next/image";
import AboutImg from "../public/assets/about.png";
import { motion } from "framer-motion";
import { container } from "../animation";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#98999a]">
            About
          </p>
          <div
            variants={container}
            initial="hidden"
            animate="show"
            className="overflow-hidden"
          >
            <motion.h2
              className="py-4"
              animate={{ y: 0 }}
              initial={{ y: "100%" }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              We are Gligx - Bespoke Software & Digital Agency in Dubai.
            </motion.h2>
          </div>
          <p className="py-2 text-gray-600">
            Our Expertise - Software Development | Web Development | Mobile App
            Development | Digital Marketing
          </p>
          <p className="py-2 text-gray-600">
            A reliable digital agency by a team of digital geeks with more than
            10 years of experience. Gligx is based in Dubai dedicated to
            creating cutting-edge websites, mobile apps and software. We are not
            ‘Mr. Do-it-all’, but, thanks to some extremely accommodating
            friends, we do know how to get it all done. So, feel free to call us
            for everything digital.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 cursor-pointer">
              The ‘G’ team’s vibrant skill set allows us to capably mould our
              services to match your needs across strategy, design, and
              development for the web, mobile, software & digital marketing.
              From full-project engagements to a specific slice of services, we
              help our clients launch the best projects possible. We craft
              polished, intuitive designs that top-notch developers bring to
              life with agile and clean code.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
