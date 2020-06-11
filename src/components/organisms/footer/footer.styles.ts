import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export const FooterOuterWrapper = styled.footer`
	min-height: 500px;

	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light300};
	`};
`

export const FooterWrapper = styled.div`
	width: 1400px;
	margin: auto;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding: 50px;
`

export const ContactData = styled.section``

export const ContactForm = styled.section``
