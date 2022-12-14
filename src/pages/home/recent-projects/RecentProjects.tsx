import { Link } from "react-router-dom";
import { up, down } from "styled-breakpoints";
import styled from "styled-components";

import Button from "components/button/Button";
import Project from "components/project";
import SectionTitle from "components/section-title/SectionTitle";
import projects from "shared/projects";

const RecentProjects: React.FC = () => {
  return (
    <Wrapper>
      <SectionTitle>Recent projects</SectionTitle>

      <Projects>
        {projects
          .filter(({ showInHomePage }) => showInHomePage)
          .map((project, index) => {
            return <Project key={index} {...project} />;
          })}
      </Projects>

      <Link to="/projects">
        <Button text="See more projects" variant="secondary" />
      </Link>
    </Wrapper>
  );
};

export default RecentProjects;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const Projects = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;

  gap: 5vw 5vw;

  ${down("tablet")} {
    flex-direction: column;
    flex-wrap: no-wrap;
  }

  ${up("tablet")} {
    flex-direction: row;
    flex-wrap: wrap;
  }

  ${up("desktop")} {
    flex-direction: row;
    flex-wrap: no-wrap;
  }

  padding-bottom: 30px;
`;
