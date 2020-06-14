import React from 'react'
import { NavbarWrapper, NavbarLink, NavbarItem } from './navbar.styles'
import { NavbarItems } from 'types/navbar.types'

interface NavbarProps {
	items: NavbarItems
}

export const Navbar: React.FC<NavbarProps> = ({items}) => (
	<nav>
		<NavbarWrapper>
			{items.map(({ name }, i) => (
				<NavbarItem key={i}>
					<NavbarLink>{name}</NavbarLink>
				</NavbarItem>
			))}
		</NavbarWrapper>
	</nav>
)