import { useState } from 'react';

import { Wrapper, Icon, InnerWrapper, Text, Title, Stack } from './styled'
import CtaButton from '../cta-button/CtaButton'
import Modal from '../../components/project-modal/ProjectModal'

export interface ProjectData {
  id: number
  title: string
  icon: string
  color: string
  stack: string[]
  images: string[]
}

const SingleProject: React.FC<ProjectData> = (data) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(prev => !prev);
  }

  return (
    <Wrapper color={data.color}>
      <Icon src={data.icon} alt="icon" />
      <InnerWrapper>
        <Text>
          <Title>{data.title}</Title>
          <Stack>{data.stack.slice(0, 3).join(' / ')}</Stack>
        </Text>
        <CtaButton
            text="View more"
            onClick={openModal}
            id="primary" />
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} data={data} />
      </InnerWrapper>
    </Wrapper>
  );

};

export default SingleProject;
