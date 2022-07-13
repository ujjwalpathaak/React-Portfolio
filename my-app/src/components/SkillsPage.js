import React, { useEffect } from "react";
import Skills from "../components/Skills";
import SkillsDatabase from "../Databases/SkillsDatabase";
import AOS from "aos";
import "aos/dist/aos.css";

function SkillsPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div id="skills-page">
      <div id="skills-title" data-aos="fade-right">
        <h1>Skills</h1>
      </div>
      {SkillsDatabase.map(Skills)}
    </div>
  );
}

export default SkillsPage;
