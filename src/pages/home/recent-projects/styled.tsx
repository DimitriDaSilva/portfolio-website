import { up, down } from 'styled-breakpoints'
import styled from 'styled-components'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	width: 100%;
`

export const Projects = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	width: 90%;

	gap: 5vw 5vw;

	${down('tablet')} {
		flex-direction: column;
		flex-wrap: no-wrap;
	}
	
	${up('tablet')} {
		flex-direction: row;
		flex-wrap: wrap;
	}
	
	${up('desktop')} {
		flex-direction: row;
		flex-wrap: no-wrap;
	}

	padding-bottom: 30px;
`
