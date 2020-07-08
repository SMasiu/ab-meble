import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

type RealizationWrapperProps = {
	url: string
	index: number
} & ThemeProps

type ImageWrapperProps = {
	url: string
} & ThemeProps

export const RealizationImageWrapper = styled.section`
	height: 100%;
	position: relative;
	grid-area: realization-image-wrapper;
`

export const RealizationArticleWrapper = styled.section`
	height: 100%;
	position: relative;
	grid-area: realization-article-wrapper;
`

export const RealizationArticle = styled.article`
	position: absolute;
	width: 800px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light100 + 'dd'};
	`};
`

export const ArticleHeader = styled.header`
	margin-bottom: 25px;
`

export const ArticleSubHeading = styled.h3`
	font-size: 2rem;
	font-family: 'Comfortaa', cursive;
`

export const ArticleHeading = styled.h2`
	font-size: 4rem;
	font-family: 'Comfortaa', cursive;
`

export const ArticleParagraph = styled.p``

export const ArticleWaterMarkText = styled.div`
	position: absolute;
	font-size: 100vh;
	opacity: 0.02;
	font-weight: bold;
	left: 50%;
	top: 50%;
	mix-blend-mode: multiply;
	transform: translate(-50%, -50%);
`

export const ImageWrapper = styled.figure<ImageWrapperProps>`
	border-radius: 50%;
	background-size: cover;
	background-position: center;
	position: absolute;
	${({ url, theme }: ImageWrapperProps) => css`
		background-image: url(${url});
		border: 4px solid ${theme.colors.light300};
		box-shadow: 0 2px 4px ${theme.colors.dark300 + '66'};
	`}
`

export const ImageWrapper1 = styled(ImageWrapper)`
	top: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
	height: 400px;
`

export const ImageWrapper2 = styled(ImageWrapper)`
	top: 150px;
	width: 350px;
	height: 350px;
`

export const ImageWrapper3 = styled(ImageWrapper)`
	bottom: 100px;
	width: 300px;
	height: 300px;
`

export const ArrowNext = styled.div`
	position: absolute;
	width: 80px;
	height: 80px;
	bottom: 25px;
	left: 50%;
	transform: translateX(-50%);
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light100};
		border: 4px solid ${theme.colors.light300};
		box-shadow: 0 2px 4px ${theme.colors.dark300 + '66'};
	`}
`

export const Line = styled.div`
	position: absolute;
	height: 45%;
	bottom: 30px;
	left: 50%;
	transform: translateX(-50%);
	width: 4px;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light300};
	`}
`

export const RealizationWrapper = styled.section`
	height: 100vh;
	min-height: 900px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;
	${({ url }: RealizationWrapperProps) => css`
		background-image: url(${url});
		background-size: cover;
		background-position: center;
	`};

	${({ index }: RealizationWrapperProps) =>
		index % 2 === 0
			? css`
					grid-template-areas: 'realization-article-wrapper realization-image-wrapper';

					${ImageWrapper2} {
						right: 200px;
					}

					${ImageWrapper3} {
						right: 500px;
					}

					${RealizationArticle} {
						padding: 100px 200px 100px 100px;
						right: 125px;
					}
			  `
			: css`
					grid-template-areas: 'realization-image-wrapper realization-article-wrapper';

					${ImageWrapper1} {
						right: 0;
						transform: translate(50%, -50%);
					}

					${ImageWrapper2} {
						left: 200px;
					}

					${ImageWrapper3} {
						left: 500px;
					}

					${RealizationArticle} {
						padding: 100px 100px 100px 200px;
						right: 50px;
						left: 125px;
					}
			  `}
`
