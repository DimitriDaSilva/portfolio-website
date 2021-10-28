import { useRef, useState } from "react";
import ReactDOM from "react-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

import {
  Background,
  Wrapper,
  ProjectImages,
  Slider,
  InnerWrapper,
  TextSection,
  Title,
  Description,
  Stack,
  Skills,
  LinkSection,
  Links,
  CrossIcon,
} from "./styled";
import { IProjectData } from "../project/SingleProject";
import CtaButton from "../cta-button/CtaButton";

interface IProps {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean | ((prevVar: boolean) => boolean)) => void;
  data: IProjectData;
}

const ProjectModal: React.FC<IProps> = ({
  isModalOpen,
  setIsModalOpen,
  data,
}) => {
  const [currImg, setCurrImg] = useState(0);
  const modalRef = useRef<HTMLDivElement>(null);

  if (!isModalOpen) {
    return null;
  }

  const updateImg = (value: number) => {
    // Press right with the last image displayed
    if (value > 0 && currImg === data.images.length - 1) {
      setCurrImg(0);

      // Press left with the first image displayed
    } else if (value < 0 && currImg === 0) {
      setCurrImg(data.images.length - 1);

      // Press left or right without being at first or last index
    } else {
      setCurrImg((prev) => prev + value);
    }
  };

  const portalDiv = document.getElementById("portal");

  return portalDiv
    ? ReactDOM.createPortal(
        <Background
          ref={modalRef}
          onClick={(e) => {
            if (modalRef.current === e.target) {
              setIsModalOpen(false);
            }
          }}
        >
          <Wrapper>
            {data.images.length !== 0 && (
              <ProjectImages
                style={{ backgroundImage: `url(${data.images[currImg]})` }}
              >
                {data.images.length > 1 && (
                  <>
                    <Slider onClick={() => updateImg(-1)}>
                      <FaAngleLeft color="white" size="20px" />
                    </Slider>
                    <Slider onClick={() => updateImg(1)}>
                      <FaAngleRight color="white" size="20px" />
                    </Slider>
                  </>
                )}
              </ProjectImages>
            )}
            <InnerWrapper>
              <TextSection>
                <Title>{data.title}</Title>
                <Description>{data.description}</Description>
                <Stack>
                  <strong>Stack:</strong> {data.stack.join(" / ")}
                </Stack>
                <Skills>
                  <strong>What I learned:</strong> {data.skills.join(" / ")}
                </Skills>
              </TextSection>
              <LinkSection>
                <CrossIcon onClick={() => setIsModalOpen(false)} />
                <Links>
                  {data.websiteLink !== "" && (
                    <a href={data.websiteLink} target="_blank" rel="noreferrer">
                      <CtaButton
                        text="View website"
                        onClick={() => {}}
                        id="secondary"
                        type="button"
                      />
                    </a>
                  )}
                  {data.githubLink !== "" && (
                    <a href={data.githubLink} target="_blank" rel="noreferrer">
                      <CtaButton
                        text="View GitHub"
                        onClick={() => {}}
                        id="secondary"
                        type="button"
                      />
                    </a>
                  )}
                </Links>
              </LinkSection>
            </InnerWrapper>
          </Wrapper>
        </Background>,
        portalDiv
      )
    : null;
};

export default ProjectModal;
