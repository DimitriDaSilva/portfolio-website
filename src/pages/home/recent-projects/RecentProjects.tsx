import { Link } from "react-router-dom";

import CtaButton from "../../../components/cta-button/CtaButton";
import { Wrapper, Projects } from "./styled";
import SingleProject from "../../../components/project/SingleProject";
import projects from "../../../projects";
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
        <CtaButton text="See more projects" variant="secondary" type="button" />
      </Link>
    </Wrapper>
  );
};

export default RecentProjects;
