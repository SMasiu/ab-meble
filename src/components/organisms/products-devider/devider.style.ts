import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

type ImageCoverWrapperProps = {
	imageUrl: string
} & ThemeProps

export const DeviderWrapper = styled.section`
	display: grid;
	align-items: center;
	justify-items: center;
	gap: 50px;
	grid-template-columns: 450px auto 450px;
`

export const Header = styled.h1`
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

export const ImageCoverWrapper = styled.figure<ImageCoverWrapperProps>`
	background-size: cover;
	background-position: center;
	height: 100%;

	${({ imageUrl }: ImageCoverWrapperProps) => css`
		background-image: url(${imageUrl});
	`}
`

export const Image1Wrapper = styled(ImageCoverWrapper)`
	border-radius: 250px 0 0 250px;
	${({ theme }: ThemeProps) => css`
		border-right: 3px solid ${theme.colors.light300};
	`}
`

export const Image2Wrapper = styled(ImageCoverWrapper)`
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

export const DeviderOuterWrapper = styled.section`
	height: 100vh;
	min-height: 900px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 1600px) {
		${DeviderWrapper} {
			grid-template-columns: 400px auto 400px;
		}

		${ImageWrapper} {
			width: 400px;
			height: 400px;
		}
	}

	@media screen and (max-width: 1300px) {
		${DeviderWrapper} {
			gap: 10px;
		}

		${ImageWrapper} {
			width: 300px;
			height: 300px;
		}
	}

	@media screen and (max-width: 1150px) {
		height: auto;
		margin: 50px 0;

		${DeviderWrapper} {
			grid-template-columns: 1fr;
			grid-template-rows: repeat(3, auto);
			gap: 50px;
		}

		${ArticleWrapper} {
			max-width: 400px;
		}

		${Header} {
			margin: 50px 0 75px 0;
			font-size: 6rem;
		}

		${ImageWrapper} {
			width: 450px;
			height: 450px;
			grid-template-columns: 1fr;
			grid-template-rows: repeat(2, 1fr);
		}

		${Image1Wrapper} {
			border-radius: 225px 225px 0 0;
			border-right: none;
			${({ theme }: ThemeProps) => css`
				border-bottom: 3px solid ${theme.colors.light300};
			`}
		}

		${Image2Wrapper} {
			border-radius: 0 0 225px 225px;
			border-left: none;
			${({ theme }: ThemeProps) => css`
				border-top: 3px solid ${theme.colors.light300};
			`}
		}
	}

	@media screen and (max-width: 600px) {
		${Header} {
			font-size: 4rem;
		}

		${ArticleHeading} {
			font-size: 2rem;
		}

		${ArticleWrapper} {
			width: auto;
		}

		${ImageWrapper} {
			width: 400px;
			height: 400px;
		}
	}

	@media screen and (max-width: 500px) {
		${ImageWrapper} {
			width: 300px;
			height: 300px;
		}
	}
`
