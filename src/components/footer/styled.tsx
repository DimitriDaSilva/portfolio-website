import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaTwitter, FaRegEnvelope } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  min-height: 72px;
  width: 100vw;

  background-color: ${({ theme }) => theme.colors.font}
`

export const SocialIcons = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0;
  margin: 0;
  width: 270px;
  height: 24px;
`

const formatSocialIcon = (icon: typeof FaLinkedin) => {
  return styled(icon)`
    background: transparent;
    font-size: 20px;

    color: ${({ theme }) => theme.colors.bg};
    transition: color ${({ theme }) => theme.transitionSpeed};

    &:hover {
      color: ${({ theme }) => theme.colors.lightGray};
    }
    `
};

export const TwitterIcon = formatSocialIcon(FaTwitter);
export const GithubIcon = formatSocialIcon(FaGithub);
export const LinkedinIcon = formatSocialIcon(FaLinkedin);
export const EmailIcon = formatSocialIcon(FaRegEnvelope);

export const EmailButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`

export const Tooltip = styled(ReactTooltip).attrs(({ theme }) => ({
  backgroundColor: `${theme.colors.lightGray}`
}))`
`

export const Copyright = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.paragraph_s};
  color: ${({ theme }) => theme.colors.bg};

  padding: 0;
  margin: 0;
`
