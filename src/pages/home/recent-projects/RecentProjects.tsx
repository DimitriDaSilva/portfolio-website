import { Link } from "react-router-dom";

import Button from "../../../components/button/Button";
import { Wrapper, Projects } from "./styled";
import SingleProject from "../../../components/project/SingleProject";
import projects from "../../../shared/projects";
import SectionTitle from "../../../components/section-title/SectionTitle";

const RecentProjects: React.FC = () => {
  return (
    <Wrapper>
      <SectionTitle>Recent projects</SectionTitle>
      <Projects>
        {projects
          .filter(({ showInHomePage }) => showInHomePage)
          .map((project, index) => {
            return <SingleProject key={index} {...project} />;
          })}
      </Projects>
      <Link to="/projects">
        <Button text="See more projects" variant="secondary" />
      </Link>
    </Wrapper>
  );
};

export default RecentProjects;
