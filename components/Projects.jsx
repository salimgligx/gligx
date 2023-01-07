import React from "react";
import hms from "../public/assets/projects/hms.jpg";
import dian from "../public/assets/projects/dian.jpg";
import vega from "../public/assets/projects/vega.jpg";
import seha from "../public/assets/projects/seha.jpg";
import ProjectItem from "./ProjectItem";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.div id="projects" className="w-full"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    > 
      <div className="max-w-[1240px] mx-auto px-2 py-24">
        <p className="text-xl tracking-widest uppercase text-[#98999a]">
          Projects
        </p>
        <h2 className="py-4">PROJECT WE ARE WORKING ON</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="HMS MIRDIF HOSPITAL"
            backgroundImg={hms}
            projectUrl="/hms"
            tech="Bootstrap"
          />
          <ProjectItem
            title="Dian Jewellery"
            backgroundImg={dian}
            projectUrl="/dian"
            tech="React JS"
          />
          <ProjectItem
            title="VEGA PRO LIGHTING"
            backgroundImg={vega}
            projectUrl="/vega"
            tech="WordPress"
          />
          <ProjectItem
            title="Saaeha Medical Tourism"
            backgroundImg={seha}
            projectUrl="/saaeha"
            tech="React JS"
          />
        </div>
        {/* <a href="#" rel="noreferrer">
          <button className="bg-gray-900 rounded hover:bg-gray-700 text-white py-2 px-6 my-4">
            View More
          </button>
        </a> */}
      </div>
    </motion.div>
  );
};

export default Projects;
