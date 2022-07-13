import React from "react";
import Abtme from "./AboutMe";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";
import ResumePage from "./ResumePage";

function Display() {
  return (
    <div id="display">
      <Abtme />
      <SkillsPage />
      <ProjectsPage />
      <ResumePage />
    </div>
  );
}
export default Display;
