import styled from "styled-components";
import { down, up } from "styled-breakpoints";
import { ButtonVariant } from "./CtaButton";

export const Button = styled.input<{ $variant: ButtonVariant }>`
  font-family: ${({ theme }) => theme.font.families.paragraph};
  font-weight: bold;
  color: white;

  ${down("smallMobile")} {
    font-size: ${({ theme }) => theme.font.sizes.paragraph_s};
  }

  ${up("smallMobile")} {
    font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
  }

  background: ${({ theme, $variant }) =>
    $variant === "primary" ? theme.colors.accent : theme.colors.lightGray};

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
