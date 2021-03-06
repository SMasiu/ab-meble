import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

type ReferenceWrapperProps = {
	index: number
} & ThemeProps

type ArticleProjectImageProps = {
	url: string
} & ThemeProps

export const ReferenceImageWrapper = styled.section`
	display: flex;
	justify-content: center;
	${({ theme }: ThemeProps) => css`
		border: solid 4px ${theme.colors.light300};
	`}
`

export const ReferenceImageContainer = styled.figure`
	width: 500px;
	margin-bottom: -4px;
`

export const ReferenceArticleWrapper = styled.article`
	padding: 50px 95px;
	position: relative;
`

export const ArticleHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 2.2rem;
	height: 150px;
`

export const ArticleLogoWrapper = styled.figure`
	height: 150px;
	width: 150px;
	padding: 25px;
	margin-bottom: -4px;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	left: -50px;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light300};
		border: 4px solid ${theme.colors.light100};
	`}
`

export const ArticleLogo = styled.img`
	width: 100%;
`

export const HeaderName = styled.h2`
	font-family: 'Comfortaa', cursive;
	text-align: center;
`

export const ArticleText = styled.p`
	&::before,
	&::after {
		content: '"';
		font-weight: bold;
	}
`

export const ArticleProjectImage = styled.figure<ArticleProjectImageProps>`
	width: 350px;
	height: 350px;
	border-radius: 50%;
	background-size: cover;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: -75px;
	${({ url, theme }: ArticleProjectImageProps) => css`
		background-image: url(${url});
		border: 4px solid ${theme.colors.light300};
		box-shadow: 0 2px 4px ${theme.colors.dark300 + '77'};
	`};
`

export const ReferenceWrapper = styled.section<ReferenceWrapperProps>`
	display: grid;
	padding: 25px;
	grid-template-columns: 500px 1fr;
	border-radius: 25px;
	${({ theme }: ReferenceWrapperProps) => css`
		background-color: ${theme.colors.light300};
		box-shadow: 0 2px 4px ${theme.colors.dark300 + '77'};
	`}

	${({ index }: ReferenceWrapperProps) =>
		index % 2 !== 0 &&
		css`
			grid-template-columns: 1fr 500px;
			${ReferenceImageWrapper} {
				grid-column: 2;
				grid-row: 1;
			}

			${ReferenceArticleWrapper} {
				grid-column: 1;
				grid-row: 1;

				${ArticleLogoWrapper} {
					right: -50px !important;
					left: auto !important;
				}
			}
		`}

	@media screen and (max-width: 1400px) {
		grid-template-columns: 1fr;

		${ReferenceImageWrapper} {
			grid-column: 1;
			grid-row: 2;
			border: none;
		}

		${ReferenceArticleWrapper} {
			grid-column: 1;
			grid-row: 1;
		}

		${ArticleProjectImage} {
			display: none;
		}
	}

	@media screen and (max-width: 800px) {
		${ReferenceImageContainer} {
			width: 100%;
		}

		${ReferenceArticleWrapper} {
			padding: 0 0 50px 0;
		}

		${ArticleLogoWrapper} {
			display: none;
		}
	}

	@media screen and (max-width: 400px) {
		padding: 15px;

		${ReferenceArticleWrapper} {
			padding: 0 0 25px 0;
		}

		${ArticleHeader} {
			height: 100px;
		}
	}
`
