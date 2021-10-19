import { useState } from 'react';
import { Wrapper,
  SocialIcons,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  EmailIcon,
  EmailButton,
  Tooltip,
  Copyright } from './styled'

const Footer: React.FC = () => {
  const defaultMessage = 'Copy email to clipboard';
  const successMessage = 'Email copied to clipboard'
  const [tooltipMessage, setTooltipMessage] = useState(defaultMessage);

  const copyEmail = (): void => {
    navigator.clipboard.writeText('dimitri.gomes.da.silva@gmail.com');
    setTooltipMessage(successMessage);
  };

  const onMouseOutHandler = (): void => {
    setTooltipMessage(defaultMessage);
  }

  return (
    <Wrapper>
      <SocialIcons>
        <li><a href='https://www.linkedin.com/in/dimitri-da-silva/' target='_blank' rel='noreferrer'><LinkedinIcon /></a></li>
        <li><a href='https://twitter.com/dimitri_d_s' target='_blank' rel='noreferrer'><TwitterIcon /></a></li>
        <li><a href='https://github.com/DimitriDaSilva' target='_blank' rel='noreferrer'><GithubIcon /></a></li>
        <li><EmailButton data-tip='' onClick={copyEmail} onMouseOut={onMouseOutHandler} ><EmailIcon /></EmailButton></li>
      </SocialIcons>
      <Copyright>© {new Date().getFullYear()} Dimitri Da Silva</Copyright>
      <Tooltip getContent={() => {return tooltipMessage}}/>
    </Wrapper>
  );
};

export default Footer;
