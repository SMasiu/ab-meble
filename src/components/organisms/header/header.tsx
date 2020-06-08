import React from 'react'
import { Logo } from 'components/atoms/logo/logo'
import { Navbar } from 'components/molecules/navbar/navbar'
import { HeaderWrapper } from './header.styles'

export const Header = () => {
	return (
		<HeaderWrapper>
			<Logo />
			<Navbar />
		</HeaderWrapper>
	)
}
