import { useState } from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter, FaRegEnvelope } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

const SocialIcons: React.FC = () => {
  const defaultMessage = "Copy email to clipboard";
  const successMessage = "Email copied to clipboard";
  const [tooltipMessage, setTooltipMessage] = useState<string>(defaultMessage);

  const copyEmail = (): void => {
    navigator.clipboard.writeText("dimitri.gomes.da.silva@gmail.com");
    setTooltipMessage(successMessage);
  };

  const onMouseOutHandler = (): void => {
    setTooltipMessage(defaultMessage);
  };

  return (
    <>
      <Container>
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
      </Container>

      <Tooltip
        multiline={false}
        scrollHide={true}
        getContent={() => {
          return tooltipMessage;
        }}
      />
    </>
  );
};

export default SocialIcons;

const Container = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0;
  margin: 0;
  width: 270px;
  height: 24px;

  > li {
    overflow-y: hidden;
  }
`;

const A = styled.a`
  display: flex;
  align-items: center;
`;

const formatSocialIcon = (
  icon:
    | typeof FaGithub
    | typeof FaLinkedin
    | typeof FaTwitter
    | typeof FaRegEnvelope
) => {
  return styled(icon)`
    background: transparent;
    font-size: 20px;

    color: ${({ theme }) => theme.colors.bg};
    transition: color ${({ theme }) => theme.transitionSpeed};

    &:hover {
      color: ${({ theme }) => theme.colors.lightGray};
      display: flex;
    }
  `;
};

const TwitterIcon = formatSocialIcon(FaTwitter);
const GithubIcon = formatSocialIcon(FaGithub);
const LinkedinIcon = formatSocialIcon(FaLinkedin);
const EmailIcon = formatSocialIcon(FaRegEnvelope);

const EmailButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
`;

const Tooltip = styled(ReactTooltip).attrs(({ theme }) => ({
  backgroundColor: `${theme.colors.lightGray}`,
}))`
  overflow: hidden;
  text-align: center;
`;
