import React from 'react'
import {
	ExpandNavWrapper,
	ExpandNavContainer,
	ExpandNavItemsWrapper,
	ExpandNavItem,
	ExpandNavLink,
} from './expand-nav.style'
import { NavbarItems } from 'types/navbar.types'

interface ExpandNavProps {
	open: boolean
	items: NavbarItems
}

export const ExpandNav: React.FC<ExpandNavProps> = ({ open, items }) => {
	const handleClick = () => {
		document.body.classList.remove('no-scroll')
	}
	return (
		<ExpandNavWrapper open={open}>
			<ExpandNavContainer>
				<ExpandNavItemsWrapper>
					{items.map(({ name, to }, i) => (
						<ExpandNavItem key={i} onClick={handleClick}>
							<ExpandNavLink to={to}>{name}</ExpandNavLink>
						</ExpandNavItem>
					))}
				</ExpandNavItemsWrapper>
			</ExpandNavContainer>
		</ExpandNavWrapper>
	)
}
