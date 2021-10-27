import { Link } from 'react-router-dom';

import { Wrapper, Projects } from './styled';
import CtaButton from '../../../components/cta-button/CtaButton';
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
      <Link to='/projects'>
        <CtaButton
            text='See more projects'
            onClick={() => {}}
            id='secondary'
            type='button' />
      </Link>
    </Wrapper>
  );
};

export default RecentProjects;
