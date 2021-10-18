import { Wrapper, Icon, InnerWrapper, Text, Title, Stack } from './styled'
import CtaButton from '../cta-button/CtaButton'

interface ProjectInfo {
  id: number
  title: string
  icon: string
  color: string
  stack: string[]
  images: string[]
}

const SingleProject: React.FC<ProjectInfo> = (projectInfo) => {
  const info: ProjectInfo = projectInfo;
  console.log(info.icon);

  return (
    <Wrapper color={info.color}>
      <Icon src={info.icon} alt="icon" />
      <InnerWrapper>
        <Text>
          <Title>{info.title}</Title>
          <Stack>{info.stack.slice(0, 3).join(' / ')}</Stack>
        </Text>
        <CtaButton
            text="View more"
            onClick={() => { console.log("Go to contact") }}
            id="primary" />
      </InnerWrapper>
    </Wrapper>
  );

};

export default SingleProject;
