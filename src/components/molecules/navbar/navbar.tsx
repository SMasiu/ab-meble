import React from 'react'
import { NavbarWrapper, NavbarLink, NavbarItem } from './navbar.styles'

export const Navbar: React.FC = () => {
	const navbarItems = [
		{
			name: 'Home',
		},
		{
			name: 'Projekty',
		},
		{
			name: 'Galeria',
		},
		{
			name: 'Kontakt',
		},
	]

	return (
		<nav>
			<NavbarWrapper>
				{navbarItems.map(({ name }, i) => (
					<NavbarItem key={i}>
						<NavbarLink>{name}</NavbarLink>
					</NavbarItem>
				))}
			</NavbarWrapper>
		</nav>
	)
}
