import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

type ExpandNavWrapperProps = {
	open: boolean
} & ThemeProps

export const ExpandNavWrapper = styled.section`
	width: 100vw;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10000;
	transform: translateX(100%);
	transition: transform 0.4s;
	will-change: transform;

	${({ theme }: ThemeProps) => css`
		background-color: ${theme.colors.light100};
	`}

	${({ open }: ExpandNavWrapperProps) =>
		open &&
		css`
			transform: translateX(0);
		`}
`
