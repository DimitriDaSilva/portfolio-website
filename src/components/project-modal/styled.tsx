import { FaTimes } from "react-icons/fa";
import { up } from "styled-breakpoints";
import styled from "styled-components";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  background: ${({ theme }) => theme.colors.bg};

  width: 100vw;

  ${up("tablet")} {
    width: ${({ theme }) => theme.breakpoints.tablet}px;
  }

  @media (max-height: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    flex-direction: row;
  }

  z-index: 1000;
`;

export const ImageSection = styled.div`
  width: 100%;

  position: relative;

  display: flex;
  align-items: center;

  @media (max-height: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    height: 100vh;
  }

  @media (min-height: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    height: auto;
  }
`;

export const Image = styled.img`
  height: auto;
`;

export const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 30px;

  background: rgba(0, 0, 0, 0.7);

  cursor: pointer;

  position: absolute;
  top: 0;
`;

export const TextSection = styled.div`
  @media (max-height: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    height: 100vh;
  }

  @media (min-height: ${({ theme }) => theme.breakpoints.mobileLarge}px) {
    height: auto;
  }

  padding: 14px;

  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-bottom: 15px;

  font-size: ${({ theme }) => theme.font.sizes.paragraph_s};

  @media (min-height: ${({ theme }) =>
      theme.breakpoints.mobileLarge}px) and (min-width: ${({ theme }) =>
      theme.breakpoints.smallMobile}px) {
    font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
  }
`;

export const Title = styled.h3`
  width: 100%;
  color: ${({ theme }) => theme.colors.font};

  font-size: ${({ theme }) => theme.font.sizes.paragraph_m};

  @media (min-height: ${({ theme }) =>
      theme.breakpoints.mobileLarge}px) and (min-width: ${({ theme }) =>
      theme.breakpoints.smallMobile}px) {
    font-size: ${({ theme }) => theme.font.sizes.heading_s};
  }

  &::before {
    content: "";
    display: block;
    float: left;
    background: url(${process.env.PUBLIC_URL + "/assets/red-triangle.svg"})
      no-repeat;
    background-size: contain;

    height: 15px;
    padding-right: 20px;

    @media (min-height: ${({ theme }) =>
        theme.breakpoints.mobileLarge}px) and (min-width: ${({ theme }) =>
        theme.breakpoints.smallMobile}px) {
      height: 25px;
      padding-right: 30px;
    }
  }

  overflow-y: hidden;
`;

export const Description = styled.p`
  width: 100%;

  white-space: pre-line;

  color: ${({ theme }) => theme.colors.font};
  padding: 10px 0px;

  overflow-y: hidden;

  font-size: 1em;
`;

export const Stack = styled.p`
  width: 100%;

  white-space: pre-line;

  color: ${({ theme }) => theme.colors.font};

  overflow-y: hidden;

  font-size: 1em;
`;

export const Skills = styled.p`
  width: 100%;

  white-space: pre-line;

  color: ${({ theme }) => theme.colors.font};

  overflow-y: hidden;

  font-size: 1em;
`;

export const LinkSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  overflow-y: hidden;
`;

export const CrossIcon = styled(FaTimes)`
  cursor: pointer;

  font-size: 25px;
  font-weight: thin;
  color: ${({ theme }) => theme.colors.font};
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  width: 250px;
`;
