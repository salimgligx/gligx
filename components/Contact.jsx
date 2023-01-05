import Image from "next/image";
import ContactImg from "../public/assets/contact.jpg";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill, BsInstagram, BsTwitch } from "react-icons/bs";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { SlLocationPin, SlPhone } from "react-icons/sl";
import { MdOutlineEmail } from 'react-icons/md';
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.div id="contact" className="w-full md:h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        >
      <div className="max-w-[1240px] m-auto px-2 py-24 w-full">
        <p className="text-xl tracking-widest uppercase text-[#98999a]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className=" grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-4 lg:col-span-2 w-full h-full  rounded-xl p-4">
            <div className="lg:p-4 h-full ">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={ContactImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Gligx</h2>
                <div className="flex items-center text-gray-500">
                  <SlLocationPin className="text-gray-800" /> <p className="pl-2">105, Al Refa Building,36 37 D St</p>
                </div>
                <p className="text-gray-500">Khalid Bin Al Waleed Rd</p>
                <p className="text-gray-500">Burdubai, Dubai</p>
              </div>
              <div>
              
                <div className="flex items-center">
                  <SlPhone />
                  <p className="uppercase pl-2 py-1 text-gray-600">+971 4 3447633</p>
                </div>
                <div className="flex items-center py-1 ">
                  <SlPhone />
                  <p className="uppercase pl-2 text-gray-600">+971 54 7924376</p>
                </div>
                <div className="flex items-center py-1 text-gray-600">
                  <MdOutlineEmail className="text-gray-800" />
                  <p className="pl-2 text-gray-600">info@gligx.com</p>
                </div>
                <div className="flex items-center justify-between py-4">
                  <a
                    href="https://www.linkedin.com/company/gligx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-300 bg-slate-300 p-4 cursor-pointer hover:scale-110 hover:bg-[#0072b1] hover:text-[#fff] ease-in duration-300">
                      <FaLinkedinIn size={20} />
                    </div>
                  </a>
                  <a
                    href="https://www.facebook.com/gligx"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-300 bg-slate-300 p-4 cursor-pointer hover:scale-110 hover:bg-[#3b5998] hover:text-[#fff] ease-in duration-300">
                      <FaFacebook size={20} />
                    </div>
                  </a>

                  <div className="rounded-full shadow-lg shadow-gray-300 bg-slate-300 p-4 cursor-pointer hover:scale-110 hover:bg-[#00acee] hover:text-[#fff] ease-in duration-300">
                    <FaTwitter size={20} />
                  </div>

                  <div className="rounded-full shadow-lg shadow-gray-300 bg-slate-300 p-4 cursor-pointer hover:scale-110 hover:bg-[#fb3958] hover:text-[#fff] ease-in duration-300">
                    <FaInstagram size={20} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-300 bg-slate-300 p-4 cursor-pointer hover:scale-110 hover:bg-[#FF0000] hover:text-[#fff] ease-in duration-300">
                    <FaYoutube size={20} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-300 bg-slate-300 p-4 cursor-pointer hover:scale-110 hover:bg-[#25D366] hover:text-[#fff] ease-in duration-300">
                    <FaWhatsapp size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="col-span-3 w-full h-auto rounded-xl lg:p-4">
            <div className="p-4">
              <form
                action="https://getform.io/f/352cc7fa-d6a4-483d-8d42-900ed47b2fd3"
                method="POST"
                encType="multipart/form-data"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phone"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="5"
                    name="message"
                  ></textarea>
                </div>
                <button className="w-full p-4 text-gray-100 bg-gray-900 rounded hover:bg-gray-700 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#0f313d]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};
