import React, { useEffect } from "react";
import Project from "../components/Project";
import ProjectsDatabase from "../Databases/ProjectsDatabase";
import AOS from "aos";
import "aos/dist/aos.css";
function ProjectsPage() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="sections" id="projects-page">
      <div style={{ height: "123px" }} id="skills-title">
        <h1 data-aos="fade-right">Projects</h1>
      </div>
      {ProjectsDatabase.map(Project)}
    </div>
  );
}

export default ProjectsPage;
