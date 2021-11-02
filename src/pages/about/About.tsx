import { Link } from "react-router-dom";
import CtaButton from "../../components/cta-button/CtaButton";
import { default as BioTitle } from "../../components/section-title/SectionTitle";
import {
  Img,
  Wrapper,
  Header,
  Text,
  Title,
  GrayText,
  Main,
  BioParagraph,
  SkillLogos,
  Logo,
  ContactSection,
  CallToAction,
} from "./styled";

const About: React.FC = () => {
  const importAll = (r: __WebpackModuleApi.RequireContext) =>
    r.keys().map((fileName: string) => ({
      slug: fileName.substr(2).replace(/\/index\.mdx$/, ""),
      module: r(fileName),
    }));

  const comfortableSkills: any = importAll(
    require.context(
      "../../../public/assets/skills_logo/comfortable",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const experimentedSkills: any = importAll(
    require.context(
      "../../../public/assets/skills_logo/experimented",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <>
      <Img
        src={process.env.PUBLIC_URL + "/assets/portrait.jpg"}
        alt="portrait"
      />
      <Wrapper>
        <Header>
          <Text>
            <Title>Hey, I’m Dimitri!</Title>
            <GrayText>
              I am a driven, resourceful and ever learning programmer that loves
              a good challenge
            </GrayText>
          </Text>
          <a
            href={
              process.env.PUBLIC_URL + "/assets/Dimitri Da Silva - Resume.pdf"
            }
            target="_blank"
            rel="noreferrer"
            style={{ flexShrink: 0 }}
          >
            <CtaButton
              text="Download my CV"
              onClick={() => {}}
              id="secondary"
              type="button"
            />
          </a>
        </Header>
        <Main>
          <div>
            <BioTitle>Background</BioTitle>
            <BioParagraph>
              While still working in corporate finance, I started learning code
              through Harvard’s online course CS50x Introduction to Computer
              Science and it just clicked for me.
              <br />
              <br />
              In pursuit of a more fulfilling line of work, I opted to change
              careers. I went on to learn the basics of web development on
              freeCodeCamp. Eager for knowledge, I enrolled in 42, a
              project-based computer science program that taught me
              self-discipline and a well-rounded set of programming skills. On
              the side, with the help of my mentor, an experienced software
              engineer and CEO at Byzans, I continued learning about both
              front-end and back-end web development.
            </BioParagraph>
          </div>
          <div>
            <BioTitle>Goals</BioTitle>
            <BioParagraph>
              Having worked for a few companies in finance, I know that I thrive
              more in small structures. I am looking to join a start-up (between
              3 and 20 people) and be part of an adventure along side a united
              and ambitious team. This preference comes from my desire of having
              responsibility and freedom to build impactful and meaningful
              projects.
              <br />
              <br />
              At the moment, I am full stack with a front-end specialisation. I
              am always honing my craft building various projects. Do more is my
              motto.
            </BioParagraph>
          </div>
          <div>
            <BioTitle>Skills</BioTitle>
            <BioParagraph>Technologies I am comfortable with:</BioParagraph>
            <SkillLogos style={{ marginBottom: "20px" }}>
              {Object.keys(comfortableSkills).map((logo, index) => {
                return (
                  <Logo
                    key={index}
                    src={comfortableSkills[logo].module.default}
                    alt="logo"
                  />
                );
              })}
            </SkillLogos>
            <BioParagraph>
              Other technologies that I have only started experimenting with:
            </BioParagraph>
            <SkillLogos>
              {Object.keys(experimentedSkills).map((logo, index) => {
                return (
                  <Logo
                    key={index}
                    src={experimentedSkills[logo].module.default}
                    alt="logo"
                  />
                );
              })}
            </SkillLogos>
          </div>
          <div>
            <BioTitle>Hobbies</BioTitle>
            <BioParagraph>
              My trusted Kindle never too far, reading is for me a daily ritual
              to unwind. I mostly read fantasy books (last in date is the
              Faithful and the Fallen series) but I also like biographies (most
              recent was Shoe Dog: A Memoir by the Creator of Nike).
              <br />
              <br />
              I have been swimming for the better part of my life. It’s my go-to
              to let off some steam (by a small margin ahead of a drink with
              friends). I usually swim between 1 and 3 times a week.
              <br />
              <br />I started learning and playing poker for the challenge and
              because it’s the kind of game where the potential for improvement
              is virtually limitless. I don’t always have the time to
              consistently play between my work, my side projects and my other
              hobbies, but when I do I love the math behind every decision. I
              firmly believe that the self-discipline required to assess every
              spot and take the most viable decision builds skills that
              transpire in my everyday life.
            </BioParagraph>
          </div>
        </Main>
      </Wrapper>
      <ContactSection>
        <CallToAction>Get in touch and tell me about yourself!</CallToAction>
        <Link to="/contact">
          <CtaButton
            text="Let's chat"
            onClick={() => {}}
            id="primary"
            type="button"
          />
        </Link>
      </ContactSection>
    </>
  );
};

export default About;
