import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

type ReferenceWrapperProps = {
	index: number
} & ThemeProps

export const ReferenceWrapper = styled.section<ReferenceWrapperProps>`
	display: grid;
	grid-template-columns: repeat(2, 1fr);

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

export const ReferenceImageWrapper = styled.figure``

export const ReferenceArticleWrapper = styled.article``
