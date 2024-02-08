// import components
import AboutSection from "../components/AboutSection";
import BenefitsSection from "../components/Benefits";
import FaqSection from "../components/FaqSection";

// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

function AboutUs() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <BenefitsSection />
      <FaqSection />
    </motion.div>
  );
}

export default AboutUs;
