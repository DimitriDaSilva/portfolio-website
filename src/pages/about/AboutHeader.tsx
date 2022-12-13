import { down, up } from "styled-breakpoints";
import styled from "styled-components";

import CtaButton from "components/cta-button/CtaButton";

const AboutHeader: React.FC = () => {
  return (
    <Header>
      <Text>
        <Title>Hey, I’m Dimitri!</Title>
        <GrayText>
          I am a driven, resourceful and ever learning programmer that loves a
          good challenge
        </GrayText>
      </Text>
      <a
        href={process.env.PUBLIC_URL + "/assets/Dimitri Da Silva - Resume.pdf"}
        target="_blank"
        rel="noreferrer"
        style={{ flexShrink: 0 }}
      >
        <CtaButton text="Download my CV" variant="secondary" type="button" />
      </a>
    </Header>
  );
};

export default AboutHeader;

const Header = styled.div`
  display: flex;

  ${down("tablet")} {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 20px;
  }

  ${up("tablet")} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  width: 100%;

  margin: 20px 0px;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.font};

  ${down("tablet")} {
    font-size: ${({ theme }) => theme.font.sizes.heading_m};
  }

  ${up("tablet")} {
    font-size: ${({ theme }) => theme.font.sizes.heading_l};
  }
`;

const GrayText = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
`;
