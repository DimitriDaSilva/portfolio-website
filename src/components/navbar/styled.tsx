import styled from 'styled-components'
import { up } from 'styled-breakpoints'
import { NavLink as Link } from 'react-router-dom'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${({ theme }) => theme.navbarHeight};

  padding: 0px 10px;
  width: 100%;

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

export const NavLogo = styled(Link)`
  text-decoration: none;
`

export const Img = styled.img`
  width: 50px;
  cursor: pointer;

  display: flex;
  align-items: center;
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
`
export const NavLink = styled(Link)`
  font-size: 20px;
  padding: 0px 10px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.sizes.paragraph_m};

  color: ${({ theme }) => theme.colors.font};
  transition: color ${({ theme }) => theme.transitionSpeed};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`
