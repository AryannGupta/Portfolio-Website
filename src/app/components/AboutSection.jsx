"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Programming Skills",
    id: "skills",
    content: (

      <ul className="list-disc pl-2"> 
      <p><b><u>Proficient in</u> :</b></p>
        <li>Data Structures and Algorithms</li>
        <li>C++</li>
        <li>Java</li>
        <li>AWS * Cloud Computing </li>
        <li>Computer Networking </li>
        <li>SQL </li>
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>Git and Github</li>
        <li>Linux and Unix</li>
        <li>Android Development</li>
        <p><b><u>Familiar With</u> :</b></p>
        <li>iOS Development</li>
        <li>MySQL</li>
        <li>Matlab</li>
        <li>Python</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Amity University, Noida Uttar Pradesh -: College</li>
        <li>Birla Vidya Niketan, New Delhi -: High and Secondary High School </li>
      </ul>
    ),
  },
  {
    title: "Certifications | Achievements",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li><a href="https://drive.google.com/file/d/1scBnW-21insto0E_QC5dyWfh11NaoYBe/view?usp=sharing">Cisco Network Academy | CCNAv7: Introduction to Networks</a></li>
        <li><a href="https://drive.google.com/file/d/1wvjEsqccpYc9Yp3VBI7tDEa8SatAsiqI/view?usp=drive_link">Flipkart Grid 5.0 (Level 2)</a></li>
        <li><a href="https://drive.google.com/file/d/1h02vYQKrn1utpEN4Y8bkSM1hX6bXl2ZP/view?usp=drive_link">HackOn with Amazon</a></li>
        <li>Bhavishya NGO Volunteer--&gt;Helped to collect funds for the needy</li>
      </ul>
    ),
  },
  {
    title: "Work Experience",
    id: "workex",
    content: (
      <ul className="list-disc pl-2">
        <li> Thales DIS<br/>
           --&gt;Product Integration Intern(June'24-Aug'24) <br/>
           <p>Interned as a Product Integrator for the card digitization and tokenization project in Thales Digital Identity and Security division in the Banking and Payments sector.</p>
           --&gt;L1 COS Team Intern(Feb'24-June'24)
           ,<p>Interned in the Operations team as an L1 intern.</p>
          </li>
        <li>Ericsson India<br/>
          <ul>
          --&gt;SWE Intern(May'23-July'23)
          <p>Interned as a SWE + Devops intern, getting hands on experience in the field of AWS Cloud Computing.
            Deployed a Real-time Messaging application using MongoDB as the backend, and node.js and react, then deploying it on the EC2 instance.
          </p>
          </ul>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I bring a proactive mindset, adaptability, and a keen interest in innovation to drive
            meaningful impact in any technical position I undertake. I am a complex
            problem-solver with analytical and driven mindset
            I also have experience working with AWS and have knowledge of JavaScript, React, Node.js, Express,
            HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set, and am a team player,
            excited to work with others to create amazing software.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications|Achievements{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("workex")}
              active={tab === "workex"}
            >
              {" "}
              Work Experience{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
