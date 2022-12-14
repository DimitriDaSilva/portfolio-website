import { useState } from "react";
import styled from "styled-components";

import ProjectModal from "./ProjectModal";
import ProjectButton from "./ProjectButton";

export interface ProjectProps {
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

const Project: React.FC<ProjectProps> = (project) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen((prev) => !prev);
    document.documentElement.style.overflowY = "hidden";
  };

  return (
    <Wrapper color={project.color}>
      <Icon src={project.icon} alt="icon" color={project.color} />

      <Text>
        <Title>{project.title}</Title>

        <Stack>{project.stack.slice(0, 3).join(" / ")}</Stack>
      </Text>

      <ProjectButton value="View more" onClick={openModal} />

      <ProjectModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        project={project}
      />
    </Wrapper>
  );
};

export default Project;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 300px;
  height: 300px;

  background: ${(props) => props.color};

  box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.25);
  border-radius: 2px;

  position: relative;

  overflow: hidden;

  z-index: 0;
`;

export const Icon = styled.img`
  position: absolute;
  bottom: -20px;
  left: -20px;
  width: 150px;
  z-index: -1;

  filter: invert(100%) opacity(20%);
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 15px;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.heading_s};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.bg};
  text-align: center;
`;

export const Stack = styled.p`
  padding: 0 5px;
  margin: 0;

  font-size: 12;
  color: ${({ theme }) => theme.colors.accent};

  text-align: center;
`;
