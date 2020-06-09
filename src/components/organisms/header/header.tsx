import React from 'react'
import { Logo } from 'components/atoms/logo/logo'
import { Navbar } from 'components/molecules/navbar/navbar'
import { HeaderWrapper, HeaderNavWrapper, HeaderHamburgerWrapper } from './header.styles'
import { HamburgerMenu } from 'components/atoms/hamburger-menu/hamburger-menu'

export const Header: React.FC = () => {
	return (
		<HeaderWrapper>
			<Logo />
			<HeaderNavWrapper>
				<Navbar />
				<HeaderHamburgerWrapper>
					<HamburgerMenu />
				</HeaderHamburgerWrapper>
			</HeaderNavWrapper>
		</HeaderWrapper>
	)
}
