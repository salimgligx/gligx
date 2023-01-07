import React from "react";
import Head from "next/head"
import Navbar from "../components/Navbar"
import { useState } from "react";
import AccordionItemCareer from "../components/AccordionItemCareer"
import { motion } from "framer-motion"

const career = () => {
  const [open, setOpen] = useState(false);

  const toggle = (career) => {
    if (open === career) {
      return setOpen(null);
    }
    setOpen(career);
  };

  const accordionData = [
    {
      title: "Full Stack Web Developer",
      desc: "We are looking for an experienced PHP developer who have good working experience with multiple projects. Candidate should have more than 5 years of experience in web development.",
    },
    {
      title: "Marketing Executive",
      desc: "Minimum 1-2 years of experience in Marketing * Familiarity with web design and publishing including Word press Job Description * In-depth study of products and through understanding including technical details and applications. * Work with sales team to develop strategies and implement brand strategies to ensure a consistent marketing message. * Develop, implement and manage digital marketing strategy .Create events and program collaterals and promote them * Manage and oversee social media content * Keep detailed records of all contacts. * Recording & effectively responding to all inward enquiries. * Maintain Documents and filling , Prepare quotations, Follow up on Invoices * Understanding of customers business and requirements. * Registering & introducing the company to potential buyers, multinational service providers * Identifying the upcoming tenders in the territory & preparations & submission of Tenders. * Introducing & advising on forth coming product developments to potential buyers/clients. * Regular follow up on projects enquiry and reporting to managers. Maintaining excellent relationship with end users, buyers, project coordinators and coworkers.",
    },
    {
      title: "Social Media Marketing Executive",
      desc: "Social Media Marketing Executive works closely with other members of the marketing team to develop and implement marketing campaigns. This position requires a high level of creativity and strategic thinking. The Social Media Marketing Executive must be able to work independently and be self-motivated. This position also requires excellent written and verbal English communication skills.",
    },
    {
      title: "Telesales Executive",
      desc: "Looking for EXPERIENCED candidates who are ambitious, hungry for success and ready for a challenging and rewarding career. Perfect for an individual who wants to learn, develop, and become a Stockbroker (telesales).",
    },
  ];

  return (
    <>
        <Navbar />
      <Head>
        <title>Gligx | Career</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <section className="max-w-[1240px] minimum m-auto h-screen grid place-items-center">
        <motion.div className="px-[40px] max-w-[800px"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        >
          <p className="pt-20 text-center text-blue-900">Career</p>
          <h3 className="py-4 pb-10 text-gray-500 text-3xl font-bold  sm:text-center sm:text-5xl rotate-40 ">
            Careers at
            <span className="text-[#98999a]"> Gligx</span>
          </h3>
          {accordionData.map((data, career) => {
            return (
              <AccordionItemCareer
                key={career}
                open={career === open}
                title={data.title}
                desc={data.desc}
                toggle={() => toggle(career)}
              />
            );
          })}
        </motion.div>
      </section>
    </>
  );
};

export default career;
