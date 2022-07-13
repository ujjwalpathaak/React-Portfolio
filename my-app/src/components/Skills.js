import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Skills(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  if (props.id == "e") {
    return (
      <div id={props.id} className="skills">
        <div data-aos-duration="1000" data-aos="fade-up">
          <h3>{props.heading}</h3>
        </div>
        <div>
          <ul data-aos-duration="1000" data-aos="fade-up">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
          </ul>
        </div>
      </div>
    );
  } else if (props.id == "f") {
    return (
      <div id={props.id} className="skills">
        <div data-aos-duration="1000" data-aos="fade-up">
          <h3>{props.heading}</h3>
        </div>
        <div>
          <ul data-aos-duration="1000" data-aos="fade-up">
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </div>
      </div>
    );
  } else if (props.id == "g") {
    return (
      <div id={props.id} className="skills">
        <div data-aos-duration="1000" data-aos-delay="0" data-aos="fade-up">
          <h3>{props.heading}</h3>
        </div>
        <div>
          <ul data-aos-duration="1000" data-aos="fade-up">
            <li>MongoDB</li>
            <li>Mongoose</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    );
  } else if (props.id == "h") {
    return (
      <div id={props.id} className="skills">
        <div data-aos-duration="1000" data-aos-delay="0" data-aos="fade-up">
          <h3>{props.heading}</h3>
        </div>
        <div>
          <ul data-aos-duration="1000" data-aos="fade-up">
            <li>C</li>
            <li>C++</li>
            <li>Graphic Desiging</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Skills;
