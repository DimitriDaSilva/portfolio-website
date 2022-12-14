import styled from "styled-components";
import SocialIcons from "./SocialIcons";

const Footer: React.FC = () => {
  return (
    <Container>
      <SocialIcons />

      <Copyright>© {new Date().getFullYear()} Dimitri Da Silva</Copyright>
    </Container>
  );
};

export default Footer;

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  height: ${({ theme }) => theme.footerHeight};
  width: 100vw;

  background-color: ${({ theme }) => theme.colors.font};
`;

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.paragraph_s};
  color: ${({ theme }) => theme.colors.bg};

  padding: 0;
  margin: 0;
`;
