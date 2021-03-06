import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

type ImageProps = {
	path: string
} & ThemeProps

export const LandingProjectsWrapper = styled.div`
	position: relative;
	height: 100%;
	width: 1800px;
	margin: auto;
	padding: 100px 0;
	display: grid;
	row-gap: 200px;
	grid-template-columns: 2fr 1fr 1fr;
	grid-template-rows: repeat(3, minmax(400px, 1fr));
	grid-template-areas:
		'image-name-wrapper-1 image-wrapper-1 article-wrapper-1'
		'image-name-wrapper-2 . article-wrapper-2'
		'image-name-wrapper-3 image-wrapper-2 article-wrapper-3';
`

export const ImageNameWrapper = styled.section`
	display: grid;
	grid-template-columns: 250px 1fr;
	gap: 50px;
	align-items: center;
	justify-items: center;
	position: relative;
`

export const NameHeadingWrapper = styled.div``

export const NameHeading = styled.h2`
	font-size: 4rem;
	font-family: 'Comfortaa', cursive;
`

export const NameSubHeading = styled.h3`
	font-size: 2rem;
	font-family: 'Comfortaa', cursive;
`

export const ImageNameWrapper1 = styled(ImageNameWrapper)`
	grid-area: image-name-wrapper-1;
`

export const ImageNameWrapper2 = styled(ImageNameWrapper)`
	grid-area: image-name-wrapper-2;
`

export const ImageNameWrapper3 = styled(ImageNameWrapper)`
	grid-area: image-name-wrapper-3;
`

export const ImageWrapper = styled.section`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`

export const ImageWrapper1 = styled(ImageWrapper)`
	grid-area: image-wrapper-1;
`

export const ImageWrapper2 = styled(ImageWrapper)`
	grid-area: image-wrapper-2;
`

export const ArticleWrapper = styled.article`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ArticleWrapper1 = styled(ArticleWrapper)`
	grid-area: article-wrapper-1;
`

export const ArticleWrapper2 = styled(ArticleWrapper)`
	grid-area: article-wrapper-2;
`

export const ArticleWrapper3 = styled(ArticleWrapper)`
	grid-area: article-wrapper-3;
`

export const Image = styled.figure<ImageProps>`
	width: 400px;
	height: 400px;
	background-position: center;
	background-size: cover;
	border-radius: 50%;

	${({ path, theme }: ImageProps) => css`
		background-image: url(${path});
		border: solid 4px ${theme.colors.light300};
	`}
`

export const ImageContentWrapper = styled.div`
	position: absolute;
`

export const ImageContentWrapper1 = styled(ImageContentWrapper)`
	top: 200px;
`

export const ImageContentWrapper2 = styled(ImageContentWrapper)`
	top: -200px;
`

export const ProjectsBackground = styled.section`
	position: absolute;
	width: 100%;
	height: 300px;
	background-image: url('projects-cover.jpg');
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
`

export const ProjectsBackground1 = styled(ProjectsBackground)`
	top: calc(32.5% - 150px);
`

export const ProjectsBackground2 = styled(ProjectsBackground)`
	bottom: calc(32.5% - 150px);
`

export const LineThrough = styled.div`
	width: 4px;
	transform: translateX(-50%);
	position: absolute;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light300};
	`};
`

export const LineThroughLeft = styled(LineThrough)`
	height: 100%;
	left: 600px;
`

export const LineThroughRight = styled(LineThrough)`
	top: 50%;
	height: 50%;
	transform: translate(-50%, -50%);
	right: 670px;
`

export const MobileBackground = styled.div`
	display: none;
	height: 85%;
	width: 575px;
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);

	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light300 + 'bb'};
	`}
`

export const LandingProjectsOuterWrapper = styled.section`
	min-height: 1800px;
	height: 2vh;
	position: relative;

	@media screen and (max-width: 1850px) {
		${LandingProjectsWrapper} {
			width: 1400px;
		}

		${ImageNameWrapper} {
			gap: 0;
			grid-template-columns: 1fr 1fr;
		}

		${Image} {
			width: 300px;
			height: 300px;
		}

		${ImageContentWrapper1} {
			top: 300px;
		}

		${LineThroughLeft} {
			left: 525px;
		}

		${LineThroughRight} {
			right: 525px;
		}
	}

	@media screen and (max-width: 1450px) {
		height: auto;
		${LandingProjectsWrapper} {
			width: 95%;
			gap: 50px;
			grid-template-columns: 1fr;
			grid-template-rows: repeat(6, auto);
			grid-template-areas:
				'image-name-wrapper-1'
				'article-wrapper-1'
				'image-name-wrapper-2'
				'article-wrapper-2'
				'image-name-wrapper-3'
				'article-wrapper-3';
		}

		${LineThroughRight}, ${ImageWrapper1}, ${ImageWrapper2}, ${LineThroughLeft} {
			display: none;
		}

		${Image} {
			width: 600px;
			height: 600px;
		}

		${ImageNameWrapper} {
			display: flex;
			justify-content: center;
		}

		${NameHeadingWrapper} {
			position: absolute;
			padding: 10px 0;
			border-radius: 5px;
			width: 600px;
			text-align: center;
			${({ theme }: ThemeProps) => css`
				background-color: ${theme.colors.light300};
			`}
		}

		${ArticleWrapper} {
			height: 100%;
			width: 575px;
			margin: auto;
			padding: 25px;
		}

		${MobileBackground} {
			display: block;
		}

		${ProjectsBackground1} {
			top: calc(30% - 150px);
		}

		${ProjectsBackground2} {
			bottom: calc(38.25% - 150px);
		}
	}

	@media screen and (max-width: 800px) {
		${Image} {
			width: 400px;
			height: 400px;
		}

		${ArticleWrapper} {
			width: 375px;
		}

		${NameHeadingWrapper} {
			width: 400px;
		}

		${MobileBackground} {
			width: 400px;
		}

		${ProjectsBackground1} {
			top: calc(29.25% - 150px);
		}

		${ProjectsBackground2} {
			bottom: calc(39.75% - 150px);
		}
	}

	@media screen and (max-width: 550px) {
		${Image} {
			width: 300px;
			height: 300px;
		}

		${NameHeadingWrapper} {
			width: 300px;
		}

		${NameHeading} {
			font-size: 3rem;
		}

		${NameSubHeading} {
			font-size: 1.5rem;
		}

		${MobileBackground} {
			width: 275px;
		}

		${ArticleWrapper} {
			width: 275px;
		}

		${ProjectsBackground1} {
			top: calc(28.25% - 150px);
		}

		${ProjectsBackground2} {
			bottom: calc(41.25% - 150px);
		}
	}
`
