import {down, up} from 'styled-breakpoints'
import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;

  width: 100%;

  ${down('mobile')} {
	  padding: 0px 10px;
  }

  ${up('mobile')} {
    padding: 0px 20px;
  }

  ${up('tablet')} {
    padding: 0px 40px;
  }

  ${up('desktop')} {
    padding: 0px 72px;
  }

  ${up('desktopLarge')} {
    padding: 0px 72px;
    width: ${({ theme }) => theme.breakpoints.desktopLarge}px;
  }
`

export const ProjectsWrapper = styled.div`
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
`
