import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Form(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <form id="form">
      <div>
        <p data-aos-offset="200" data-aos-duration="1000" data-aos="zoom-in">
          Want to work together?
        </p>
        <p data-aos-offset="600" data-aos-duration="1000" data-aos="zoom-in">
          Drop your details below.
        </p>
      </div>
      <div data-aos-offset="400" data-aos-duration="1000" data-aos="zoom-in">
        <input className="form-input" placeholder="Your Name"></input>
        <input className="form-input" placeholder="Your Email"></input>
        <input
          className="form-input"
          placeholder="Message"
          style={{ height: "100px" }}
        ></input>{" "}
        <button>Submit</button>
      </div>
    </form>
  );
}
export default Form;
