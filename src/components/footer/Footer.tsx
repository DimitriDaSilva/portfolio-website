import { Wrapper,
  SocialIcons,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  Copyright } from './styled'

const Footer: React.FC = () => {
  return (
    <Wrapper>
      <SocialIcons>
        <li><a href="https://www.linkedin.com/in/dimitri-da-silva/" target="_blank" rel="noreferrer"><LinkedinIcon /></a></li>
        <li><a href="https://twitter.com/dimitri_d_s" target="_blank" rel="noreferrer"><TwitterIcon /></a></li>
        <li><a href="https://github.com/DimitriDaSilva" target="_blank" rel="noreferrer"><GithubIcon /></a></li>
      </SocialIcons>
      <Copyright>© 2021 Dimitri Da Silva</Copyright>
    </Wrapper>
  );
};

export default Footer;
