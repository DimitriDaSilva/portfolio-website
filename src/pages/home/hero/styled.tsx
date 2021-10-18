import styled, { keyframes } from 'styled-components'
import { up, down } from 'styled-breakpoints'
import { FaArrowDown } from 'react-icons/fa'

export const OutterWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	height: 700px;
	margin-bottom: 20px;
	padding: 150px 0px 5px 0px;
`

export const InnerWrapper = styled.div`
	display: flex;
	align-items: center;

	width: 100%;

	justify-content: center;

	${up('tabletLarge')} {
		justify-content: space-between;
	}
`

export const LeftSide = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;

	z-index: 2;

	${down('tablet')} {
		width: 85%;
	}

	${up('tablet')} {
		width: 70%;
	}

	${up('tabletLarge')} {
		width: 50%;
	}
`

export const TextSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;

	padding-bottom: 100px;
`

export const Header = styled.h1`
	margin: 0px;

	${down('mobile')} {
		font-size: ${({ theme }) => theme.font.sizes.heading_s};
	}

	${up('mobile')} {
		font-size: ${({ theme }) => theme.font.sizes.heading_xl};
	}
	font-weight: bold;
	line-height: 1.2;
`

export const RedUnderline = styled.span`
	position: relative;
	z-index: 0;

	&::after {
		display: block;
		content: '';
		width: 60%;
		height: 10px;
		background: ${({ theme }) => theme.colors.accent};
		position: absolute;
		bottom: 10px;
		left: -10px;
		z-index: -1;
	}
`

export const Name = styled.p`
	margin: 0px;
	padding-top: 15px;

	font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
	color: ${({ theme }) => theme.colors.lightGray};
`

export const Illustration = styled.img`
	height: 400px;

	position: absolute;
	right: 10%;

	${down('tabletLarge')} {
		display: none;
	}

	${up('tabletLarge')} {
		display: block;
	}
`

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
`

export const FloatingArrow = styled(FaArrowDown)`
	color: ${({ theme }) => theme.colors.font};
	animation: ${arrowAnimation} 2s infinite;
`
