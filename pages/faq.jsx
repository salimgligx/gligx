import React, { useState } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import AccordionItem from "../components/AccordionItem";
import { motion } from "framer-motion";

const faq = () => {
  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };

  const accordionData = [
    {
      title: "WEB DEVELOPMENT COMPANIES IN DUBAI",
      desc: "Gligx is a team of website designers and developers with years of experience in web design and development. Gligx is one of the top web design company in Dubai. Being a professional web design company Dubai, We are experts in all verticals of web design and development, including e-commerce web design Dubai, all major CMS web development platforms and responsive mobile friendly website designing.",
    },
    {
      title: "Web Design Company Dubai",
      desc: "Gligx is a professional web design company in Dubai, also serves you with custom software development, mobile app development and digital marketing Services including SEO, SEM (Pay Per Click) & SMM across Dubai, UAE.",
    },
    {
      title: "BUSINESS EMAIL HOSTING",
      desc: "The ‘G’ team’s vibrant skill set allows us to capably mould our services to match your needs across strategy, design and development of websites, mobile apps, software & digital marketing.",
    },
    {
      title: "WEB DEVELOPMENT",
      desc: "From full-project engagements to a specific slice of services, we help our clients launch the best projects possible. We craft polished, intuitive designs that top-notch developers bring to life with agile and clean code.",
    },
  ];

  return (
    <>
      <Navbar />
      <Head>
        <title>Gligx | faq</title>
        <meta
          name="description"
          content="Gligx is a professional web design company in Dubai, also serves you with custom software development, mobile app development and digital marketing Services including SEO, SEM (Pay Per Click) & SMM across Dubai, UAE."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="max-w-[1240px] m-auto h-screen grid place-items-center">
        <motion.div className="px-[40px] max-w-[800px"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        >
          <p className="text-center text-blue-900">Faq</p>
          <h3 className="py-4 pb-10 text-gray-500 text-3xl font-bold  sm:text-center sm:text-5xl rotate-40 ">
            Frequently Asked
            <span className="text-[#98999a]"> Questions</span>
          </h3>
          {accordionData.map((data, index) => {
            return (
              <AccordionItem
                key={index}
                open={index === open}
                title={data.title}
                desc={data.desc}
                toggle={() => toggle(index)}
              />
            );
          })}
        </motion.div>
      </section>
    </>
  );
};

export default faq;
