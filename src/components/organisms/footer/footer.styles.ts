import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export const FooterOuterWrapper = styled.footer`
	min-height: 400px;
	display: flex;
	justify-content: center;
	align-items: stretch;

	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light300};
	`};
`

export const FooterWrapper = styled.div`
	width: 1400px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding: 50px;
`

export const ContactData = styled.section`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`

export const ContactForm = styled.section``

export const ContactParagraph = styled.p`
	margin: 5px 0;
`
