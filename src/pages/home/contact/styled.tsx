import {down, up} from 'styled-breakpoints'
import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: flex-start;

	width: 100%;
`

export const Text = styled.p`
	font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
	color: ${({ theme }) => theme.colors.font};
	padding-bottom: 20px;
`

export const Form = styled.form`
	align-self: center;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: flex-start;

	row-gap: 20px;

	${down('tablet')} {
		width: 100%;
	}

	${up('tablet')} {
		width: 560px;
	}

	padding-bottom: 40px;
`

export const InputSection = styled.div`
	${down('tablet')} {
		width: 100%;
	}

	${up('tablet')} {
		width: 560px;
	}

	position: relative;

	padding: 10px 0px;
`

export const Label = styled.label`
	align-self: flex-start;

	position: absolute;
	bottom: 0%;
	left: 0%;
	width: 100%;
	height: 100%;

	font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
	color: ${({ theme }) => theme.colors.lightGray};

	pointer-events: none;

	border-bottom: 1px solid ${({ theme }) => theme.colors.font};

	overflow: hidden;

	&::after {
		content: '';

		position: absolute;
		left: 0px;
		bottom: -1px;

		height: 100%;
		width: 100%;
		border-bottom: 2px solid ${({ theme }) => theme.colors.font};

		transform: translateX(-100%);
	}

`

export const Span = styled.span`
	position: absolute;
	bottom: 5px;
	left: 0px;
	
	transition: all 0.2s ease;
`

export const Input = styled.input.attrs(() => ({
	autoComplete: 'off',
	required: true,
}))`
	width: 100%;

	font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
	color: ${({ theme }) => theme.colors.font};
	font-family: ${({ theme }) => theme.font.families.paragraph};

	padding-top: 20px;
	border: none;
	outline: none;

	&:focus + ${Label} ${Span},
	&:valid + ${Label} ${Span} {
		transform: translateY(-190%);
		font-size: ${({ theme }) => theme.font.sizes.paragraph_s};
	}

	&:focus + ${Label}::after,
	&:valid + ${Label}::after {
		transform: translateX(0%);
	}

	&:not(:focus):invalid  {
		color: ${({ theme }) => theme.colors.bg};
	}
`

export const TextArea = styled.textarea.attrs(() => ({
	autoComplete: 'off',
	required: true,
	spellcheck: true,
}))`
	width: 100%;
	height: 100px;

	font-size: ${({ theme }) => theme.font.sizes.paragraph_m};
	color: ${({ theme }) => theme.colors.font};
	font-family: ${({ theme }) => theme.font.families.paragraph};

	margin-top: 15px;
	padding-top: 80px;
	border: none;
	outline: none;
	resize: none;

	&:focus + ${Label} ${Span},
	&:valid + ${Label} ${Span} {
		transform: translateY(-700%);
		font-size: ${({ theme }) => theme.font.sizes.paragraph_s};
	}

	&:focus + ${Label}::after,
	&:valid + ${Label}::after {
		transform: translateX(0%);
	}
`
