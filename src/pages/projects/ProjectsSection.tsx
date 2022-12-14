import Project from "components/project";
import projects from "shared/projects";
import styled from "styled-components";
import { down, up } from "styled-breakpoints";

interface ProjectsSectionProps {
  techSelection: string[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ techSelection }) => {
  const hasActiveCategory = (categories: string[]): boolean => {
    // If no selection then all projects are shown
    if (techSelection.length === 0) {
      return true;
    }

    for (let category of categories) {
      if (techSelection.includes(category)) {
        return true;
      }
    }

    return false;
  };

  return (
    <Container>
      {projects
        .filter((project) => hasActiveCategory(project.stack))
        .map((project, index) => {
          return <Project key={index} {...project} />;
        })}
    </Container>
  );
};

export default ProjectsSection;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;

  gap: 5vw 5vw;

  padding: 40px 0px;

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
`;
