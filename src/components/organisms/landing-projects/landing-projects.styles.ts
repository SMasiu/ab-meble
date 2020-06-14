import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

type ImageProps = {
	path: string
} & ThemeProps

export const LandingProjectsOuterWrapper = styled.section`
	min-height: 1800px;
	height: 2vh;
	position: relative;
`

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
		'image-name-wrapper-2 . .'
		'image-name-wrapper-3 image-wrapper-2 article-wrapper-2';
`

export const ImageNameWrapper = styled.section`
	display: grid;
	grid-template-columns: 250px 1fr;
	gap: 50px;
	align-items: center;
	justify-items: center;
	position: relative;
`

export const NameHeading = styled.h2`
	font-size: 6rem;
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
	top: calc(50% - 300px);
	width: 100%;
	height: 600px;
	background-image: url('projects-cover.jpg');
	background-size: cover;
	background-position: center;
	background-attachment: fixed;
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
