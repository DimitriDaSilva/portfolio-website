import { down, up } from "styled-breakpoints";
import styled, { css, keyframes } from "styled-components";
import getTechCategories from "./getTechCategories";

interface FilterSectionProps {
  techSelection: string[];
  setTechSelection: React.Dispatch<React.SetStateAction<string[]>>;
}

const FilterSection: React.FC<FilterSectionProps> = ({
  techSelection,
  setTechSelection,
}) => {
  const techCategories = getTechCategories();

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

  return (
    <Container>
      <Techs>
        <Tags>
          {techCategories
            .sort(
              (a, b) => +techSelection.includes(b) - +techSelection.includes(a)
            )
            .map((tech, index) => {
              const isSelected = techSelection.includes(tech) ? "selected" : "";
              return (
                <TechButton
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
    </Container>
  );
};

export default FilterSection;

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.lightGray};

  width: 100vw;

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

const Techs = styled.div`
  display: flex;
  column-gap: 20px;
  row-gap: 10px;

  padding: 10px 0px;

  min-height: 90px;

  ${down("tablet")} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  ${up("tablet")} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  column-gap: 20px;
  row-gap: 5px;
`;

const TechButton = styled.input`
  padding: 10px;
  border: none;
  border-radius: 100px;

  cursor: pointer;

  font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
  font-weight: bold;
  font-family: ${({ theme }) => theme.font.families.paragraph};
  color: white;

  ${(props) =>
    props.id === "selected" &&
    css`
      background-color: ${({ theme }) => theme.colors.accent};
    `};

  ${(props) =>
    props.id !== "selected" &&
    css`
      background-color: ${({ theme }) => theme.colors.darkGray};
    `};

  transition: all ${({ theme }) => theme.transitionSpeed};

  &:hover {
    filter: brightness(130%);
  }
`;

const shake = keyframes`
  10%, 90% {
    transform: translate3d(-0.5px, 0, 0);
  }
  20%, 80% {
    transform: translate3d(1px, 0, 0);
  }
  30%, 50%, 70% {
    transform: translate3d(-1px, 0, 0);
  }
  40%, 60% {
    transform: translate3d(1px, 0, 0);
  }
`;

const BinButton = styled.button`
  cursor: pointer;

  background: none;
  border: none;

  &:hover {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    perspective: 1000px;
  }

  flex-shrink: 0;
`;

const Bin = styled.img`
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Illustration = styled.img`
  height: 60px;
  align-self: flex-end;

  margin-left: 20px;

  ${down("tabletLarge")} {
    display: none;
  }

  ${up("tabletLarge")} {
    display: block;
  }
`;
