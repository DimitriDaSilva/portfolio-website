import { Wrapper, Projects } from './styled';
import SingleProject from '../../../components/project/SingleProject';
import projects from '../../../projects';
import SectionTitle from '../../../components/section-title/SectionTitle';

const RecentProjects: React.FC = () => {
  return (
    <Wrapper>
      <SectionTitle>Recent projects</SectionTitle>
      <Projects>
        {projects.slice(0, 3).map((project) => {
          return <SingleProject key={project.id} {...project} />;
        })}
      </Projects>
    </Wrapper>
  );
};

export default RecentProjects;
