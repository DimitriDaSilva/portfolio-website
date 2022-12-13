import Button from "components/button/Button";
import { Link } from "react-router-dom";
import { down, up } from "styled-breakpoints";
import styled from "styled-components";

const ContactSection: React.FC = () => {
  return (
    <Container>
      <CallToAction>Get in touch and tell me about yourself!</CallToAction>
      <Link to="/contact">
        <Button text="Let's chat" variant="primary" type="button" />
      </Link>
    </Container>
  );
};

export default ContactSection;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 100vw;
  background-color: ${({ theme }) => theme.colors.lightGray};

  ${down("mobile")} {
    height: auto;
    padding: 10px;
  }

  ${up("mobile")} {
    height: 180px;
  }

  ${up("desktop")} {
    height: 290px;
  }
`;

const CallToAction = styled.h1`
  color: white;
  text-align: center;

  ${down("mobile")} {
    padding: 0px 10px;
    font-size: ${({ theme }) => theme.font.sizes.heading_m};
    padding-bottom: 10px;
  }

  ${up("mobile")} {
    padding: 0px 20px;
  }

  ${up("tablet")} {
    padding: 0px 40px;
    font-size: ${({ theme }) => theme.font.sizes.heading_l};
  }

  ${up("desktop")} {
    padding: 0px 72px;
  }

  ${up("desktopLarge")} {
    padding: 0px 72px;
  }
`;
