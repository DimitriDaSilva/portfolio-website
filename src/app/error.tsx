import styled from "styled-components";
import { up, down } from "styled-breakpoints";
import { Header } from "../home/hero/styled";

const Error: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Illustration
        src={process.env.PUBLIC_URL + "/assets/undraw-404-lost.svg"}
        alt="developer-illustration"
      />
      <Header style={{ textAlign: "center" }}> 404 - Page not found</Header>
    </Wrapper>
  );
};

export default Error;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  min-height: calc(
    100vh - ${({ theme }) => theme.footerHeight} -
      ${({ theme }) => theme.navbarHeight}
  );
  margin: 0;

  ${down("mobile")} {
    padding: 10px 10px;
  }

  ${up("mobile")} {
    padding: 20px 20px;
  }

  ${up("tablet")} {
    padding: 20px 40px;
  }

  ${up("desktop")} {
    padding: 40px 72px;
  }

  ${up("desktopLarge")} {
    padding: 40px 72px;
    width: ${({ theme }) => theme.breakpoints.desktopLarge}px;
  }
`;

export const Illustration = styled.img`
  padding-bottom: 40px;

  ${down("mobile")} {
    width: 70%;
  }

  ${up("mobile")} {
    width: 60%;
  }

  ${up("tablet")} {
    width: 50%;
  }

  ${up("desktop")} {
    width: 40%;
  }

  ${up("desktopLarge")} {
    width: 710px;
  }
`;
