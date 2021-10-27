import { down, up } from "styled-breakpoints";
import styled, { css, keyframes } from "styled-components";

export const OutterWrapper = styled.div`
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

export const FilterSection = styled.section`
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

export const Techs = styled.div`
  display: flex;
  column-gap: 20px;
  row-gap: 10px;

  padding-top: 10px;
  padding-bottom: 10px;

  min-height: 90px;

  ${down("tablet")} {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  ${up("tablet")} {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const Title = styled.p`
  color: white;
  font-size: ${({ theme }) => theme.font.sizes.heading_s};
`;

export const Tags = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  column-gap: 20px;
  row-gap: 5px;
`;

export const TechButton = styled.input`
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

export const BinButton = styled.button`
  cursor: pointer;

  background: none;
  border: none;

  &:hover {
    animation: ${shake} 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    transform: translate3d(0, 0, 0);
    perspective: 1000px;
  }
`;

export const Bin = styled.img`
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Illustration = styled.img`
  height: 60px;
  align-self: flex-end;

  ${down("tabletLarge")} {
    display: none;
  }

  ${up("tabletLarge")} {
    display: block;
  }
`;

export const ProjectsSection = styled.div`
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
