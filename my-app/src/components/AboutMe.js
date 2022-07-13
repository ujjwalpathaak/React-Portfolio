import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "./images/photo.png";

function Abtme() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="abtme" className="sections">
      <div>
        <h1 data-aos="fade-up" data-aos-duration="1000">
          Hello!
        </h1>
        <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
          {" "}
          I'm Ujjwal <span>Pathak.</span>
        </h2>
      </div>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
        <img src={Image}></img>
      </div>
    </div>
  );
}
export default Abtme;
