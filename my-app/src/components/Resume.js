import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Resume() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div
      id="resume-section"
      data-aos-offset="700"
      data-aos-duration="1000"
      data-aos="zoom-in"
    >
      {/* <iframe
       
        src="https://drive.google.com/file/d/1swhn2tQEqHAK_DeUxHvaKoHNisdTezH4/preview"
        width="640"
        height="480"
        allow="autoplay"
      ></iframe> */}
      <embed
        id="resume-iframe"
        src="https://drive.google.com/file/d/1swhn2tQEqHAK_DeUxHvaKoHNisdTezH4/preview" /* type="application/pdf" */
      ></embed>
    </div>
  );
}
export default Resume;
