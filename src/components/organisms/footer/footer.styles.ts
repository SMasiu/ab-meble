import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export const FooterOuterWrapper = styled.footer`
	min-height: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: stretch;
	padding: 70px 50px 35px 50px;

	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light300};
	`};

	@media screen and (max-width: 500px) {
		padding: 70px 15px 35px 15px;
	}
`

export const FooterWrapper = styled.div`
	width: 1400px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	@media screen and (max-width: 1500px) {
		width: 90%;
		margin: auto;
	}

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr;
		gap: 50px;
	}
`

export const ContactData = styled.section``

export const ContactDataSection = styled.article`
	margin-bottom: 60px;

	&:last-of-type {
		margin-bottom: 0;
	}
`

export const ContactForm = styled.section``

export const ContactParagraph = styled.p`
	margin: 5px 0;
`

export const CopyRight = styled.p`
	margin-top: 35px;
	${({ theme }: ThemeProps) => css`
		font-size: ${theme.fontSizes.small};
	`}
`

export const FooterHeading = styled.h2`
	${({ theme }: ThemeProps) => css`
		font-size: ${theme.fontSizes.extraLarge};
	`}
`
