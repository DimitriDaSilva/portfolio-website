import { FaTimes } from 'react-icons/fa';

import styled from "styled-components";

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
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);

  background: ${({ theme }) => theme.colors.bg};

  width: 760px;

  z-index: 1000;
`

export const ProjectImages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 460px;

  background-size: cover;
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

export const Image = styled.img`

`

export const InnerWrapper = styled.div`
  height: 300px;
`

export const TextSection = styled.div`

`

export const Links = styled.div`

`

export const CrossIcon = styled(FaTimes)`
  cursor: pointer;

`
