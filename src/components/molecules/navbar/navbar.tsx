import React from 'react'
import {
	NavbarWrapper,
	NavbarLink,
	NavbarItem,
	NavbarLinkP,
} from './navbar.styles'
import { NavbarItems } from 'types/navbar.types'

interface NavbarProps {
	items: NavbarItems
}

export const Navbar: React.FC<NavbarProps> = ({ items }) => (
	<nav>
		<NavbarWrapper>
			{items.map(({ name, to, action }, i) => (
				<NavbarItem key={i}>
					{to ? (
						<NavbarLink to={to}>{name}</NavbarLink>
					) : (
						<NavbarLinkP onClick={action}>{name}</NavbarLinkP>
					)}
				</NavbarItem>
			))}
		</NavbarWrapper>
	</nav>
)
