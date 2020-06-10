import React from 'react'
import {
	HamburgerMenuWrapper,
	HamburgerItemWrapperTop,
	HamburgerItemWrapperCenter,
	HamburgerItemWrapperBottom,
	HamburgerItem,
} from './hamburger-menu.style'

interface HamburgerMenuProps {
	onClick: () => void
	open: boolean
}

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
	onClick,
	open,
}) => (
	<HamburgerMenuWrapper onClick={onClick} open={open}>
		<HamburgerItemWrapperTop>
			<HamburgerItem />
		</HamburgerItemWrapperTop>
		<HamburgerItemWrapperCenter>
			<HamburgerItem />
		</HamburgerItemWrapperCenter>
		<HamburgerItemWrapperBottom>
			<HamburgerItem />
		</HamburgerItemWrapperBottom>
	</HamburgerMenuWrapper>
)
