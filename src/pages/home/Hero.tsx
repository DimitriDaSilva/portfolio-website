import styled, { keyframes } from "styled-components";
import { up, down } from "styled-breakpoints";
import { FaArrowDown } from "react-icons/fa";

import Button from "components/button/Button";

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const elemContact = document.getElementById("contact-form");

    elemContact?.scrollIntoView();
  };

  return (
    <OutterWrapper>
      <InnerWrapper>
        <LeftSide>
          <TextSection>
            <Header>
              Let's build something <RedUnderline>great</RedUnderline> together!
            </Header>

            <Name>Dimitri Da Silva, front-end web developer from Paris</Name>
          </TextSection>

          <Button text="Let's chat!" onClick={scrollToContact} />
        </LeftSide>

        <Illustration
          src={process.env.PUBLIC_URL + "/assets/undraw-illustration-hero.svg"}
          alt="developer-illustration"
        />
      </InnerWrapper>

      <FloatingArrow />
    </OutterWrapper>
  );
};

export default Hero;

const OutterWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 700px;
  margin-bottom: 20px;
  padding: 150px 0px 5px 0px;

  width: 100%;
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;

  width: 100%;

  ${down("tabletLarge")} {
    justify-content: center;
  }

  ${up("tabletLarge")} {
    justify-content: space-between;
  }
`;

const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  z-index: 2;

  ${down("tablet")} {
    width: 85%;
  }

  ${up("tablet")} {
    width: 70%;
  }

  ${up("tabletLarge")} {
    width: 50%;
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  padding-bottom: 100px;
`;

const Header = styled.h1`
  margin: 0px;

  font-weight: bold;
  line-height: 1.2;

  z-index: 2;

  ${down("mobile")} {
    font-size: ${({ theme }) => theme.font.sizes.heading_m};
  }

  ${up("mobile")} {
    font-size: ${({ theme }) => theme.font.sizes.heading_l};
  }

  ${up("tablet")} {
    font-size: ${({ theme }) => theme.font.sizes.heading_xl};
  }
`;

const RedUnderline = styled.span`
  position: relative;
  z-index: 1;

  &::after {
    display: block;
    content: "";
    background: ${({ theme }) => theme.colors.accent};
    position: absolute;
    z-index: -2;
    left: -10px;
    width: 60%;

    ${down("mobile")} {
      height: 5px;
      bottom: 7px;
    }

    ${up("mobile")} {
      height: 10px;
      bottom: 10px;
    }
  }
`;

const Name = styled.p`
  margin: 0px;
  padding-top: 15px;

  font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
  color: ${({ theme }) => theme.colors.lightGray};
`;

const Illustration = styled.img`
  height: 400px;

  ${down("tabletLarge")} {
    display: none;
  }

  ${up("tabletLarge")} {
    display: block;
  }
`;

const arrowAnimation = keyframes`
	0%, 20%, 50%, 80%, 100% {
		transform: translateY(0);
	}
	40% {
		transform: translateY(-30px);
	}
	60% {
		transform: translateY(-15px);
	}
`;

const FloatingArrow = styled(FaArrowDown)`
  color: ${({ theme }) => theme.colors.font};
  animation: ${arrowAnimation} 2s infinite;
`;
