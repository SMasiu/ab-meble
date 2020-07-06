import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export const ProductDeviderOuterWrapper = styled.section`
	height: 100vh;
	min-height: 900px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`

export const ProductDeviderWrapper = styled.section`
	display: grid;
	align-items: center;
	justify-items: center;
	gap: 50px;
	grid-template-columns: 400px auto 400px;
`

export const ProductHeader = styled.h1`
	font-family: 'Comfortaa', cursive;
	font-size: 4rem;
	margin-bottom: 50px;
	text-align: center;
`

export const ImageWrapper = styled.section`
	width: 500px;
	height: 500px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
`

export const ImageCoverWrapper = styled.figure`
	background-size: cover;
	background-position: center;
	height: 100%;
`

export const ImageOfficeWrapper = styled(ImageCoverWrapper)`
	background-image: url('project3.jpg');
	border-radius: 250px 0 0 250px;
	${({ theme }: ThemeProps) => css`
		border-right: 3px solid ${theme.colors.light300};
	`}
`

export const ImageFlatWrapper = styled(ImageCoverWrapper)`
	background-image: url('project1.jpg');
	border-radius: 0 250px 250px 0;
	height: 100%;
	${({ theme }: ThemeProps) => css`
		border-left: 3px solid ${theme.colors.light300};
	`}
`

export const ArticleWrapper = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
`

export const ArticleHeader = styled.header`
	font-family: 'Comfortaa', cursive;
`

export const ArticleHeading = styled.h2`
	font-size: 3rem;
	font-family: inherit;
`

export const ArticleParagraph = styled.p`
	margin-top: 10px;
`
