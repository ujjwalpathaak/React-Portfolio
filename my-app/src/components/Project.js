import React, { useEffect } from "react";
import Web from "./images/web.png";
import github from "./images/github.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Project(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  if (props.id == "a") {
    return (
      <div className="projects" id={props.id}>
        <div
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-right"
        >
          <img
            data-aos-delay="200"
            data-aos="fade-right"
            src={props.imgURL}
            alt="abc"
          ></img>
        </div>
        <div data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up">
          <h3>{props.projectName}</h3>
        </div>
        <div data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up">
          <p>
            {props.projectDescription}
            <ul id="techlist">
              <li>Technologies Used-</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>JQuery</li>
            </ul>
          </p>
        </div>
        <div
          data-aos-offset="-100"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          <a target="_blank" href={props.website}>
            <img id="logo" src={Web}></img>
          </a>
          <a target="_blank" href={props.github}>
            <img id="logo" src={github}></img>
          </a>
        </div>
      </div>
    );
  }
  if (props.id == "b") {
    return (
      <div className="projects" id={props.id}>
        <div
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-right"
        >
          <img
            data-aos-delay="200"
            data-aos="fade-right"
            src={props.imgURL}
            alt="abc"
          ></img>
        </div>
        <div data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up">
          <h3>{props.projectName}</h3>
        </div>
        <div data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up">
          <p>
            {props.projectDescription}
            <ul id="techlist">
              <li>Technologies Used-</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>API</li>
            </ul>
          </p>
        </div>
        <div
          data-aos-offset="-100"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          <a target="_blank" href={props.website}>
            <img id="logo" src={Web}></img>
          </a>
          <a target="_blank" href={props.github}>
            <img id="logo" src={github}></img>
          </a>
        </div>
      </div>
    );
  }
  if (props.id == "c") {
    return (
      <div className="projects" id={props.id}>
        <div
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-right"
        >
          <img
            data-aos-delay="200"
            data-aos="fade-right"
            src={props.imgURL}
            alt="abc"
          ></img>
        </div>
        <div data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up">
          <h3>{props.projectName}</h3>
        </div>
        <div data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up">
          <p>
            {props.projectDescription}

            <ul id="techlist">
              <li>Technologies Used-</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </p>
        </div>
        <div
          data-aos-offset="-100"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          <a target="_blank" href={props.website}>
            <img id="logo" src={Web}></img>
          </a>
          <a target="_blank" href={props.github}>
            <img id="logo" src={github}></img>
          </a>
        </div>
      </div>
    );
  }
  if (props.id == "d") {
    return (
      <div className="projects" id={props.id}>
        <div
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-right"
        >
          <img
            data-aos-delay="200"
            data-aos="fade-right"
            src={props.imgURL}
            alt="abc"
          ></img>
        </div>
        <div data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up">
          <h3>{props.projectName}</h3>
        </div>
        <div data-aos-delay="200" data-aos-duration="1000" data-aos="fade-up">
          <p>
            {props.projectDescription}

            <ul id="techlist">
              <li>Technologies Used-</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>API</li>
              <li>JQuery</li>
            </ul>
          </p>
        </div>
        <div
          data-aos-offset="-100"
          data-aos-delay="200"
          data-aos-duration="1000"
          data-aos="fade-up"
        >
          <a target="_blank" href={props.website}>
            <img id="logo" src={Web}></img>
          </a>
          <a target="_blank" href={props.github}>
            <img id="logo" src={github}></img>
          </a>
        </div>
      </div>
    );
  }
}

export default Project;
