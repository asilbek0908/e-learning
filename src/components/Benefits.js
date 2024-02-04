// import img
import homeIntro2 from "../img/home-intro2.jpg";
// import styled components
// import styled from "styled-components";

function Benefits() {
  return (
    <div className="benefits">
      <div className="description">
        <h2>High quality learning system</h2>
        <div className="benefit">
          <h3>Online platform</h3>
          <h3>High experienced and talented mentors</h3>
          <h3>Fast leaning system</h3>
          <h3>Offline school for children</h3>
        </div>
      </div>
      <div className="benefits-img">
        <img src={homeIntro2} />
      </div>
    </div>
  );
}

// styled Component

// const Benefits = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   padding: 5rem 10rem;
// `;

export default Benefits;
