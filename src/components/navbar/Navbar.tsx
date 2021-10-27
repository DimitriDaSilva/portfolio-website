import { Nav, NavLogo, Img } from './styled'

const Navbar: React.FC = () => {
  return (
    <Nav>
      <NavLogo to='/'>
        <Img src={process.env.PUBLIC_URL + '/assets/images/dds-logo-black.png'} alt='logo' />
      </NavLogo>
    </Nav>
  )
};

export default Navbar;
