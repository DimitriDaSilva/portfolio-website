import { Main } from "./styled";
import Hero from "./hero/Hero";
import RecentProjects from "./recent-projects/RecentProjects";
import ContactForm from "./contact/ContactForm";

const Home: React.FC = () => (
  <Main>
    <Hero />
    <RecentProjects />
    <ContactForm />
  </Main>
);

export default Home;
