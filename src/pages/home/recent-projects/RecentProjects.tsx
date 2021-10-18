import { Link } from 'react-router-dom';

import { Wrapper, Header, Projects, RedUnderline  } from './styled';
import CtaButton from '../../../components/cta-button/CtaButton';
import SingleProject from '../../../components/project/SingleProject';
import projects from './../../../assets/content/projects';

const RecentProjects: React.FC = () => {
  return (
	<Wrapper>
      <Header><RedUnderline>Recent</RedUnderline> projects</Header>
      <Projects>
        {projects.map((project) => {
          return <SingleProject key={project.id} {...project} />;
        })}
      </Projects>
      <Link to='/projects'>
        <CtaButton
            text="More projects"
            onClick={() => { console.log("Go to contact") }}
            id="secondary" />
      </Link>
	</Wrapper>
  );
};

export default RecentProjects;
