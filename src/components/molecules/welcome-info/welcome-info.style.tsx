import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export const WelcomeInfoWrapper = styled.section`
	line-height: 150%;
`

export const WelcomeInfoHeading = styled.h3`
	margin-bottom: 5px;
	${({ theme }: ThemeProps) => css`
		font-size: ${theme.fontSizes.large};
	`}
`

export const WelcomeInfoFooter = styled.footer`
	cursor: pointer;
	margin-top: 20px;
	display: flex;
	align-items: center;
`

export const WelcomeInfoArrowWrapper = styled.div`
	margin-left: 10px;
	border-radius: 50%;
`
