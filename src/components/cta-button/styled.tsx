import styled, { css } from 'styled-components'

export const Button = styled.input`
  font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
  font-family: ${({ theme }) => theme.font.families.paragraph};
  font-weight: bold;
  color: ${({ color }) => color};

  ${ props => props.id === 'primary' &&
    css`
    color: white;
    background: ${({ theme }) => theme.colors.accent};
 `};

  ${ props => props.id !== 'primary' &&
    css`
    color: white;
    background: ${({ theme }) => theme.colors.lightGray};
 `};

  border-radius: 2px;
  padding: 10px;
  border: none;

  cursor: pointer;
  transition: all ${({ theme }) => theme.transitionSpeed};

  &:hover {
    filter: brightness(130%);
  }
`
