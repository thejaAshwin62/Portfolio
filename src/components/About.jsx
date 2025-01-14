import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import ServiceCard from "./ServiceCard"; // Import the modified ServiceCard component

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-secondary text-[18px] max-w-3xl leading-[30px]"
      >
        I am a passionate web developer specializing in the MERN stack (MongoDB,
        Express.js, React.js, Node.js), creating dynamic and impactful
        applications. 💻 With a flair for game development using Unity and
        Blender, I blend creativity and technology to craft immersive
        experiences. 🚀 Always eager to learn, I strive to push boundaries and
        bring ideas to life! 🌟
      </motion.p>

      {/* Services Section */}
      <div className="mt-20 flex flex-wrap gap-36 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
