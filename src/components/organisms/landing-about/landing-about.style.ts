import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export const AboutOuterWrapper = styled.section`
	height: 100vh;
	min-height: 800px;
`

export const AboutWrapper = styled.section`
	width: 1400px;
	height: 100%;
	margin: auto;
	display: grid;
	grid-template-columns: 800px 1fr;
`

export const AboutImageWrapper = styled.div`
	padding: 50px;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light300};
	`}
`

export const AboutImage = styled.figure`
	height: 100%;
	width: 100%;
	background-image: url('about.jpg');
	background-position: center;
	background-size: cover;
`

export const AboutArticleWrapper = styled.article`
	padding: 50px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const AboutHeading = styled.h2`
	margin: 10px 0;
	${({ theme }: ThemeProps) => css`
		font-size: ${theme.fontSizes.extraLarge};
	`}
`

export const AboutParagraph = styled.p`
	margin: 10px 0;
`

export const ReadMore = styled.div`
	margin: 10px 0;
	display: flex;
	align-items: center;
`

export const ReadMoreText = styled.p`
	margin-right: 10px;
`
