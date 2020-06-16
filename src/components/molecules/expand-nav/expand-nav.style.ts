import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'
import { Link } from 'gatsby'

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

export const ExpandNavContainer = styled.nav`
	height: 100%;
`

export const ExpandNavItemsWrapper = styled.ul`
	list-style-type: none;
	height: 100%;
	padding: 100px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const ExpandNavItem = styled.li`
	text-align: center;
	width: 100%;
`

export const ExpandNavLink = styled(Link)`
	display: block;
	padding: 25px 0;
	cursor: pointer;
	transition: background-color 0.2s;
	will-change: background-color;
	${({ theme }: ThemeProps) => css`
		font-size: ${theme.fontSizes.extraLarge};
		&:hover {
			background-color: ${theme.colors.light300};
		}
	`}
`
