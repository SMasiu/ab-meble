import styled, { css } from 'styled-components'
import { ThemeProps } from 'types/theme.types'
import { Link } from 'gatsby'

export const NavbarWrapper = styled.ul`
	list-style-type: none;
	display: flex;
`

export const NavbarItem = styled.li``

export const NavbarLink = styled(Link)`
	padding: 10px 30px;
	cursor: pointer;
	display: block;
	${({ theme }: ThemeProps) => css`
		font-size: ${theme.fontSizes.large};
	`}
`

export const NavbarLinkP = styled.p`
	padding: 10px 30px;
	cursor: pointer;
	display: block;
	${({ theme }: ThemeProps) => css`
		font-size: ${theme.fontSizes.large};
	`}
`
