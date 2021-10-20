import styled from 'styled-components'
import { up, down } from 'styled-breakpoints'

export const Header = styled.h2`
	align-self: flex-start;

	${down('mobile')} {
		font-size: ${({ theme }) => theme.font.sizes.heading_s};
	}

	${up('mobile')} {
		font-size: ${({ theme }) => theme.font.sizes.heading_m};
	}

	color: ${({ theme }) => theme.colors.font};

	position: relative;
	z-index: 0;

	&::after {
		display: block;
		content: '';
		background: ${({ theme }) => theme.colors.accent};
		position: absolute;
		left: -10px;
		z-index: -1;

		${down('mobile')} {
			bottom: 3px;
			height: 3px;
			width: 50px;
		}

		${up('mobile')} {
			bottom: 6px;
			height: 6px;
			width: 70px;
		}
	}

	margin: 30px 0px;
`
