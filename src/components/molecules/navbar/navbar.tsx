import React from 'react'
import { NavbarWrapper, NavbarLink, NavbarItem } from './navbar.styles'
import { NavbarItems } from 'types/navbar.types'

interface NavbarProps {
	items: NavbarItems
}

export const Navbar: React.FC<NavbarProps> = ({ items }) => (
	<nav>
		<NavbarWrapper>
			{items.map(({ name, to }, i) => (
				<NavbarItem key={i}>
					<NavbarLink to={to}>{name}</NavbarLink>
				</NavbarItem>
			))}
		</NavbarWrapper>
	</nav>
)
