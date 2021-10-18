import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  width: 300px;
  height: 300px;

  background: ${ (props) => props.color };

  box-shadow: 4px 4px 13px rgba(0, 0, 0, 0.25);
  border-radius: 2px;
`

export const Icon = styled.img`
  width: 100px;
  opacity: 1;
  display: block;

  transition: all 2s linear;

  ${Wrapper}:hover & {
    width: 110px;
    opacity: 0;
    display: none;
  };
`

export const InnerWrapper = styled.div`
  display: none;

  height: 100%;

  ${Wrapper}:hover & {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  };
`

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Title = styled.h3`
  padding: 0;
  margin: 0;

  font-size: ${({ theme }) => theme.font.sizes.heading_s};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.font};
  text-align: center;
`

export const Stack = styled.p`
  padding: 0 5px;
  margin: 0;

  font-size: 12;
  color: ${({ theme }) => theme.colors.accent};

  text-align: center;
`
