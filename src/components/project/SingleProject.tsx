import { useState } from "react";

import { Wrapper, Icon, InnerWrapper, Text, Title, Stack } from "./styled";
import CtaButton from "../cta-button/CtaButton";
import Modal from "../../components/project-modal/ProjectModal";

export interface IProjectData {
  title: string;
  icon: string;
  color: string;
  stack: string[];
  description: string;
  skills: string[];
  images: string[];
  websiteLink: string;
  githubLink: string;
}

const SingleProject: React.FC<IProjectData> = (data) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen((prev) => !prev);
    document.documentElement.style.overflowY = "hidden";
  };

  return (
    <Wrapper color={data.color}>
      <Icon src={data.icon} alt="icon" />
      <InnerWrapper>
        <Text>
          <Title>{data.title}</Title>
          <Stack>{data.stack.slice(0, 3).join(" / ")}</Stack>
        </Text>
        <CtaButton
          text="View more"
          onClick={openModal}
          id="primary"
          type="button"
        />
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          data={data}
        />
      </InnerWrapper>
    </Wrapper>
  );
};

export default SingleProject;
