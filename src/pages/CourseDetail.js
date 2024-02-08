import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Component, useEffect, useState } from "react";
import { CourseState } from "../courseState";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const CourseDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [courses, setCourses] = useState(CourseState);
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const currentCourse = courses.filter(
      (stateCourse) => stateCourse.url === url
    );
    setCourse(currentCourse[0]);
  }, [courses, url]);

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      {course ? (
        <Details>
          <Header>
            <h2>{course.title}</h2>
            <img src={course.mainImg} />
          </Header>
          <Awards>
            {course.awards.map((award) => {
              return (
                <Award
                  key={award.id}
                  title={award.title}
                  description={award.description}
                />
              );
            })}
          </Awards>
          <ImageDisplay>
            <img src={course.secondaryImg} />
          </ImageDisplay>
        </Details>
      ) : (
        <section className="page_404">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 ">
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="four_zero_four_bg">
                    <h1 className="text-center ">404</h1>
                  </div>

                  <div className="contant_box_404">
                    <h3 className="h2">Look like you're lost</h3>

                    <p>the page you are looking for not avaible!</p>

                    <a href="/courses" className="link_404">
                      Go to Home
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </motion.div>
  );
};

const Details = styled.div`
  color: #fff;
`;
const Header = styled.div`
  width: 1000px;
  margin: 5rem auto;
  h2 {
    margin-bottom: 2rem;
    text-align: center;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: center;
`;

const StyledAward = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    height: 0.1rem;
    background: #30bee1;
    margin: 1rem 0;
  }
`;

const ImageDisplay = styled.div`
  text-align: center;
  margin: 5rem 0;
  img {
    width: 50%;
  }
`;

// Award Component

const Award = ({ title, description }) => {
  return (
    <StyledAward>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
      <p></p>
    </StyledAward>
  );
};

export default CourseDetail;
