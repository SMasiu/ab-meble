import React from 'react'
import {
	ExpandNavWrapper,
	ExpandNavContainer,
	ExpandNavItemsWrapper,
	ExpandNavItem,
	ExpandNavLink,
	ExpandNavLinkP,
} from './expand-nav.style'
import { NavbarItems } from 'types/navbar.types'

interface ExpandNavProps {
	open: boolean
	items: NavbarItems
	setOpen: (val: boolean) => void
}

export const ExpandNav: React.FC<ExpandNavProps> = ({
	open,
	items,
	setOpen,
}) => {
	const handleClick = () => {
		document.body.classList.remove('no-scroll')
		setOpen(false)
	}
	return (
		<ExpandNavWrapper open={open}>
			<ExpandNavContainer>
				<ExpandNavItemsWrapper>
					{items.map(({ name, to, action }, i) => (
						<ExpandNavItem key={i} onClick={handleClick}>
							{to ? (
								<ExpandNavLink to={to}>{name}</ExpandNavLink>
							) : (
								<ExpandNavLinkP onClick={action}>{name}</ExpandNavLinkP>
							)}
						</ExpandNavItem>
					))}
				</ExpandNavItemsWrapper>
			</ExpandNavContainer>
		</ExpandNavWrapper>
	)
}
