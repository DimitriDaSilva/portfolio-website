import { FaTimes } from 'react-icons/fa';
import {down, up} from 'styled-breakpoints';
import styled from 'styled-components';


export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1000;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  background: ${({ theme }) => theme.colors.bg};

  ${down('tablet')} {
    width: 100vw;
    height: 100vh;
  }

  ${up('tablet')} {
    width: 760px;
    height: auto;
  }

  z-index: 1000;
`

export const ProjectImages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 460px;

  ${down('tablet')} {
    background-size: contain;
  }

  ${up('tablet')} {
    background-size: cover;
  }

  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.lightGray};
  background-position: center;
`

export const Slider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
  width: 30px;

  background: rgba( 0, 0, 0, 0.7 );

  cursor: pointer;
`

export const InnerWrapper = styled.div`
  ${down('tablet')} {
    height: auto;
  }

  ${up('tablet')} {
    height: 300px;
  }

  flex-grow: 4;

  padding: 14px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.heading_s};
  color: ${({ theme }) => theme.colors.font};

  &::before {
    content: "";
    display: block;
    float: left;
    background: url(${process.env.PUBLIC_URL + '/assets/images/red-triangle.svg'}) no-repeat;
    background-size: contain;
    width: 25px;
    height: 25px;
  }
`

export const Description = styled.p`
  white-space: pre-line;

  font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
  color: ${({ theme }) => theme.colors.font};
  padding: 10px 0px;
`

export const Stack = styled.p`
  white-space: pre-line;

  font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
  color: ${({ theme }) => theme.colors.font};
`

export const Skills = styled.p`
  white-space: pre-line;

  font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
  color: ${({ theme }) => theme.colors.font};
`

export const LinkSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`

export const CrossIcon = styled(FaTimes)`
  cursor: pointer;

  font-size: 25px;
  font-weight: thin;
  color: ${({ theme }) => theme.colors.font};
`

export const Links = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;

  width: 250px;
`

