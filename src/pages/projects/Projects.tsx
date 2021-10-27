import SingleProject from '../../components/project/SingleProject';
import { Wrapper, Filters, Techs, TechButton, Illustration, ProjectsWrapper } from './styled'
import projects from '../../projects';
import {useState} from 'react';

const techCategories = projects.map((project) => {
	return project.stack;
}).flat(1);


interface ISingleTech {
	key: number
	value: string
	onClick(arg0: string) : (e: React.MouseEvent) => void
}

const SingleTech: React.FC<ISingleTech> = ({ value, onClick }) => {
	return (
		<TechButton type='button' value={value} onClick={onClick}></TechButton>
	);
};

const Projects: React.FC = () => {
	const [techSelection, setTechSelection] = useState<string[]>([]);

	const updateTechSelection = (tech: string) => (e: React.MouseEvent<Element, MouseEvent>): void => {
		console.log('test')
		// Add tech to selection
		if (!techSelection.includes(tech)) {
			setTechSelection([tech, ...techSelection]);
		console.log('test1')
		// Remove tech from selection
		} else {
			setTechSelection(techSelection.filter((t) => t !== tech));
		console.log('test2')
		}
	}

	const hasActiveCategory = (categories: string[]): boolean => {
		// If no selection then all projects are shown
		if (techSelection.length === 0) {
			return true;
		}

		for (let category of categories) {
			if (techSelection.includes(category)) {
				return true;
			}
		}
		return false;
	}

	return (
	  <Wrapper>
		  <Filters>
			  <Techs>
			  	Tech:
				  {techCategories.map((tech, index) => {
					return <SingleTech key={index} value={tech} onClick={(e, tech) => updateTechSelection(tech)} />
				  })}
			  </Techs>
			  <Illustration src={process.env.PUBLIC_URL + '/assets/undraw-illustration-projects.svg'} alt='developer-illustration' />
		  </Filters>
		  <ProjectsWrapper>
			  {projects.filter(project => hasActiveCategory(project.stack))
				 		 .map((project, index) => {
					return <SingleProject key={index} {...project} />
			})}
		  </ProjectsWrapper>
	  </Wrapper>
  );
}

export default Projects;
