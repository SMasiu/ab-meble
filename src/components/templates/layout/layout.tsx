/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Header } from 'components/organisms/header/header'
import { GlobalStyles } from 'styles/global-styles'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

interface LayoutProps {
	children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<div>
			<ThemeProvider theme={theme}>
				<GlobalStyles />
				<Header />
				<main>{children}</main>
			</ThemeProvider>
		</div>
	)
}

export default Layout
