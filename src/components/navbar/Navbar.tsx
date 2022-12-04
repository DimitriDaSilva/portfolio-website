import { Nav, NavLogo, Img, NavMenu, NavLink } from "./styled";

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
