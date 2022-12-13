import { down, up } from "styled-breakpoints";
import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant: ButtonVariant;
  type: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant, type }) => {
  return (
    <ButtonInput
      value={text}
      onClick={onClick}
      $variant={variant}
      type={type}
    />
  );
};

export default Button;

const ButtonInput = styled.input<{ $variant: ButtonVariant }>`
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
