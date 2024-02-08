// style
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "../components/faqToggle";
import { LayoutGroup } from "framer-motion";

function FaqSection() {
  return (
    <Faq>
      <h2>
        Any Questions<span>FAQ</span>
      </h2>
      {/*  */}
      <LayoutGroup>
        <Toggle title="Can i learn programming from scratch in your website?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                veritatis.
              </p>
            </div>
          </div>
        </Toggle>

        {/*  */}
        <Toggle title="How much is the payment per month?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                veritatis.
              </p>
            </div>
          </div>
        </Toggle>

        {/*  */}
        <Toggle title="Can i find a job after completing?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                veritatis.
              </p>
            </div>
          </div>
        </Toggle>

        {/*  */}
        <Toggle title="   Can i learn together with my brother after buying this course?">
          <div className="question">
            <div className="answer">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                veritatis.
              </p>
            </div>
          </div>
        </Toggle>
      </LayoutGroup>
    </Faq>
  );
}

const Faq = styled(About)`
  display: block;
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }

  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }

  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }

  .faq-line {
    background-color: #ccc;
    height: 0.2rem;
    width: 100%;
    margin: 2rem 0rem;
  }
`;
export default FaqSection;
