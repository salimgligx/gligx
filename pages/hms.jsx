import Image from "next/image";
import React from "react";
import hmsImg from "../public/assets/projects/hms.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const hms = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={hmsImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">HMS MIRDIF HOSPITAL</h2>
          <h3>Html5 / Bootstrap / Php</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            HMS MIRDIF HOSPITAL is a multi-specialty hospital in Dubai that is
            part of the Health & Medical Services Group which has a long history
            of excellent care and innovation. It provides world-class healthcare
            services and international patient support with more than 160-beds
            that includes a range of luxurious suites that guarantee you the
            highest standards of luxury and privacy. It provides the best and
            most advanced treatments managed by well-recognized Consultants and
            Specialists doctors with international standards and multilingual.
          </p>
          <p>
            HMS Mirdif Hospital, the hospital in Dubai, began operations in
            December 2021 and is part of the HMS Group of Health and Medical
            Services, located in Mirdif - Dubai.
          </p>

          <a
            href="https://www.hmsmirdifhospital.ae/en/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">View</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1 ">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Html5
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Php
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> toastr
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> jQuery
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default hms;
