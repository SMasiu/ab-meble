import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'

export const NavbarWrapper = styled.ul`
	list-style-type: none;
	display: flex;
`

export const NavbarItem = styled.li``

export const NavbarLink = styled.a`
	padding: 20px 30px;
	${({ theme }: ThemeProps) => css`
		font-size: ${theme.fontSizes.extraLarge};
	`}
`
