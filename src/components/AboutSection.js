// import img
import homeIntro from "../img/man-reading -book.jpg";

function AboutSection() {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>Be educated so that</h2>
          </div>
          <div className="hide">
            <h2>you can change</h2>
          </div>
          <div className="hide">
            <h2>the world.</h2>
          </div>
        </div>
        <p>
          An educated mind can teach many things. An educated mind is better
          than empty mind
        </p>
        <button>About Us</button>
      </div>
      <div className="">
        <img src={homeIntro} alt="book store" />
      </div>
    </div>
  );
}

export default AboutSection;
