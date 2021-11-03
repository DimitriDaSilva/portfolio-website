import { useState } from "react";

import { Wrapper, Icon, Text, Title, Stack } from "./styled";
import Modal from "../../components/project-modal/ProjectModal";
import ProjectButton from "../project-button/ProjectButton";

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
      <Icon src={data.icon} alt="icon" color={data.color} />
      <Text>
        <Title>{data.title}</Title>
        <Stack>{data.stack.slice(0, 3).join(" / ")}</Stack>
      </Text>
      <ProjectButton text="View more" onClick={openModal} type="button" />
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        data={data}
      />
    </Wrapper>
  );
};

export default SingleProject;
