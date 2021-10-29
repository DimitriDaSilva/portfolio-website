import styled, { css } from "styled-components";
import { down, up } from "styled-breakpoints";

export const Button = styled.input`
  font-family: ${({ theme }) => theme.font.families.paragraph};
  font-weight: bold;
  color: ${({ color }) => color};

  ${down("smallMobile")} {
    font-size: ${({ theme }) => theme.font.sizes.paragraph_s};
  }

  ${up("smallMobile")} {
    font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
  }

  ${(props) =>
    props.id === "primary" &&
    css`
      color: white;
      background: ${({ theme }) => theme.colors.accent};
    `};

  ${(props) =>
    props.id !== "primary" &&
    css`
      color: white;
      background: ${({ theme }) => theme.colors.lightGray};
    `};

  border-radius: 2px;
  padding: 10px;
  border: none;

  cursor: pointer;
  transition: all ${({ theme }) => theme.transitionSpeed};

  &:hover {
    filter: brightness(130%);
  }

  overflow-y: hidden;
`;
