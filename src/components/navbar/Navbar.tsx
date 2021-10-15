import { Nav, NavLogo, Img, NavMenu, NavLink } from './styled'
import logo from './../../assets/images/dds-logo-black.png'

const Navbar: React.FC = () => {
  return (
    <>
    <Nav>
      <NavLogo to="/">
        <Img src={logo} alt="logo" />
      </NavLogo>
      <NavMenu>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/about">About</NavLink>
      </NavMenu>
    </Nav>
    </>
  )
};

export default Navbar;
