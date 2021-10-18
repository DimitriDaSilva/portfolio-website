import { OutterWrapper,
	InnerWrapper,
	LeftSide,
	TextSection,
	Header,
	RedUnderline,
	Name,
	Illustration,
	FloatingArrow } from './styled'
import CtaButton from '../../../components/cta-button/CtaButton'

const Hero: React.FC = () => {
	return (
		<OutterWrapper>
			<InnerWrapper>
				<LeftSide>
					<TextSection>
						<Header>Let's build something <RedUnderline>great</RedUnderline> together!</Header>
						<Name>Dimitri Da Silva, full stack web developer from Paris</Name>
					</TextSection>
					<CtaButton
						text="Let's chat!"
						onClick={() => { console.log('Go to contact') }}
						id='primary' />
				</LeftSide>
				<Illustration src={process.env.PUBLIC_URL + '/assets/images/undraw-illustration.svg'} alt='developer-illustration' />
			</InnerWrapper>
			<FloatingArrow />
		</OutterWrapper>
	);
}

export default Hero;
