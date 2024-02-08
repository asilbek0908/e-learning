import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1 id="logo">
        <Link to="/">E-learning</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About</Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "40%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/courses">Courses</Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/courses" ? "40%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
          <Line
            transition={{ duration: 0.7 }}
            initial={{ width: "0%" }}
            // animate={{ width: pathname === "/contact" ? "120%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background-color: #383e47;
  ul {
    display: flex;
    list-style: none;
  }

  li {
    position: relative;
  }
  li:not(:last-child) {
    padding-right: 10rem;
    cursor: pointer;
  }
  a {
    color: #fff;
    text-decoration: none;
  }

  #logo {
    font-weight: lighter;
    font-size: 1.5rem;
    font-family: "Silkscreen", sans-serif;
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  width: 0%;
  background-color: #30bee1;
  position: absolute;
  bottom: -80%;
  left: -7%;
`;

export default Nav;
