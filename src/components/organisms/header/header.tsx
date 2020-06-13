import React, { useState } from 'react'
import { Logo } from 'components/atoms/logo/logo'
import { Navbar } from 'components/molecules/navbar/navbar'
import {
	HeaderWrapper,
	HeaderNavWrapper,
	HeaderHamburgerWrapper,
	LogoWrapper,
	NavbarWrapper,
} from './header.styles'
import { HamburgerMenu } from 'components/atoms/hamburger-menu/hamburger-menu'
import { ExpandNav } from 'components/molecules/expand-nav/expand-nav'
import { useScrollNav } from 'hooks/use-scroll-nav'

export const Header: React.FC = () => {
	const [openMenu, setOpenMenu] = useState(false)
	const expandedNav = useScrollNav()
	const hangleHabmurgerClick = () => setOpenMenu(!openMenu)

	return (
		<HeaderWrapper expandedNav={expandedNav}>
			<LogoWrapper>
				<Logo expanded={expandedNav} />
			</LogoWrapper>
			<HeaderNavWrapper>
				<NavbarWrapper>
					<Navbar />
				</NavbarWrapper>
				<HeaderHamburgerWrapper>
					<HamburgerMenu onClick={hangleHabmurgerClick} open={openMenu} />
				</HeaderHamburgerWrapper>
			</HeaderNavWrapper>
			<ExpandNav open={openMenu} />
		</HeaderWrapper>
	)
}
