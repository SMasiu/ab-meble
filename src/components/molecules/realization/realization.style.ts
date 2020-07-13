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
						right: 20%;
					}

					${ImageWrapper3} {
						right: 47.5%;
					}

					${RealizationArticle} {
						padding: 100px 200px 100px 100px;
						right: 125px;
					}

					@media screen and (max-width: 1920px) {
						${RealizationArticle} {
							right: 50px;
						}
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

						${ImageWrapper2} {
							right: 10%;
						}
					}

					@media screen and (max-width: 1200px) {
						${ImageWrapper2} {
							right: 50% !important;
							transform: translateX(50%);
						}

						${ImageWrapper3} {
							right: 50% !important;
							transform: translateX(50%);
						}
					}
			  `
			: css`
					grid-template-areas: 'realization-image-wrapper realization-article-wrapper';

					${ImageWrapper1} {
						right: 0;
						transform: translate(50%, -50%);
					}

					${ImageWrapper2} {
						left: 20%;
					}

					${ImageWrapper3} {
						left: 47.5%;
					}

					${RealizationArticle} {
						padding: 100px 100px 100px 200px;
						right: 50px;
						left: 125px;
					}

					@media screen and (max-width: 1920px) {
						${RealizationArticle} {
							left: 50px;
							width: calc(100% - 50px);
						}
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

						${ImageWrapper2} {
							left: 10%;
						}
					}

					@media screen and (max-width: 1200px) {
						${ImageWrapper2} {
							left: 50% !important;
							transform: translateX(-50%);
						}

						${ImageWrapper3} {
							left: 50% !important;
							transform: translateX(-50%);
						}
					}
			  `}

	@media screen and (max-width: 1920px) {
		${RealizationArticle} {
			width: calc(100% - 50px);
		}
	}

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

		${ImageWrapper2} {
			top: 200px;
		}

		${ImageWrapper3} {
			bottom: 150px;
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

		${ImageWrapper2}, ${ImageWrapper3} {
			transform: translate(0);
			bottom: auto;
			top: -50px;
		}

		${ImageWrapper2} {
			right: auto !important;
			left: 50px !important;
		}

		${ImageWrapper3} {
			left: auto !important;
			right: 50px !important;
			width: 350px;
			height: 350px;
		}
	}

	@media screen and (max-width: 700px) {
		height: auto;
		grid-template-rows: minmax(500px, auto) 600px;
		${ImageWrapper2} {
			left: 50% !important;
			transform: translateX(-50%);
		}

		${ImageWrapper3} {
			top: auto;
			bottom: 50px;
			left: 50% !important;
			transform: translateX(-50%);
			width: 300px;
			height: 300px;
		}

		${ArrowNext} {
			display: none;
		}
	}

	@media screen and (max-width: 500px) {
		grid-template-rows: minmax(500px, auto) 500px;
		${RealizationArticle} {
			padding: 0 50px;
		}

		${ImageWrapper2} {
			width: 300px;
			height: 300px;
		}

		${ImageWrapper3} {
			width: 250px;
			height: 250px;
		}
	}
`
