import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

type HeaderWrapperProps = {
	expandedNav: boolean
} & ThemeProps

export const HeaderWrapper = styled.header<HeaderWrapperProps>`
	z-index: 9000;
	position: fixed;
	top: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition-duration: 0.2s;
	transition-property: padding, background-color;
	will-change: background-color;
	padding: 10px 20px;

	${({ theme, expandedNav }: HeaderWrapperProps) =>
		!expandedNav &&
		css`
			background-color: ${theme.colors.light100};
		`}
`

export const HeaderNavWrapper = styled.div`
	display: flex;
	align-items: center;
`

export const LogoWrapper = styled.div`
	z-index: 11000;
`

export const HeaderHamburgerWrapper = styled.div`
	margin-left: 15px;
	z-index: 11000;
`

export const NavbarWrapper = styled.div`
	@media screen and (max-width: 1000px) {
		display: none;
	}
`
