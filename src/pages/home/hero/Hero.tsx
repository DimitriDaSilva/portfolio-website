import { Wrapper,
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
		<>
			<Wrapper>
				<LeftSide>
					<TextSection>
						<Header>Let's build something <RedUnderline>great</RedUnderline> together!</Header>
						<Name>Dimitri Da Silva, web developer from Paris</Name>
					</TextSection>
					<CtaButton
						id="primary"
						onClick={() => { console.log("Go to contact") }}
						text="Let's chat!" />
				</LeftSide>
				<Illustration></Illustration>
			</Wrapper>
			<FloatingArrow />
		</>
	);
}

export default Hero;
