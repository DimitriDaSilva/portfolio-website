import { Nav, NavLogo, Img, NavMenu, NavLink } from "./styled";

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavLogo href="/">
        <Img
          src={process.env.PUBLIC_URL + "/assets/dds-logo-black.png"}
          alt="logo"
        />
      </NavLogo>
      <NavMenu>
        <li>
          <NavLink href="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink href="/about">About</NavLink>
        </li>
      </NavMenu>
    </Nav>
  );
};

export default Navbar;
