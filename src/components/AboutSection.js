import homeIntro from "../img/home-intro.jpg";
// import styled components
import { About, Description, Hide, Image } from "../styles";

// framer motion
import { motion } from "framer-motion";

function AboutSection() {
  // Framer motion
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 1.2 } },
  };

  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        staggerChildren: 0.5,
        when: "afterChildren",
      },
    },
  };

  return (
    <About>
      <Description>
        <motion.div
          className="title"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Hide>
            <motion.h2 variants={titleAnim}>Be educated so that</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              you<span> can change</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>the world.</motion.h2>
          </Hide>
        </motion.div>
        <p>
          An educated mind can teach many things. An educated mind is better
          than empty mind
        </p>
        <button>About Us</button>
      </Description>
      <Image>
        <img src={homeIntro} alt="book store" />
      </Image>
    </About>
  );
}

export default AboutSection;
