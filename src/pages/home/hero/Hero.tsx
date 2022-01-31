import {
  OutterWrapper,
  InnerWrapper,
  LeftSide,
  TextSection,
  Header,
  RedUnderline,
  Name,
  Illustration,
  FloatingArrow,
} from "./styled";
import CtaButton from "../../../components/cta-button/CtaButton";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const elemContact = document.getElementById("contact-form");

    elemContact?.scrollIntoView();
  };

  return (
    <OutterWrapper>
      <InnerWrapper>
        <LeftSide>
          <TextSection>
            <Header>
              Let's build something <RedUnderline>great</RedUnderline> together!
            </Header>
            <Name>Dimitri Da Silva, front-end web developer from Paris</Name>
          </TextSection>
          <CtaButton
            text="Let's chat!"
            onClick={scrollToContact}
            id="primary"
            type="button"
          />
        </LeftSide>
        <Illustration
          src={process.env.PUBLIC_URL + "/assets/undraw-illustration-hero.svg"}
          alt="developer-illustration"
        />
      </InnerWrapper>
      <FloatingArrow />
    </OutterWrapper>
  );
};

export default Hero;
