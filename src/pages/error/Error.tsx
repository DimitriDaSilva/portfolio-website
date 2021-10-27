import { Header } from '../home/hero/styled';
import { Wrapper, Illustration } from './styled'

const Error: React.FunctionComponent = () => {
  return (
	<Wrapper>
		<Illustration src={process.env.PUBLIC_URL + '/assets/undraw-404-lost.svg'} alt='developer-illustration' />
		<Header style={{textAlign: 'center'}}> 404 - Page not found</Header>
	</Wrapper>
  );
}

export default Error;
