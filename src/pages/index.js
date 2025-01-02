import AboutMe from "@/Components/HomePage/AboutMe";
import AdditionalExperience from "@/Components/HomePage/AdditionalExperience";
import Award from "@/Components/HomePage/Award";
import Certification from "@/Components/HomePage/Certification";
import Compitetion from "@/Components/HomePage/Compitetion";
import Experience from "@/Components/HomePage/Experience";

import Hero from "@/Components/HomePage/Hero";
import Projects from "@/Components/HomePage/Projects";
import Skillsetml from "@/Components/HomePage/Skillsetml";
import Contact from "@/Components/HomePage/contact";
import SkillSet from "@/Components/HomePage/skillSet";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Dipro Paul | Software Engineer & Entrepreneur</title>
        <meta
          name="description"
          content="Welcome to Dipro Paul's portfolio! I'm a passionate software engineer, entrepreneur, and researcher, dedicated to software development, business strategy, and market analysis."
        />
        <meta
          name="keywords"
          content="Dipro Paul, software engineer, entrepreneur, full-stack developer, web development, business analysis, market research, innovation, portfolio, coding, programming"
        />
        <meta property="og:site_name" content="Dipro Paul Portfolio" />
        <meta property="og:title" content="Dipro Paul | Software Engineer & Entrepreneur" />
        <meta
          property="og:description"
          content="Explore Dipro Paul's journey as a software engineer and entrepreneur, working on software development, business analysis, and research innovations."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/drgxp1bhp/image/upload/v1735830074/dipro_apisbq.webp"
        />
        <meta property="og:url" content="https://dipropaul.vercel.app/" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://dipropaul.vercel.app/" />
      </Head>
      
      <Hero />
      <AboutMe />
      <Experience />
      <Compitetion />
      <Projects />
      
      <Skillsetml/>
      <SkillSet />
      
      <Certification />
      
      <Award/>
      <AdditionalExperience/>
      <Contact />
    </>
  );
}
