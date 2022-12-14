import { useState } from "react";
import { down, up } from "styled-breakpoints";
import styled from "styled-components";

import FilterSection from "./FilterSection";
import ProjectsSection from "./ProjectsSection";

const Projects: React.FC = () => {
  const [techSelection, setTechSelection] = useState<string[]>([]);

  return (
    <Container>
      <FilterSection
        techSelection={techSelection}
        setTechSelection={setTechSelection}
      />
      <ProjectsSection techSelection={techSelection} />
    </Container>
  );
};

export default Projects;

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;

  width: 100%;
  min-height: calc(
    100vh - ${({ theme }) => theme.footerHeight} -
      ${({ theme }) => theme.navbarHeight}
  );

  ${down("mobile")} {
    padding: 0px 10px;
  }

  ${up("mobile")} {
    padding: 0px 20px;
  }

  ${up("tablet")} {
    padding: 0px 40px;
  }

  ${up("desktop")} {
    padding: 0px 72px;
  }

  ${up("desktopLarge")} {
    padding: 0px 72px;
    width: ${({ theme }) => theme.breakpoints.desktopLarge}px;
  }
`;
