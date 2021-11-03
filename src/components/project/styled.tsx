import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 300px;
  height: 300px;

  background: ${(props) => props.color};

  box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`;

export const InnerWrapper = styled.div`
  position: relative;

  height: 100%;
  width: 100%;

  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  z-index: 0;
`;

export const Icon = styled.img`
  position: absolute;
  bottom: -20px;
  left: -20px;
  width: 150px;
  z-index: -1;

  filter: invert(100%) opacity(20%);
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h3`
  padding: 0;
  margin: 0;

  font-size: ${({ theme }) => theme.font.sizes.heading_s};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.bg};
  text-align: center;
`;

export const Stack = styled.p`
  padding: 0 5px;
  margin: 0;

  font-size: 12;
  color: ${({ theme }) => theme.colors.accent};

  text-align: center;
`;
