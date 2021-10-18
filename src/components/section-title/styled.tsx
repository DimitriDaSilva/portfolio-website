import styled from 'styled-components'

export const Header = styled.h2`
	align-self: flex-start;

	font-size: ${({ theme }) => theme.font.sizes.heading_m};
	color: ${({ theme }) => theme.colors.font};

	position: relative;
	z-index: 0;

	&::after {
		display: block;
		content: '';
		width: 70px;
		height: 6px;
		background: ${({ theme }) => theme.colors.accent};
		position: absolute;
		bottom: 6px;
		left: -10px;
		z-index: -1;
	}

	margin: 30px 0px;
`
