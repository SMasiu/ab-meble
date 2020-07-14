import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

type RealizationWrapperCoverProps = {
	url: string
}

type RealizationWrapperProps = {
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
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light100};
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
		border: 2px solid ${theme.colors.light300};
		box-shadow: 0 2px 4px ${theme.colors.dark300 + '66'};
	`}
`

export const ImageWrapper1 = styled(ImageWrapper)`
	top: 50%;
	transform: translate(-50%, -50%);
	width: 400px;
	height: 400px;
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
		border: 2px solid ${theme.colors.light300};
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

export const RealizationCoversWrapper = styled.section`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	gap: 2px;
	position: absolute;
	top: 0;
	height: 100%;
	width: 50%;
`

export const RealizationCover = styled.figure`
	${({ url }: RealizationWrapperCoverProps) => css`
		background-image: url(${url});
		background-size: cover;
		background-position: center;
	`};
`

export const RealizationCover1 = styled(RealizationCover)`
	grid-area: cover1;
`

export const RealizationCover2 = styled(RealizationCover)`
	grid-area: cover2;
`

export const RealizationCover3 = styled(RealizationCover)`
	grid-area: cover3;
`

export const RealizationWrapper = styled.section<RealizationWrapperProps>`
	height: 100vh;
	min-height: 900px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	position: relative;

	${({ index }: RealizationWrapperProps) =>
		index % 2 === 1
			? css`
					grid-template-areas: 'realization-article-wrapper realization-image-wrapper';

					${RealizationCoversWrapper} {
						right: 0;
						grid-template-areas:
							'cover2 cover1'
							'cover3 cover1';
					}

					${RealizationArticle} {
						padding: 100px 300px 100px 100px;
					}

					@media screen and (max-width: 1550px) {
						${ImageWrapper1} {
							left: -50%;
							top: auto;
							bottom: 50px;
							transform: translate(-50%, 0);
						}

						${RealizationArticle} {
							right: 0;
						}
					}
			  `
			: css`
					grid-template-areas: 'realization-image-wrapper realization-article-wrapper';

					${RealizationCoversWrapper} {
						left: 0;
						grid-template-areas:
							'cover1 cover2'
							'cover1 cover3';
					}

					${ImageWrapper1} {
						right: 0;
						transform: translate(50%, -50%);
					}

					${RealizationArticle} {
						padding: 100px 100px 100px 300px;
					}

					@media screen and (max-width: 1550px) {
						${ImageWrapper1} {
							right: -50%;
							top: auto;
							bottom: 50px;
							transform: translate(50%, 0);
						}

						${RealizationArticle} {
							left: 0;
						}
					}
			  `}

	@media screen and (max-width: 1550px) {
		${RealizationArticle} {
			justify-content: flex-start;
			padding: 200px 100px;
			width: 100%;
		}

		${ArticleWaterMarkText} {
			font-size: 60vh;
		}

		${Line} {
			display: none;
		}
	}

	@media screen and (max-width: 1200px) {
		${ArticleWaterMarkText} {
			display: none;
		}

		${ImageWrapper1} {
			width: 350px;
			height: 350px;
		}
	}

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr;
		grid-template-areas:
			'realization-article-wrapper'
			'realization-image-wrapper';

		${ImageWrapper1} {
			display: none;
		}

		${RealizationArticle} {
			padding: 50px 100px;
			justify-content: center;
		}
	}

	@media screen and (max-width: 700px) {
		height: auto;
		grid-template-rows: minmax(500px, auto) 600px;

		${ArrowNext} {
			display: none;
		}
	}

	@media screen and (max-width: 500px) {
		grid-template-rows: minmax(500px, auto) 500px;
		${RealizationArticle} {
			padding: 0 50px;
		}
	}
`
