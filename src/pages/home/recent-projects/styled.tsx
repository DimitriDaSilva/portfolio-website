import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	width: 100%;
`

export const Header = styled.h2`
	align-self: flex-start;

	font-size: ${({ theme }) => theme.font.sizes.heading_m}
`

export const Projects = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	width: 90%;
`

export const RedUnderline = styled.span`
	position: relative;
	z-index: 0;

	&::after {
		display: block;
		content: '';
		width: 60%;
		height: 6px;
		background: ${({ theme }) => theme.colors.accent};
		position: absolute;
		bottom: 4px;
		left: -10px;
		z-index: -1;
	}
`

