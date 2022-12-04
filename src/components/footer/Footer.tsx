import { useState } from "react";
import {
  Wrapper,
  SocialIcons,
  A,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  EmailIcon,
  EmailButton,
  Tooltip,
  Copyright,
} from "./styled";

const Footer: React.FC = () => {
  const defaultMessage = "Copy email to clipboard";
  const successMessage = "Email copied to clipboard";
  const [tooltipMessage, setTooltipMessage] = useState(defaultMessage);

  const copyEmail = (): void => {
    navigator.clipboard.writeText("dimitri.gomes.da.silva@gmail.com");
    setTooltipMessage(successMessage);
  };

  const onMouseOutHandler = (): void => {
    setTooltipMessage(defaultMessage);
  };

  return (
    <Wrapper>
      <SocialIcons>
        <li>
          <A
            href="https://www.linkedin.com/in/dimitri-da-silva/"
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn page"
          >
            <LinkedinIcon />
          </A>
        </li>
        <li>
          <A
            href="https://twitter.com/dimitri_d_s"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Twitter page"
          >
            <TwitterIcon />
          </A>
        </li>
        <li>
          <A
            href="https://github.com/DimitriDaSilva"
            target="_blank"
            rel="noreferrer"
            aria-label="Open Github page"
          >
            <GithubIcon />
          </A>
        </li>
        <li>
          <EmailButton
            data-tip=""
            onClick={copyEmail}
            onMouseOut={onMouseOutHandler}
            aria-label="Copy email button"
          >
            <EmailIcon />
          </EmailButton>
        </li>
      </SocialIcons>
      <Copyright>© {new Date().getFullYear()} Dimitri Da Silva</Copyright>
      <Tooltip
        multiline={false}
        scrollHide={true}
        getContent={() => {
          return tooltipMessage;
        }}
      />
    </Wrapper>
  );
};

export default Footer;
