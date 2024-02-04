// import img
import homeIntro from "../img/home-intro.jpg";
// import styled components
import styled from "styled-components";

function AboutSection() {
  return (
    <About>
      <Description className="description">
        <div className="title">
          <Hide>
            <h2>Be educated so that</h2>
          </Hide>
          <Hide>
            <h2>
              you<span> can change</span>
            </h2>
          </Hide>
          <Hide>
            <h2>the world.</h2>
          </Hide>
        </div>
        <p>
          An educated mind can teach many things. An educated mind is better
          than empty mind
        </p>
        <button>About Us</button>
      </Description>
      <Image className="about-img">
        <img src={homeIntro} alt="book store" />
      </Image>
    </About>
  );
}

// Styled Components

const About = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem 10rem;
`;

const Description = styled.div`
  flex: 1;
`;

const Image = styled.div`
  overflow: hidden;
  flex: 1;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export default AboutSection;
