import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export const SubmitWrapper = styled.button`
	padding: 5px 20px;
	cursor: pointer;
	display: flex;
	align-items: center;
	font-family: 'Montserrat', sans-serif;

	${({ theme }: ThemeProps) => css`
		border: 2px solid ${theme.colors.primary100};
		background-color: ${theme.colors.light100};
	`}
`

export const SubmitText = styled.p`
	margin-right: 15px;
	${({ theme }: ThemeProps) => css`
		font-size: ${theme.fontSizes.medium};
	`}
`
