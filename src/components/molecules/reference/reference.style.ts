import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

type ReferenceWrapperProps = {
	index: number
} & ThemeProps

type ArticleProjectImageProps = {
	url: string
} & ThemeProps

export const ReferenceWrapper = styled.section<ReferenceWrapperProps>`
	display: grid;
	padding: 25px;
	grid-template-columns: 500px 1fr;
	${({ theme }: ReferenceWrapperProps) => css`
		background-color: ${theme.colors.light100};
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
`

export const ReferenceImageWrapper = styled.section`
	display: flex;
	justify-content: center;
	${({ theme }: ThemeProps) => css`
		border: solid 4px ${theme.colors.light300};
	`}
`

export const ReferenceImageContainer = styled.figure`
	width: 500px;
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
	`}
`
