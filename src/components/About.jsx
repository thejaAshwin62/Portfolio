import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant, fadeIn } from "../utils/motion";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-5 text-secondary text-base sm:text-lg md:text-xl max-w-3xl leading-relaxed"
      >
        I am a passionate web developer specializing in the MERN stack (MongoDB,
        Express.js, React.js, Node.js), creating dynamic and impactful
        applications. 💻 With a flair for game development using Unity and
        Blender, I blend creativity and technology to craft immersive
        experiences. 🚀 Always eager to learn, I strive to push boundaries and
        bring ideas to life! 🌟
      </motion.p>

      {/* Services Section */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
