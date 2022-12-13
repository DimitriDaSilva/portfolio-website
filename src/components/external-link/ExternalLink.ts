import styled from "styled-components";

export const ExternalLink = styled.a`
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.accent} 0%,
    ${({ theme }) => theme.colors.accent} 100%
  );

  background-position: 0 100%;
  background-repeat: repeat-x;
  background-size: 100% 1px;
  color: ${({ theme }) => theme.colors.font};

  text-decoration: none;

  transition: all 0.1s ease-out;

  &:hover {
    background-size: 100% 100%;
    color: white;
  }
`;
