// import img
import homeIntro2 from "../img/home-intro2.jpg";
// import styled components
import styled from "styled-components";
import { About, Description, Image } from "../styles";

function BenefitsSection() {
  return (
    <Benefits>
      <Description>
        <h2>High-Quality learning system</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced and talented mentors</h3>
          <h3>Fast leaning system</h3>
          <h3>Offline school for children</h3>
        </div>
      </Description>
      <Image>
        <img src={homeIntro2} />
      </Image>
    </Benefits>
  );
}

// Styled Components

const Benefits = styled(About)`
  flex-direction: row-reverse;

  h2 {
    color: #30bee1;
    padding-bottom: 5rem;
    margin-left: 5rem;
  }
  h3 {
    font-size: 1.4rem;
    padding: 1rem;
    background-color: #fff;
    font-weight: 400;
    color: #000;
    margin: 1rem 0 0 5rem;
    clip-path: polygon(0 12%, 100% 0, 100% 88%, 0% 100%);
    border-left: 4px solid #30bee1;
  }
`;

export default BenefitsSection;
