import { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";
import { up } from "styled-breakpoints";
import styled from "styled-components";

import { ProjectProps } from "./index";
import Button from "../button/Button";

interface ProjectModalProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  project: ProjectProps;
}

const ProjectModal: React.FC<ProjectModalProps> = ({
  isModalOpen,
  setIsModalOpen,
  project,
}) => {
  const [currImg, setCurrImg] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isModalOpen) {
    return null;
  }

  const updateImg = (value: number) => {
    // Press right with the last image displayed
    if (value > 0 && currImg === project.images.length - 1) {
      setCurrImg(0);

      // Press left with the first image displayed
    } else if (value < 0 && currImg === 0) {
      setCurrImg(project.images.length - 1);

      // Press left or right without being at first or last index
    } else {
      setCurrImg((prev) => prev + value);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.documentElement.style.overflowY = "scroll";
  };

  const portalDiv = document.getElementById("portal");

  return portalDiv
    ? ReactDOM.createPortal(
        <Background
          ref={modalRef}
          onClick={(e) => {
            if (modalRef.current === e.target) {
              closeModal();
            }
          }}
        >
          <Modal>
            {project.images.length !== 0 && (
              <ImageSection style={{ backgroundColor: `${project.color}` }}>
                <Image src={project.images[currImg]} alt="project" />
                {project.images.length > 1 && (
                  <>
                    <Slider
                      onClick={() => updateImg(-1)}
                      style={{ left: "0px" }}
                    >
                      <FaAngleLeft color="white" size="20px" />
                    </Slider>
                    <Slider
                      onClick={() => updateImg(1)}
                      style={{ right: "0px" }}
                    >
                      <FaAngleRight color="white" size="20px" />
                    </Slider>
                  </>
                )}
              </ImageSection>
            )}
            <TextSection>
              <Text>
                <Title>{project.title}</Title>
                <Description>{project.description}</Description>
                <Stack>
                  <strong>Stack:</strong> {project.stack.join(" / ")}
                </Stack>
                <Skills>
                  <strong>What I learned:</strong> {project.skills.join(" / ")}
                </Skills>
              </Text>
              <LinkSection>
                <CrossIcon onClick={() => closeModal()} />
                <Links>
                  {project.websiteLink !== "" && (
                    <a
                      href={project.websiteLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button text="View website" variant="secondary" />
                    </a>
                  )}
                  {project.githubLink !== "" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Button text="View GitHub" variant="secondary" />
                    </a>
                  )}
                </Links>
              </LinkSection>
            </TextSection>
          </Modal>
        </Background>,
        portalDiv
      )
    : null;
};

export default ProjectModal;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: absolute;
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

const ImageSection = styled.div`
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

const Image = styled.img`
  height: auto;
`;

const Slider = styled.div`
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

const TextSection = styled.div`
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

const Text = styled.div`
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

const Title = styled.h3`
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
`;

const Description = styled.p`
  width: 100%;

  white-space: pre-line;

  color: ${({ theme }) => theme.colors.font};
  padding: 10px 0px;

  font-size: 1em;
`;

const Stack = styled.p`
  width: 100%;

  white-space: pre-line;

  color: ${({ theme }) => theme.colors.font};

  font-size: 1em;
`;

const Skills = styled.p`
  width: 100%;

  white-space: pre-line;

  color: ${({ theme }) => theme.colors.font};

  font-size: 1em;
`;

const LinkSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;

const CrossIcon = styled(FaTimes)`
  cursor: pointer;

  font-size: 25px;
  font-weight: thin;
  color: ${({ theme }) => theme.colors.font};
`;

const Links = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  width: 250px;
`;
