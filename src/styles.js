import styled from "styled-components";

// Styled Components

export const About = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5rem 10rem;
`;

export const Description = styled.div`
  flex: 1;
`;

export const Image = styled.div`
  overflow: hidden;
  flex: 1;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
