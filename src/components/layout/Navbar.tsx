import styled from "styled-components";
import { up } from "styled-breakpoints";
import { NavLink as Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavLogo to="/">
        <Img
          src={process.env.PUBLIC_URL + "/assets/dds-logo-black.png"}
          alt="logo"
        />
      </NavLogo>

      <NavMenu>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: ${({ theme }) => theme.navbarHeight};

  padding: 0px 10px;
  width: 100%;

  ${up("mobile")} {
    padding: 0px 20px;
  }

  ${up("tablet")} {
    padding: 0px 40px;
  }

  ${up("desktop")} {
    padding: 0px 72px;
  }

  ${up("desktopLarge")} {
    padding: 0px 72px;
    width: ${({ theme }) => theme.breakpoints.desktopLarge}px;
  }
`;

const NavLogo = styled(Link)`
  text-decoration: none;
`;

const Img = styled.img`
  width: 50px;
  cursor: pointer;

  display: flex;
  align-items: center;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
`;
const NavLink = styled(Link)`
  font-size: 20px;
  padding: 0px 10px;
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.sizes.paragraph_m};

  color: ${({ theme }) => theme.colors.font};
  transition: color ${({ theme }) => theme.transitionSpeed};

  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
