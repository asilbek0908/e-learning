// images
import Course1 from "../img/course1.jpg";
import Course2 from "../img/course2.jpg";
import Course3 from "../img/course3.jpg";

// styled ComponentStyle
import styled from "styled-components";
import { Link } from "react-router-dom";

// Animation
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Courses = () => {
  return (
    <StyledCourses
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Course>
        <h2>Interactive React and Redux</h2>
        <div className="line"></div>
        <Link to="/courses/react">
          <img src={Course1} />
        </Link>
      </Course>
      <Course>
        <h2>Interactive React and Redux</h2>
        <div className="line"></div>
        <Link to="/courses/javascript">
          <img src={Course2} />
        </Link>
      </Course>
      <Course>
        <h2>Soon</h2>
        <div className="line"></div>
        <Link to="/courses/soon">
          <img src={Course3} />
        </Link>
      </Course>
    </StyledCourses>
  );
};

const StyledCourses = styled(motion.div)`
  min-height: 100vh;
  padding: 5rem 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    padding: 1rem 0rem;
  }
`;

const Course = styled.div`
  padding-bottom: 10rem;
  width: 800px;
  img {
    width: 100%;
    object-fit: cover;
  }

  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
`;

export default Courses;
