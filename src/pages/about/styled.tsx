import styled from "styled-components";
import { down, up } from "styled-breakpoints";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;

  width: 100%;

  ${down("mobile")} {
    min-height: calc(
      100vh - ${({ theme }) => theme.footerHeight} -
        ${({ theme }) => theme.navbarHeight} - 150px - 70px
    );
    padding: 0px 10px;
  }

  ${up("mobile")} {
    min-height: calc(
      100vh - ${({ theme }) => theme.footerHeight} -
        ${({ theme }) => theme.navbarHeight} - 350px - 180px
    );
    padding: 0px 20px;
  }

  ${up("tablet")} {
    padding: 0px 40px;
  }

  ${up("desktop")} {
    min-height: calc(
      100vh - ${({ theme }) => theme.footerHeight} -
        ${({ theme }) => theme.navbarHeight} - 500px - 290px
    );
    padding: 0px 72px;
  }

  ${up("desktopLarge")} {
    padding: 0px 72px;
    width: ${({ theme }) => theme.breakpoints.desktopLarge}px;
  }
`;

export const Img = styled.img`
  width: 100vw;
  object-fit: cover;

  ${down("mobile")} {
    height: 150px;
  }

  ${up("mobile")} {
    height: 350px;
  }

  ${up("desktop")} {
    height: 500px;
  }
`;

export const Header = styled.div`
  display: flex;

  ${down("tablet")} {
    flex-direction: column;
    align-items: flex-start;
  }

  ${up("tablet")} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  width: 100%;

  margin: 20px 0px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.font};

  ${down("tablet")} {
    font-size: ${({ theme }) => theme.font.sizes.heading_m};
  }

  ${up("tablet")} {
    font-size: ${({ theme }) => theme.font.sizes.heading_l};
  }
`;

export const GrayText = styled.p`
  color: ${({ theme }) => theme.colors.lightGray};
`;

export const Main = styled.div`
  ${down("tabletLarge")} {
    display: flex;
    flex-direction: column;
    align-items: cener;
  }

  ${up("tabletLarge")} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr 2fr;
  }

  margin-bottom: 30px;
`;

export const BioSection = styled.div``;

export const BioParagraph = styled.p`
  color: ${({ theme }) => theme.colors.font};
`;

export const SkillLogos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 5px;

  margin-top: 10px;
`;

export const Logo = styled.img`
  height: 50px;

  filter: gray;
  -webkit-filter: grayscale(1);
  filter: grayscale(1);

  transition: all 0.2s;

  &:hover {
    -webkit-filter: grayscale(0);
    filter: none;
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  width: 100vw;
  background-color: ${({ theme }) => theme.colors.lightGray};

  ${down("mobile")} {
    height: 70px;
  }

  ${up("mobile")} {
    height: 180px;
  }

  ${up("desktop")} {
    height: 290px;
  }
`;

export const CallToAction = styled.h1`
  color: white;
  text-align: center;

  ${down("mobile")} {
    padding: 0px 10px;
    font-size: ${({ theme }) => theme.font.sizes.heading_m};
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
