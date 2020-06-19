import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

type ReferenceWrapperProps = {
	index: number
} & ThemeProps

export const ReferenceWrapper = styled.section<ReferenceWrapperProps>`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	padding: 50px 0;

	${({ index }: ReferenceWrapperProps) =>
		index % 2 !== 0 &&
		css`
			${ReferenceImageWrapper} {
				grid-column: 2;
				grid-row: 1;
			}

			${ReferenceArticleWrapper} {
				grid-column: 1;
				grid-row: 1;
			}
		`}
`

export const ReferenceImageWrapper = styled.section`
	padding: 50px;
	display: flex;
	justify-content: center;
`

export const ReferenceImageContainer = styled.figure`
	width: 500px;
`

export const ReferenceArticleWrapper = styled.article`
	padding: 50px;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light200};
	`}
`

export const ArticleHeader = styled.header`
	display: flex;
	align-items: center;
`

export const ArticleLogoWrapper = styled.figure`
	margin-bottom: -4px;
`

export const ArticleLogo = styled.img`
	width: auto;
	height: 50px;
`

export const HeaderName = styled.h2`
	font-family: 'Comfortaa', cursive;
`
