import { Link } from "react-router-dom";
import ReactTooltip from "react-tooltip";

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
  BioLink,
  SkillLogos,
  Logo,
  ContactSection,
  CallToAction,
} from "./styled";

const getSkillName = (path: string): string | undefined => {
  const filename: string | undefined = path.split(/(\\|\/)/g).pop();

  return filename?.split(".")[0];
};

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
            <CtaButton text="Download my CV" id="secondary" type="button" />
          </a>
        </Header>
        <Main>
          <div>
            <BioTitle>Background</BioTitle>
            <BioParagraph>
              While still working in corporate finance, I started learning code
              through Harvard’s online course{" "}
              <BioLink
                href="https://cs50.harvard.edu/x/"
                target="_blank"
                rel="noreferrer"
              >
                CS50x
              </BioLink>{" "}
              Introduction to Computer Science and it just clicked for me.
              <br />
              <br />
              In pursuit of a more fulfilling line of work, I opted to change
              careers. I went on to learn the basics of web development on{" "}
              <BioLink
                href="https://www.freecodecamp.org/"
                target="_blank"
                rel="noreferrer"
              >
                freeCodeCamp
              </BioLink>
              . Eager for knowledge, I enrolled in{" "}
              <BioLink
                href="https://42.fr/en/homepage/"
                target="_blank"
                rel="noreferrer"
              >
                42
              </BioLink>
              , an innovative project-based computer science program that taught
              me self-discipline and a well-rounded set of programming skills.
              On the side, with the help of my mentor, an experienced software
              engineer and CEO at{" "}
              <BioLink
                href="https://byzans.com/"
                target="_blank"
                rel="noreferrer"
              >
                Byzans
              </BioLink>
              , I continued learning about both front-end and back-end web
              development.
            </BioParagraph>
          </div>
          <div>
            <BioTitle>Goals</BioTitle>
            <BioParagraph>
              From experience, I thrive more in small-size companies. I wish to
              have responsibility and freedom to build impactful and meaningful
              projects. I am looking to join a start-up and be part of an
              adventure along side a united and ambitious team.
              <br />
              <br />
              At the moment, I am a front-end web developer but I am aiming to
              be full stack by continuously honing my craft building challenging
              projects. Do more is my motto.
            </BioParagraph>
          </div>
          <div>
            <BioTitle>Skills</BioTitle>
            <BioParagraph>Technologies I am comfortable with:</BioParagraph>
            <SkillLogos style={{ marginBottom: "20px" }}>
              {Object.keys(comfortableSkills).map((logo, index) => {
                return (
                  <div key={logo}>
                    <Logo
                      data-tip={getSkillName(
                        comfortableSkills[logo].module.default
                      )}
                      src={comfortableSkills[logo].module.default}
                      alt="logo"
                      data-for={index}
                    />
                    <ReactTooltip id={`${index}`} />
                  </div>
                );
              })}
            </SkillLogos>
            <BioParagraph>
              Other technologies that I have only started experimenting with:
            </BioParagraph>
            <SkillLogos>
              {Object.keys(experimentedSkills).map((logo, index) => {
                return (
                  <div key={logo}>
                    <Logo
                      key={index}
                      data-tip={getSkillName(
                        experimentedSkills[logo].module.default
                      )}
                      src={experimentedSkills[logo].module.default}
                      alt="logo"
                      data-for={index}
                    />
                    <ReactTooltip id={`${index}`} />
                  </div>
                );
              })}
            </SkillLogos>
          </div>
          <div>
            <BioTitle>Hobbies</BioTitle>
            <BioParagraph>
              My trusted Kindle never too far, reading is for me a daily ritual
              to unwind. I mostly read fantasy books (last in date: the Faithful
              and the Fallen series) and biographies (last in date: Shoe Dog: A
              Memoir by the Creator of Nike).
              <br />
              <br />
              I have been swimming for the better part of my life. It’s my go-to
              to let off some steam (by a small margin ahead of a drink with
              friends).
              <br />
              <br />I started learning and playing poker because it’s more
              complex than meets the eye. I love the math behind every decision.
              I believe that the self-discipline required in poker to assess
              every spot and take the most viable decision builds skills that
              transpire in my everyday life.
            </BioParagraph>
          </div>
        </Main>
      </Wrapper>
      <ContactSection>
        <CallToAction>Get in touch and tell me about yourself!</CallToAction>
        <Link to="/contact">
          <CtaButton text="Let's chat" id="primary" type="button" />
        </Link>
      </ContactSection>
    </>
  );
};

export default About;
