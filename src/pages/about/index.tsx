import { down, up } from "styled-breakpoints";
import styled from "styled-components";

import Header from "./Header";
import BackgroundSection from "./BackgroundSection";
import ContactSection from "./ContactSection";
import GoalsSections from "./GoalsSection";
import HobbiesSection from "./HobbiesSection";
import SkillsSection from "./SkillsSection";

const About: React.FC = () => {
  return (
    <Main>
      <Img
        src={process.env.PUBLIC_URL + "/assets/portrait.jpg"}
        alt="portrait"
      />

      <Wrapper>
        <Header />

        <Sections>
          <BackgroundSection />

          <GoalsSections />

          <SkillsSection />

          <HobbiesSection />
        </Sections>
      </Wrapper>

      <ContactSection />
    </Main>
  );
};

export default About;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;

  width: 100%;

  ${down("mobile")} {
    min-height: calc(
      100vh - ${({ theme }) => theme.footerHeight} -
        ${({ theme }) => theme.navbarHeight} - 150px - 70px
    );
    padding: 0px 10px;
  }

  ${up("mobile")} {
    min-height: calc(
      100vh - ${({ theme }) => theme.footerHeight} -
        ${({ theme }) => theme.navbarHeight} - 350px - 180px
    );
    padding: 0px 20px;
  }

  ${up("tablet")} {
    padding: 0px 40px;
  }

  ${up("desktop")} {
    min-height: calc(
      100vh - ${({ theme }) => theme.footerHeight} -
        ${({ theme }) => theme.navbarHeight} - 500px - 290px
    );
    padding: 0px 72px;
  }

  ${up("desktopLarge")} {
    padding: 0px 72px;
    width: ${({ theme }) => theme.breakpoints.desktopLarge}px;
  }
`;

const Img = styled.img`
  width: 100vw;
  object-fit: cover;

  ${down("mobile")} {
    height: 150px;
  }

  ${up("mobile")} {
    height: 350px;
  }

  ${up("desktop")} {
    height: 500px;
  }
`;

const Sections = styled.div`
  ${down("tabletLarge")} {
    display: flex;
    flex-direction: column;
    align-items: cener;
  }

  ${up("tabletLarge")} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    column-gap: 15px;
  }

  margin-bottom: 30px;
`;
