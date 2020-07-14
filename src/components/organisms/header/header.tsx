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
import { NavbarItems } from 'types/navbar.types'
import { Link } from 'gatsby'

interface HeaderProps {
	path: string
}

export const Header: React.FC<HeaderProps> = ({ path }) => {
	const [openMenu, setOpenMenu] = useState(false)
	const expandedNav = useScrollNav()
	const className = 'no-scroll'

	const hangleHabmurgerClick = () => {
		let elem = document.body

		openMenu ? elem.classList.remove(className) : elem.classList.add(className)
		setOpenMenu(!openMenu)
	}

	const handleLogoClick = () => {
		document.body.classList.remove(className)
	}

	const scrollTo = (elemId: string) => {
		document.querySelector(elemId)?.scrollIntoView({
			behavior: 'smooth',
		})
	}

	const navbarItems: NavbarItems = [
		{
			name: 'O nas',
			to: path === '/' ? undefined : '/#about-us',
			action: () => scrollTo('#about-us'),
		},
		{
			name: 'Produkty',
			to: '/produkty',
		},
		{
			name: 'Realizacje',
			to: '/realizacje',
		},
		{
			name: 'Referencje',
			to: '/referencje',
		},
		{
			name: 'Kontakt',
			action: () => scrollTo('#footer'),
		},
	]

	return (
		<HeaderWrapper expandedNav={expandedNav}>
			<LogoWrapper onClick={handleLogoClick}>
				<Link to="/">
					<Logo expanded={expandedNav} />
				</Link>
			</LogoWrapper>
			<HeaderNavWrapper>
				<NavbarWrapper>
					<Navbar items={navbarItems} />
				</NavbarWrapper>
				<HeaderHamburgerWrapper>
					<HamburgerMenu onClick={hangleHabmurgerClick} open={openMenu} />
				</HeaderHamburgerWrapper>
			</HeaderNavWrapper>
			<ExpandNav open={openMenu} items={navbarItems} setOpen={setOpenMenu} />
		</HeaderWrapper>
	)
}
