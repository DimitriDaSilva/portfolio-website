import SingleProject from '../../components/project/SingleProject';
import { Wrapper, ProjectsWrapper } from './styled'
import projects from '../../projects';

const Projects: React.FC = () => {
  return (
	  <Wrapper>
		  <ProjectsWrapper>
			{projects.map((project) => {
			  return <SingleProject key={project.id} {...project} />;
			})}
		  </ProjectsWrapper>
	  </Wrapper>
  );
}

export default Projects;
