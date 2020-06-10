import styled, { css } from 'styled-components'
import { ThemeProps, ThemeColorNames } from 'types/theme.types'

type LineThroughProps = {
	color?: ThemeColorNames
} & ThemeProps

export const LineThrough = styled.div<LineThroughProps>`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	height: 100%;
	width: 8px;
	${({ theme, color }: LineThroughProps) => css`
		background-color: ${theme.getColor(color || ThemeColorNames.light100)};
	`}
`
