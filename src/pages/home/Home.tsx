import { Main } from './styled'
import Hero from './hero/Hero'
import RecentProjects from './recent-projects/RecentProjects'
import Contact from './contact/Contact'

const Home: React.FC = () => (
  <Main>
    <Hero />
    <RecentProjects />
    <Contact />
  </Main>
);

export default Home;
