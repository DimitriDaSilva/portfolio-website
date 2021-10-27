import { down, up } from 'styled-breakpoints'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;

  width: 100%;
  min-height: calc(100vh - ${({ theme }) => theme.footerHeight} - ${({ theme }) => theme.navbarHeight});

  ${down('mobile')} {
    padding: 0px 10px;
  }

  ${up('mobile')} {
    padding: 0px 20px;
  }

  ${up('tablet')} {
    padding: 0px 40px;
  }

  ${up('desktop')} {
    padding: 0px 72px;
  }

  ${up('desktopLarge')} {
    padding: 0px 72px;
    width: ${({ theme }) => theme.breakpoints.desktopLarge}px;
  }
`

export const Filters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.lightGray};

  width: 100vw;

  ${down('mobile')} {
    padding: 0px 10px;
  }

  ${up('mobile')} {
    padding: 0px 20px;
  }

  ${up('tablet')} {
    padding: 0px 40px;
  }

  ${up('desktop')} {
    padding: 0px 72px;
  }

  ${up('desktopLarge')} {
    padding: 0px 72px;
    width: ${({ theme }) => theme.breakpoints.desktopLarge}px;
  }
`

export const Techs = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  column-gap: 20px;

  height: 90px;

  color: white;
`

export const TechButton = styled.input`

`

export const Illustration = styled.img`
	height: 60px;
    align-self: flex-end;
`

export const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;

  gap: 5vw 5vw;

  padding: 40px 0px;

  ${down('tablet')} {
    flex-direction: column;
    flex-wrap: no-wrap;
  }

  ${up('tablet')} {
    flex-direction: row;
    flex-wrap: wrap;
  }

  ${up('desktop')} {
    flex-direction: row;
    flex-wrap: no-wrap;
  }
`
