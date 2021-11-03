import styled from "styled-components";
import { down, up } from "styled-breakpoints";

export const Button = styled.input`
  font-family: ${({ theme }) => theme.font.families.paragraph};
  font-weight: bold;
  color: white;

  ${down("smallMobile")} {
    font-size: ${({ theme }) => theme.font.sizes.paragraph_s};
  }

  ${up("smallMobile")} {
    font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
  }

  border-radius: 2px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.accent};

  cursor: pointer;

  overflow-y: hidden;

  background: linear-gradient(
    to left,
    ${({ theme }) => theme.colors.accent} 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );

  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 100% 0px;
  transition: background-size 0.1s ease-out;

  &:hover {
    background-size: 100% 100%;
  }
`;
