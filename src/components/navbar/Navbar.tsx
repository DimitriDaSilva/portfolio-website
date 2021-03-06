import { Nav, NavLogo, Img, NavMenu, NavLink } from './styled'

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavLogo to='/'>
        <Img src={process.env.PUBLIC_URL + '/assets/dds-logo-black.png'} alt='logo' />
      </NavLogo>
      <NavMenu>
        <NavLink to='/projects'>Projects</NavLink>
        <NavLink to='/about'>About</NavLink>
      </NavMenu>
    </Nav>
  )
};

export default Navbar;
