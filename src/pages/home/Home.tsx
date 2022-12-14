import styled from "styled-components";
import { up, down } from "styled-breakpoints";

import Hero from "./hero/Hero";
import RecentProjects from "./recent-projects/RecentProjects";
import ContactForm from "components/contact-form";

const Home: React.FC = () => (
  <Main>
    <Hero />
    <RecentProjects />
    <ContactForm />
  </Main>
);

export default Home;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;

  width: 100%;
  min-height: calc(
    100vh - ${({ theme }) => theme.footerHeight} -
      ${({ theme }) => theme.navbarHeight}
  );

  ${down("mobile")} {
    padding: 0px 10px;
  }

  ${up("mobile")} {
    padding: 0px 20px;
  }

  ${up("tablet")} {
    padding: 0px 40px;
  }

  ${up("desktop")} {
    padding: 0px 72px;
  }

  ${up("desktopLarge")} {
    padding: 0px 72px;
    width: ${({ theme }) => theme.breakpoints.desktopLarge}px;
  }
`;
