import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Navbar from "../components/Navbar";

const career = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Gligx | career</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Career</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Job details </h2>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>Full Stack Web Developer</p>
          </div>
        </div>
        <p>
          We are looking for an experienced PHP developer who have good working
          experience with multiple projects. Candidate should have more than 5
          years of experience in web development.{" "}
        </p>

        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Responsibilities:</span>
          </p>
          <p className="py-1 italic">
            Developing web application components/features using various
            scripting languages with good design principles.
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Maintain developed code and aim for improvements</li>
            <li>Improve existing implemented code</li>
            <li>Monitor developed features for possible failure cases</li>
            <li>Debug/troubleshoot for any errors</li>
            <li>
              System integration using APIs, Sockets, Binary protocols, AMQP,
              MQTT etc
            </li>
            <li>
              Develop performance-oriented SQL queries for web applications
            </li>
            <li>Write efficient JavaScript code</li>
            <li>Write Unit Tests for all developed piece of code</li>
            <li>Write migrations for database updates</li>
            <li>Regularly sync code with repositories</li>
            <li>
              Understand clear requirement, develop quality features, and
              deliver on time
            </li>
            <li>
              Creating POC of any feature and explain limitations/overhead prior
              finalising the solution
            </li>
            <li>
              Demonstrate the feature functionality for customer acceptance
            </li>
            <li>Entertain assigned issues tickets in timely manner</li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">Essential Skills:</span>
          </p>
          <p className="py-1 italic">
            Working experience with PHP for over 5 years
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Working experience with Codeigniter 3 for over 4 years</li>
            <li>Working experience with JavaScript/jQuery for over 5 years</li>
            <li>Working experience with MySQL 5.6+ for over 5 years</li>
          </ul>
        </div>
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Required Skills:</span>
          </p>
          <p className="py-1 italic">PHPUNIT 9</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>GIT/Bit Bucket</li>
            <li>Redis with JSON</li>
            <li>Apache Kafka</li>
            <li>Web Sockets</li>
            <li>Browser Service Workers and Local Storage implementation</li>
            <li>AWS SDK</li>
            <li>Ubuntu 18.04 and Shell Scripting</li>
            <li>JIRA</li>
          </ul>
          <p>Job Types: Full-time, Permanent</p>
          <div className="py-6">
            <p className="italic">
              <span className="font-bold italic">Experience:</span>
            </p>
            <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
              <li>MySQL 5.6+: 5 years (Preferred)</li>
              <li>PHP 7.2+: 5 years (Preferred)</li>
              <li>Codeigniter: 4 years (Preferred)</li>
              <li>JavaScript: 5 years (Preferred)</li>
            </ul>
          </div>
          <button className="w-full p-4 text-gray-100 mt-4">Apply now</button>
        </div>
      </div>
    </>
  );
};

export default career;
