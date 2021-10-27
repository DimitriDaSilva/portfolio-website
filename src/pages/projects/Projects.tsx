import SingleProject from "../../components/project/SingleProject";
import {
  OutterWrapper,
  FilterSection,
  Techs,
  Title,
  Tags,
  TechButton,
  BinButton,
  Bin,
  Illustration,
  ProjectsSection,
} from "./styled";
import projects from "../../projects";
import { useState } from "react";

const techCategories = projects
  .map((project) => {
    return project.stack;
  })
  .flat(1);

interface ISingleTech {
  key: number;
  value: string;
  onClick: () => void;
  id: string;
}

const SingleTech: React.FC<ISingleTech> = ({ value, onClick, id }) => {
  return (
    <TechButton
      type="button"
      value={value}
      onClick={onClick}
      id={id}
    ></TechButton>
  );
};

const Projects: React.FC = () => {
  const [techSelection, setTechSelection] = useState<string[]>([]);

  const updateTechSelection = (tech: string): void => {
    // Add tech to selection
    if (!techSelection.includes(tech)) {
      setTechSelection([tech, ...techSelection]);
      // Remove tech from selection
    } else {
      setTechSelection(techSelection.filter((t) => t !== tech));
    }
  };

  const clearTechSelection = () => {
    setTechSelection([]);
  };

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
    <OutterWrapper>
      <FilterSection>
        <Techs>
          <Title>Tech:</Title>
          <Tags>
            {techCategories
              .sort(
                (a, b) =>
                  +techSelection.includes(b) - +techSelection.includes(a)
              )
              .map((tech, index) => {
                const isSelected = techSelection.includes(tech)
                  ? "selected"
                  : "";
                return (
                  <SingleTech
                    key={index}
                    value={tech}
                    onClick={() => updateTechSelection(tech)}
                    id={isSelected}
                  />
                );
              })}
          </Tags>
          <BinButton onClick={clearTechSelection}>
            <Bin src={process.env.PUBLIC_URL + "/assets/bin.svg"} alt="bin" />
          </BinButton>
        </Techs>
        <Illustration
          src={
            process.env.PUBLIC_URL + "/assets/undraw-illustration-projects.svg"
          }
          alt="developer-illustration"
        />
      </FilterSection>
      <ProjectsSection>
        {projects
          .filter((project) => hasActiveCategory(project.stack))
          .map((project, index) => {
            return <SingleProject key={index} {...project} />;
          })}
      </ProjectsSection>
    </OutterWrapper>
  );
};

export default Projects;
