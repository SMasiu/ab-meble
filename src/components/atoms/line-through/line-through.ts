import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export const LineThrough = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	height: 100%;
	width: 8px;
	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light100};
	`}
`
